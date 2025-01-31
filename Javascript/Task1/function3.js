//Create an arrow function named equal which takes two arguments and tells if the two arguments are equal or not
var equal = (a,b)=>{
    //Strict equality
    if(a===b){
        console.log("Both arguments are equal.");
    }
    else{ 
        console.log("Both arguments are not equal.");
    }
}
equal(10,"10");

//Loose equality
console.log("Using loose equality: ");
var equal = (a,b)=>{
    if(a==b){
        console.log("Both arguments are equal.");
    }
    else{ 
        console.log("Both arguments are not equal.");
    }
}

equal(10,"10");