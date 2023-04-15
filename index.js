var http = require('http');
const CyclicDb = require("@cyclic.sh/dynamodb")
const db = CyclicDb("white-dragonfly-capeCyclicDB")

const run = async function(){
    let animals = db.collection('animals')

    // create an item in collection with key "leo"
    //let leo = await animals.set('leo', {
    //    type:'cat',
    //    color:'orange'
    //})

    // get an item at key "leo" from collection animals
    let item = await animals.get('leo')
    console.log(item)
}
run()


http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yoyo!');
    res.end();
}).listen(process.env.PORT || 3000);