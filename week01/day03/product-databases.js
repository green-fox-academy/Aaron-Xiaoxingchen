/* We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs.

Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which solves the following problems.
*/
let products = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chichen': 550,
};

//How much is the fish?
console.log(products[Fish]);
//What is the most expensive product?
let item = null;
let max = Number.MIN_SAFE_INTEGER;
for(let key in products){
    if(products[key] > max){
        max = products[key];
        item = k;
    }
}
console.log('the most expensive products is: ' + item);
//What is the average price?
let sum = 0;
let count = 0;
for(let key in products){
    sum += products[key];
    count++;
}
let res = sum / count;
console.log('the everage price is :'+ res);

//How many products' price is below 300?
let count1 = 0;
for(let key in products){
    if(products[key] < 300){
        count1++
    }
}
console
//Is there anything we can buy for exactly 125?
for(let key in products){
    if(products[key] === 125){
        console.log('Yes');
    }else{
        console.log('No');
    }
}
//What is the cheapest product?
let item = null;
let min = Number.MAX_SAFE_INTEGER
for(let key in products){
    if(products[key] < min){
        min = products[key];
        item = k;
    }
}
console.log('the cheapest product is: '+ item);