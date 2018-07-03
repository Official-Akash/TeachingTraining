// json parse
var data = '{ "name":"Akash", "age":20, "city":"Jalandhar" }';
var json = JSON.parse(data);
console.log(json.name);

//json stringify - convert json to string
var data2 = {
  "name":"Akash",
  "age":20,
  "city":"Jalandhar"
};
var json2 = JSON.stringify(data2);
localStorage.setItem("JSONDATA", json2);

//retrieving from local storage
var text = localStorage.getItem("JSONDATA");
var obj = JSON.parse(text);
console.log(obj.age);

//JSON arrays
var data3 = {
  "Boys":[
    {"name":"Akash", "age":20},
    {"name":"Jasleen", "age":21},
    {"name":"Rohit", "age":22},
  ],
  "Girls":[
    {"name":"Amanpreet", "age":20},
    {"name":"Manpreet", "age":21},
    {"name":"Poornima", "age":22},
  ]
};
console.log(data3.Boys[0].name);
for (x in data3.Girls){
  console.log(Girls[i].name+" is "+Girls[i].age+" years old");
}
