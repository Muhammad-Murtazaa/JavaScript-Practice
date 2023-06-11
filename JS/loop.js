console.log("Looping");
for(i=0;i<=5;i++){
    console.log(i)
}
let name=["Murtaza","Ali","Fahad","Arsalan"];
for (let index = 0; index < name.length; index++) {
    console.log("Hello "+name[index]);
}
name.forEach(function f(element){
    console.log("for each "+element)
});
for(element of name){
    console.log("for type 3 "+element)
}
let emp={
    name:"murtaza",
    age:22,
    gen:"M",
}
for (key in emp){
    console.log(`The ${key} of employee is ${emp[key]}`); 
}
let z=0;
while(z<4){
    console.log(`${z} is less than 4`);
    z++;
}