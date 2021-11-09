var exp=require("express");
var dotenv = require('dotenv');
dotenv.config();
var port =process.env.PORT || 8124;

// mongo connection
var mongo= require("mongodb");

var MongoClient = mongo.MongoClient;
var mongoUrl = process.env.MongoLiveUrl;


//connection with mongodb
var db;




// creating object of express. because express have method to use
const app = exp();
// creating routes

//get data from collections
app.get('/', (req, res) => {
    var test=db.collection('user').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
  })


/* can comment this server part since included in below mongodb 
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
*/

//connection with mongodb
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('edu_prac');  //db name
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
    // client.close();
})