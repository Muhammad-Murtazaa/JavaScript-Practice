console.log("My Name is Muhammad Murtaza\nFunctions of JS");
function greet(name,msg="Afternoon"){
    console.log(msg+" "+name)
    console.log(name + " Is a boy.")
}
let msg="Morning";
let name1="M";
let name2="u";
let name3="r";
let name4="t";
greet(name1,msg);
greet(name2,msg);
greet(name3,msg);
greet(name4);

function sum(a,b,c){
    let d=a+b+c;
    return d
}
let returnVal=sum(1,2,3);
console.log(returnVal)

function arr(e,f){
    d=f-e;
    return d
}
let returnVa=arr(1,4);
console.log(returnVa);