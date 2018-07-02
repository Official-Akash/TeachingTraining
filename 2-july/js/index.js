//functions
function printWorld(a, b){
  return a+b;
}
var A = printWorld(5,6);
document.write(A);
//this keyword
var ob = {
  "name":"Akash chouhan",
  "dnt":function(){
    return this.name;
  }
};

document.write(ob.dnt());

//array methods
var arr = ["one",2,"three",4,5,"Six"];
console.log(arr);
arr.shift(); //arr.pop() then "six" will be popped out
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.sort();
console.log(arr);
arr.reverse(arr);
console.log(arr);

//string functions
var str = "Hello World, How are you?";
console.log(str);

//if
var vah = 10;
if(vah == 5){
  console.log("great");
}

//if else
if(vah == 5){
  console.log("great");
}else{
  console.log("bad")
}

//else if
if(vah == 5){
  console.log("great");
}else if(vah == 10){
  console.log("Excellent");
}else{
  console.log("bad")
}

//switch
switch(vah) {
  case 1:
    console.log(1);
    break;
  case 10:
    console.log(10);
    break;
  case 5:
    console.log(5);
    break;
}

//for
for(var i=0,len=5;i<=5;i++){
  console.log(len);
  len += 5;
}

//forin
var obhh = {"fn":"akash","ln":"chouhan","age":20};
for (var x in obhh) {
  console.log(obhh[x]);
}

//while
while (vah<12) {
  console.log(vah);
  vah++;
}

//do while
do {
  console.log(vah);
  vah++;
} while (vah<12);
