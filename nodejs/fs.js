var fs=require('fs');

fs.writeFile("test.txt","data is hello",(err)=>{
    if(err) throw "error";

    console.log("success")
})
// fs.writeFile("append.txt","data is append",(err)=>{
//     if(err) throw "error";

//     console.log("success")
// })
fs.appendFile("append.txt","\n data to append nodemon",(err)=>{

 if(err) throw "error";

    console.log("append success for nodemon")
})

fs.readFile("append.txt",'utf-8',(err,data)=>{
    if(err) throw "err";
    console.log(data);

})