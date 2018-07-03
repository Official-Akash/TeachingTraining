//onload
//var a = prompt("Enter a number");
//alert("You have entered "+a);

if(confirm("Yes/No?")){
  alert("hello");
}else{
  window.location.reload();
}

//on element only

//onclick
function imagecaption(){
  var cap = document.getElementById("one");
  //display none to block
  cap.style.display = "block";
}

//onmouseover
function thiscap(){
  var cap2 = document.getElementById("two");
  //display none to block
  cap2.style.display = "block";
}

//onmouseout
function remthiscap(){
  var cap3 = document.getElementById("two");
  //display none to block
  cap3.style.display = "none";
}

//onchange
function errr(){
  console.log("changed");
}

//onkeydown
function err2(){
  console.log("changed");
}

//addeventlistener
/*document.addEventListener("click", anonFun);
function anonFun(){
  window.alert("Hello World");
  //remove eventlistener
  document.removeEventListener("click", anonFun);
}*/
