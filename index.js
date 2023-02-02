const fetcher = require(__dirname + '/fetcher_v1.js')
var interpreter = require(__dirname + '/interpreter.js')
const fs = require('fs')

async function a(){
    var rawData = await fetcher.eldritchbot('EzC9hoXhG') // {error:bool, data: array}
    interpreter = await interpreter.v1(rawData.data)

    var data1 = await interpreter.broke_object()

    //console.log(data1)
}
a()