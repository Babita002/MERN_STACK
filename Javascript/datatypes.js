//Numbers
var age = 23;
var weight = 8.4;
console.log("Age is ", age);
console.log("Weight is " ,weight);
weight= 10;
console.log( "Updated weight is" , weight);

//Strings
var firstName = "Babita";
var lastName = " Summan";
var fullName = firstName + lastName ;
console.log(fullName);

//Boolean
var isValid = true;
var passed = true;
console.log(isValid);
console.log(passed);

//Bigint
var roll = BigInt("17032112029");
console.log(roll);

//Object
var person = {firstName: "Babita", lastName: "Summan"};
console.log(person);

//Array
var cars = ["Babita", "Gautam"];
console.log(cars);
console.log(cars[0]);

//Data Object
var date = new Date("10-01-25");
console.log(date);

let num = [1,2,3,4,5,6,7,8,9]
let result = num.filter((el,index)=>{
    return el*3;
})
console.log(result);
