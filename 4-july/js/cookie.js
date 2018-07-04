//to create a Cookie
document.cookie = "Name=Akash; expires=Wed, 04 Jul 2018 06:30:00 UTC; path=/;";

//to delete a Cookie
document.cookie = "Name=; expires=Wed, 04 Jul 2018 06:30:00 UTC; path=/;";

//to create cookie using functions
function createCookie(cname,cval,exp){
  var d = new Date();
  d.setTime(d.getTime() + (exp * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString() + ";";
  document.cookie = cname + "=" + cval + ";" + expires + "path=/;";
}

//to get a Cookie
function getCookie(cname){
  var name = cname + "=";
  /*#################following code can also be used to parse URI components
  //var decodeCom = decodeURIComponent(document.cookie);
  //var splitcookie = decodeCom.split(';');
  #########################################################################*/
  var splitcookie = document.cookie.split(';');
  for(var i = 0;i<splitcookie.length;i++){
    var splitpart = splitcookie[i];
    while(splitpart.charAt(0) == ' '){
      splitpart = splitpart.substring(1);
    }
    if(splitpart.indexOf(name) == 0){
      return splitpart.substring(name.length,splitpart.length);
    }
  }
  return "";
}

//to check and to create Cookie
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           createCookie("username", user, 30);
       }
    }
}
