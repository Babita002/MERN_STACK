//Create an arrow function which takes one argument as price and calculates the GST of the item, if the total is more than 1000 then there will be no shipping charges to the items, if total is more than 500 then shipping charge will be 50 and if total is less than 5000 then shipping charge will be 100.

var total =(price)=>{
    var gst = price *0.18;  //18% GST
    var totalAmount = gst + price;
    if(totalAmount>1000){
        console.log("No Shipping charges");
    }
    else if (totalAmount>500){
        console.log("Shipping charge is Rs.50");
    }
    else {
        console.log("Shipping charge is Rs.100");
    }
}
total(40);
total(400);