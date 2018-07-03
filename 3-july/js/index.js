// //onload
// //var a = prompt("Enter a number");
// //alert("You have entered "+a);
//
// if(confirm("Yes/No?")){
//   alert("hello");
// }else{
//   window.location.reload();
// }
//
// //on element only
//
// //onclick
// function imagecaption(){
//   var cap = document.getElementById("one");
//   //display none to block
//   cap.style.display = "block";
// }
//
// //onmouseover
// function thiscap(){
//   var cap2 = document.getElementById("two");
//   //display none to block
//   cap2.style.display = "block";
// }
//
// //onmouseout
// function remthiscap(){
//   var cap3 = document.getElementById("two");
//   //display none to block
//   cap3.style.display = "none";
// }
//
// //onchange
// function errr(){
//   console.log("changed");
// }
//
// //onkeydown
// function err2(){
//   console.log("changed");
// }
//
// //addeventlistener
// /*document.addEventListener("click", anonFun);
// function anonFun(){
//   window.alert("Hello World");
//   //remove eventlistener
//   document.removeEventListener("click", anonFun);
// }*/


//solution to all images figcaption display block
//queryselectorAll will select all the available elements with particular value given in brackets
var tagss = document.querySelectorAll(".imgh");
for(var i = 0 ; i < tagss.length; i++){ // this is loop through all elements with imgh class
  //this will show figcaption
  tagss[i].addEventListener("mouseover", function(){
    this.nextElementSibling.style.display = "block";
  });
  //this will hide figcaption
  tagss[i].addEventListener("mouseout", function(){
    this.nextElementSibling.style.display = "none";
  });
}
