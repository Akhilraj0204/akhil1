//task-1

let product1 = 70;
let product2 = 30;

let total = product1 + product2 ;

const discount = total/100*10 ;

let finalPrice = total - discount;

console.log("FinalPrice:", finalPrice );

//task-2

let Country1 = "India";
let Country2 = "USA";
let Age = 18;

if(Age >= 18 && (Country1 == "India" || Country2 == "USA")){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}