var http = require('http');
const CyclicDb = require("@cyclic.sh/dynamodb")
const db = CyclicDb("white-dragonfly-capeCyclicDB")
const express = require('express')
const app = express()
const admin = express()

admin.on('mount', (parent) => {
//  console.log('Admin Mounted')
//  console.log(parent) // refers to the parent app
})

admin.get('/', async (req, res) => {
	  let variants = db.collection('variants')

	  let results = await variants.get(req.query["phen"]+"-"+req.query["gene"])
	//console.log(req.query)
	res.send(results).status(200);
})

app.use('/admin', admin)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT || 3000)


const add_variants = async function(){
    let variants = db.collection('variants')

    // create an item in collection with key "leo"
    let val = await variants.set('I10-SH2B3', {
        variants:[
		{
			name:'var1',
			loc:10101011,
			pval:0.000000000032342,
			Zscroe:-2.4
		},
		{
			name:'var2',
			loc:10101012,
			pval:0.0000000000032342,
			Zscroe:3.5
		}
		,
		{
			name:'var3',
			loc:10101013,
			pval:0.000052342,
			Zscroe:0.5
		}
		]
    })
    // get an item at key "leo" from collection animals
}
//add_variants()
/*
const run = async function(){
    let animals = db.collection('animals')

    // create an item in collection with key "leo"
    let leo = await animals.set('leo', {
        type:'cat',
        color:'orange'
    })

    // get an item at key "leo" from collection animals
    let item = await animals.get('leo')
    console.log(item)
}

const get_animal = async function(){
    let animals = db.collection('animals')

    // create an item in collection with key "leo"
    //let leo = await animals.set('leo', {
    //    type:'cat',
    //    color:'orange'
    //})

    // get an item at key "leo" from collection animals
    const result = animals.get('leo')
	return result
	
}
run()


http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yoyo!');
	(async () => {
	console.log(await get_animal())
})()
	
    res.end();
}).listen(process.env.PORT || 3000);
*/