//	Checking stock availability until quantity run out.

let stockQuantity = 10;
let requestedAmount = 3;
if (stockQuantity >= requestedAmount) {
    stockQuantity = stockQuantity - requestedAmount;
    console.log("Success! Your order is confirmed.");
    console.log(`Remaining stock: ${stockQuantity}`);
} else { console.log("Sorry, this item is OUT OF STOCK.");
    console.log(`We only have ${stockQuantity} left.`);
}

//sum of numbers from 1 to 20

let n =20;
let sum =0;
for(let i=1; i<=n; i++){
    sum = sum + i
}

console.log(sum)

// reverse countdown 10 to 1


    for(let x=10; x>=0; x--){
        console.log("Count " + x);
    }

    // sum of even numbers from 1 to 50

    let m =50;
let sums =0;
for(let i=1; i<=m; i++){
    if(i %2===0)
    sums = sums + i
}
console.log(sums)





   
