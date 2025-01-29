//Create a function named remainder which takes one argument y and prints the remainder of y if divided by 3

function remainder(y) {
  var rem = y % 3;
  console.log("Remainder is ", rem);
}

//Function Call
remainder(80);

// Using Arraw function
var remainder = (y)=>{
   var rem = y % 3;
   return rem;
}
console.log("Remainder is ", remainder(43));