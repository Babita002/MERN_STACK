//Create a function which takes one argument as a number and tells if the number is even or odd

function myFun(num){
    if(num%2==0){
        console.log(num, "is even number.");
    }
    else{
        console.log(num, "is odd number.");
    }
}
myFun(4);

//Using Arrow Function
let myfun = (num) => {
    if(num%2==0){
        console.log(num, "is even number.");
    }
    else{
        console.log(num, "is odd number.");
    }
}
myfun(93);