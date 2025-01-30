//Table
let table = (num) => {
  console.log("Table of ", num);
  for (let i = 1; i <= 10; i++) {
    console.log(num, "*", i, "=", num * i);
  }
}
table(25);


//Print letter of string
let printName=(name)=>{
    console.log("Letters of the given string are: ");
    for(let i=0; i<name.length; i++){
        console.log(name[i]);
    }
}
printName("Ajay");

//Loop to get the output
let output = ()=>{
    console.log("Output is as follows: ")
    for(let i=1; i<=1; i++){
        for(let j=1; j<=2; j++){
            for(let k=1; k<=3; k++){
                console.log(i,j,k);
            }
        }
    }
}
output();