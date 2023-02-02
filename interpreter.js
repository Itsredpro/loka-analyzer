const fs = require('fs')

async function asynwait(time){
    return new Promise(r=>{
        setTimeout(() => {
            r()
        }, time);
    })
}

module.exports.v1 = async function(data){
    return {
        "lost_overload":async function(){
            //lost


        },
        "destroyed_source":async function(){
            //destroyed


        },
        "overloaded_source":async function(){
            //overloaded


        },
        "repaired_item":async function(){
            //repaired


        },
        "dropped_item":async function(){
            //dropped


        },
        "began_overload":async function(){
            //began, checked ^(\w+) \((\d+\.\d+) hp\) began an overload on \[(\w+(?:-\w+)*)\]$ 


        },
        "got_charge":async function(){
            //got, checked ^(\w+) \((\d+\.\d+) hp\) got charged$


        },
        "killed_player":async function(){
            //killed, checked ^(\w+) \((\d+\.\d+) hp\) killed (\w+) \((\d+\.\d+) hp\) at (\d+), (\d+), (\d+)$


        },
        "picked_up":async function(){
            //picked, checked ^(\w+) \((\d+(?:\.\d+)?) hp\) picked up (\d+) ([\w\s]+) at (\d+), (\d+), (\d+)$


        },
        "broke_object":async function(target){
            // broke /^(\w+) (\d+\d˙+)hp(\d+\d˙​+)hp broke a (\w+) at (\d+), (\d+), (\d+)$/


            fs.writeFileSync('debug2.txt',JSON.stringify(data.broke))

        },
        "placed_object":async function(target){
            // placed /^(\w+) (\d+\d˙+)hp(\d+\d˙​+)hp placed a (\w+) at (\d+), (\d+), (\d+)$/
            



        },
        "shot_player":async function(target){
            //shot /^(\w+) \((\d+\.\d+) hp\) shot (\w+) \((\d+\.\d+) hp\) for (\d+\.\d+) damage \(-(\d+\.\d+) mitigated, PROJECTILE, (\d+\.\d+) force\)$/



        },
        "consumed_item":async function(target){
            //consumed /^(\w+) [\d]˙+hp[\d]˙​+hp consumed ([\w ]+)$/


        },
        "_landed":async function(target){
            //landed, splash/other throwables, unique /Splash Potion of (\w+)\s(\d+) thrown by (\w+) \((\d+\.\d+) hp\) landed hitting\s+(\w+ \((\d+\.\d+) hp\) \((\d+\.\d+)%\))+/
            
            var res = []
            for (var i2 = 0; i2 < data.landed.length; i2++){
                var c1 = data.landed[i2]

                var d1 = []

                const regex = /Splash Potion of (\w+)\s(\d+) thrown by (\w+) \((\d+\.\d+) hp\) landed hitting\s+(\w+ \((\d+\.\d+) hp\) \((\d+\.\d+)%\))+/
                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res

        },
        "dropped_item":async function(target){
            //dropped /^(\w+)\s\((\d+\.\d+) hp\)\sdropped\s(\d+)\s(\w+(?:\sof\s\w+)?)\sat\s(\d+),\s(\d+),\s(\d+)$/


            var res = []
            for (var i2 = 0; i2 < data.dropped.length; i2++){
                var c1 = data.dropped[i2]

                var d1 = []

                const regex = /^(\w+)\s\((\d+\.\d+) hp\)\sdropped\s(\d+)\s(\w+(?:\sof\s\w+)?)\sat\s(\d+),\s(\d+),\s(\d+)$/
                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res


        },
        "enderpearl_damage":async function(target){
            //for, unique /^Thrown\sEnd\sPearl\shit\s(\w+)\s\((\d+\.\d+) hp\)\sfor\s(\d+\.\d+)\sdamage\s\(-\d+\.\d+ mitigated,\s(\w+)\)$/

            var res = []
            for (var i2 = 0; i2 < data.for.length; i2++){
                var c1 = data.for[i2]

                var d1 = []

                const regex =  /^Thrown\sEnd\sPearl\shit\s(\w+)\s\((\d+\.\d+) hp\)\sfor\s(\d+\.\d+)\sdamage\s\(-\d+\.\d+ mitigated,\s(\w+)\)$/
                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res

        },
        "player_crit":async function(target){
            //crit /^(\w+)\s\((\d+\.\d+) hp\)\scrit\s(\w+)\s\((\d+\.\d+) hp\)\sfor\s(\d+\.\d+)\sdamage\s\(-\d+\.\d+ mitigated,\s(\w+)\)$/

            var res = []
            for (var i2 = 0; i2 < data.crit.length; i2++){
                var c1 = data.crit[i2]

                var d1 = []

                const regex =  /^(\w+)\s\((\d+\.\d+) hp\)\scrit\s(\w+)\s\((\d+\.\d+) hp\)\sfor\s(\d+\.\d+)\sdamage\s\(-\d+\.\d+ mitigated,\s(\w+)\)$/

                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res

        },
        "_warped":async function(target){
            //warped, unique /^(\w+)\s\((\d+\.\d+) hp\)\swarped in to\s(\w+-\w+-\d+-\w+)$/


            var res = []
            for (var i2 = 0; i2 < data.warped.length; i2++){
                var c1 = data.warped[i2]

                var d1 = []

                const regex = /^(\w+)\s\((\d+\.\d+) hp\)\swarped in to\s(\w+-\w+-\d+-\w+)$/

                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res


        },
        "_fired_item":async function(target){
            //fired, unique /^(\w+)\s\((\d+\.\d+) hp\)\sfired a\s(\w+)\s(\w+)\s(\d+|End)$/

            var res = []
            for (var i2 = 0; i2 < data.fired.length; i2++){
                var c1 = data.fired[i2]

                var d1 = []

                const regex = /^(\w+)\s\((\d+\.\d+) hp\)\sfired a\s(\w+)\s(\w+)\s(\d+|End)$/

                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1[1] == target){
                        res.push(d1)
                    }
                }
            }

            
            return res


        },
        "regained_health":async function(target){
            //regained

            var res = []
            for (var i2 = 0; i2 < data.regained.length; i2++){
                var c1 = data.regained[i2]

                var d1 = []

                const regex = /^(\w+)\s\((\d+\.\d+) hp\)\sregained\s(\d+\.\d+)\shealth\sfrom\s(\w+)$/

                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res

        },
        "damage_taken":async function(target){
            //took

            var res = []
            for (var i2 = 0; i2 < data.took.length; i2++){
                var c1 = data.took[i2]

                var d1 = []

                const regex = /^(\w+)\s\((\d+\.\d+) hp\)\stook\s(\d+\.\d+)\sdamage\s\((-\d+\.\d+) mitigated\) from\s(\w+)$/
                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res

        },
        "player_hit":async function(target){
            //hit
            

            var res = []
            for (var i2 = 0; i2 < data.hit.length; i2++){
                var c1 = data.hit[i2]

                var d1 = []

                const regex = /(\w+)\s\((\d+\.\d+)\shp\)\shit\s(\w+)\s\((\d+\.\d+)\shp\)\sfor\s(\d+\.\d+)\sdamage\s\(-?(\d+\.\d+)\smitigated,\s(\w+)\)/;
                let m;
                
                
                    
                if ((m = regex.exec(c1)) !== null) {
                    m.forEach((match, groupIndex) => {
                        d1.push(match)
                    })            
                }
                

                await asynwait(10)
                if (target == 'all'){
                    res.push(d1)
                } else {
                    if (d1.attacker == target){
                        res.push(d1)
                    }
                }
            }

            
            return res
        },
        "_location":async function(){
            //location:

            var ret = await data["Location:"][0].slice(10)
            return ret
        }

    }
}