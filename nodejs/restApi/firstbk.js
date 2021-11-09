var exp=require("express");
var dotenv = require('dotenv');
dotenv.config();
var port =process.env.PORT || 8124;

// creating object of express. because express have method to use
const app = exp();
// creating routes
app.get('/', (req, res) => {
    res.send('Hello World! in nodejs, express')
  })

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})