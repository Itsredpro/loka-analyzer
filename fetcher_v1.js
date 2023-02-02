const socketIO = require('socket.io-client')
const fs = require('fs')
const IO = socketIO.io


async function findNearest(string, find){
    string = string.split('')
    for (var ia = 0; ia < string.length; ia++){
        if (string[ia] == find){
            return ia
        }
    }
}




module.exports.eldritchbot = function(fightId){
    var actionsdid = {}

    async function logAction(actiontype,full){
        if (actiontype.startsWith('(') || actiontype == 'Air' || actiontype == '==='){
            return
        }


        if (actionsdid[actiontype] == undefined){
            //actionsdid[actiontype] = 1
            actionsdid[actiontype] = []
            actionsdid[actiontype].push(full)
        } else {
            //actionsdid[actiontype] = actionsdid[actiontype] + 1
            actionsdid[actiontype].push(full)
        }
    }


    return new Promise(r=>{
        const socket = IO('https://eldritchbot.com')

        var onevent = socket.onevent;
        socket.onevent = function (packet) {
            var args = packet.data || [];
            onevent.call (this, packet);    // original call
            packet.data = ["*"].concat(args);
            onevent.call(this, packet);      // additional call to catch-all
        };
        


        /*
        socket.on("*", (event,data) => {
            console.log(event)
        });
        */

        socket.on('battleLog', async (data) => {
            //console.log(data)

            setTimeout(() => {
                socket.disconnect()
            }, 1000);

            

            var endc = 'nil'
            for (var i2 = 0; i2 < data.length; i2++){
                var cl = data[i2].substring(15,data[i2].length)

                if (cl.startsWith('=== Battle Ended ===')){
                    endc = i2 - 1
                }
            }


            if (endc === 'nil'){return r({
                error:true
            })}

            await fs.writeFileSync('debug.txt','')
            var stream = await fs.createWriteStream('debug.txt')

            for (var i1 = 0; i1 < endc; i1++){
                var time = data[i1].substring(0,14)
                var text = data[i1].substring(15,data[i1].length)
                var fulltext = text

                stream.write(fulltext + '\n')


                var int1 = await findNearest(text,'(')
                var user = text.substring(0,int1 - 1)
                var hp = text.substring(int1 + 1, await findNearest(text,')') - 3)

                text = text.slice(await findNearest(text,')') + 2)

                var action = text.split(' ')[0]

                //console.log(fulltext)

                await logAction(action,fulltext)
            }

            await stream.close()
            console.log('done with fetching')
            r({data:actionsdid,error:false})
        })

        socket.on("connect", async () => {
            console.log('connected.');
            
            await socket.emit('battleLog', fightId)
        });

        socket.on('connect_error', () => {
            console.log('connection error.')
        })
        
        socket.on("disconnect", () => {
            console.log('disconnected.');
        });
    })
}