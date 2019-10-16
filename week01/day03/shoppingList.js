//Represent the following products with their prices

/* Product	Amount
    Milk	1.07
    Rice	1.59
    Eggs	3.14
    Cheese	12.60
    Chicken Breasts	9.40
    Apples	2.31
    Tomato	2.58
    Potato	1.75
    Onion	1.10
*/
let prices = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
};
    
/*
Represent Bob's shopping list 

 Product	Amount
    Milk	3
    Rice	2
    Eggs	2
    Cheese	1
    Chicken Breasts	4
    Apples	1
    Tomato	2
    Potato	1
    
 */
    let bobList = {
        'Milk': 3,
        'Rice': 2,
        'Eggs': 2,
        'Cheese': 1,
        'Chicken Breasts': 4,
        'Apples': 1,
        'Tomato': 2,
        'Potato': 1
    };
/* 
    Represent Alice's shopping list
    Product	Amount
    Rice	1
    Eggs	5
    Chicken Breasts	2
    Apples	1
    Tomato	10
    Create an application which solves the following problems. 
*/
    let aliceList = {
        'Rice': 1,
        'Eggs': 5,
        'Chicken Breasts': 2,
        'Apples': 1,
        'Tomato': 10
    };
    
//How much does Bob pay?
function totalPrice(cart){
    let total = 0;
    for(let key in cart){
        total += (cart[key] * prices[key]);
    }
    return total;
}
console.log('Bob pay: ' + totalPrice(bobList));
//How much does Alice pay?
console.log('Alice pay ' + totalPrice(aliceList));

function whoBuyMore(item){
    if(bobList[item] > aliceList[item]){
        return 'Bob';
    }else{
        return 'Alice'
    }
}
//Who buys more Rice?
console.log(whoBuyMore('rice'));
//Who buys more Potato?
console.log(whoBuyMore('Potato'));
//Who buys more different products?
console.log(object.key(bobList).length > object.key(aliceList).length ? 'Bob' : 'Alice');
//Who buys more products? (piece)
const sum = (a,b) => a + b;
console.log(object.values(bobList).reduce(sum) > object.values(aliceList).reduce(sum) ? 'Bob' : 'Alice');