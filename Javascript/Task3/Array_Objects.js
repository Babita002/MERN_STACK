// ----------QUESTION 1---------------
let country= ["India", "Canada", "Italy", "Australia","Korea"];
//Print entire array 
console.log(country);
//Array length
console.log("Array length: " , country.length);
//Country at position 3
console.log("Country at position 3: ", country[3]);
//Remove first country
country.shift();
console.log("Array after removing first country: " ,country );
//Add new country in the end
country.push("Germany");
console.log(country);
//Traverse the Array
for(let i=0; i<country.length; i++){
    console.log(country[i]);
}


//------QUESTION2----------
let employee={
    employee_name:"Alicia",
    dept: "Engineering and Technology",
    join_year: 2020
}
//Print object
console.log(employee);
//print dept of employee
console.log("Department of employee is", employee.dept);
//delete join year
delete employee.join_year;
console.log("Object after deleting join year: ",employee );
//Replace employee name with your own name
employee.employee_name= "BABITA";
console.log("Object after replacing name is ", employee);

//-----------QUESTION 3------------
function student(...details){
    for(let i=0; i<details.length;i++){
        console.log(details[i]);
    }
}
student("Babita", 17032112029, "B.Tech", "Department of Engineering and Technology");

//---------------QUESTION 4---------------
var numbers =[];
for(let i=1; i<=50;i++){
    numbers.push(i);
}
console.log("Numbers in the array ", numbers);
let divisible = [];   //Smaller array
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%3==0){
        divisible.push(numbers[i]);
    }
}
console.log("Numbers divisible by 3 : ", divisible);

//---------------QUESTION 5---------------
let i_am_array = [2,4,8,6,10,18,22,24,25,66,88,84,30,20,1975,2002,2003,1973,1974,1972];
//(a)Print array
console.log("Array named i_am_array:" , i_am_array);
//(b)Print each element
console.log("Each element of i_am_array: ");
for(let i=0; i<i_am_array.length;i++){
    console.log(i_am_array[i]);
}
//(c)Create new array with elements of i_am_array*3
let teen_guna=[];
for(let i=0; i<i_am_array.length;i++){
    teen_guna.push(i_am_array[i]*3);
}
//(d)Print teen_guna
console.log("Elements of Array teen _guna",teen_guna);
//(e)total length of teen_guna
console.log("Length of teen_guna is ",teen_guna.length);
//(f)type of i_am_array and teen_guna elements
console.log("i_am_array type is: ", typeof i_am_array);
console.log("teen_guna type is: ", typeof teen_guna);

