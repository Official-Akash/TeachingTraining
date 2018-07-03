/*################for case insensitive##################*/

//string from which patterns to be matched
var string = "My name is Akash.\nAkash is a Developer";

//normal pattern
var Exp = "akash";
console.log(string.replace(Exp, "Hello"));

// pattern with i
var Exp1 = /akash/i;
console.log(string.replace(Exp1, "Hello"));

// pattern with g
var Exp2 = /Akash/g;
console.log(string.replace(Exp2, "Hello"));

// pattern with m
var Exp3 = /Akash/m;
console.log(string.replace(Exp3, "Hello"));

//specific Characters
var Exp4 = /[anj]/;
console.log(string.replace(Exp4, "Hello"));

// range of Characters
var Exp5 = /[a-z]/;
console.log(string.replace(Exp5, "Hello"));

//for enumerations
var Exp6 = /(b|a|c)/;
console.log(string.replace(Exp6, "Hello"));

//test()
console.log(/a/.test(string));

//exec()
console.log(/a/.exec(string));
