// // // Synchronous or Blocking
// // line by line execution
// // // Asynchronous pr Non Blocking
// no line by line guarranty
const fs=require("fs");
fs.readFile("del.txt","utf-8", (a,b)=>{
    console.log(b);
});
console.log("This is a Message");