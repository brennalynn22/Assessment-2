///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
// const summedPrice = cart
//     .filter()

const summedPrice = cart.reduce((a, c) => a + c.price,0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/


//CODE HERE
//const calcFinalPrice =((cartTotal => cartTotal * 1.06)- couponValue)

function calcFinalPrice(cartTotal, tax, couponValue) {
    return (cartTotal * (1+ tax) -couponValue )
}
let finalPrice =calcFinalPrice(100, .06, 10)
console.log(finalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
//create customer object for cart page
properties: 
    name: 'string' //so the restaurant knows who the order is for
    date: 'string' // to list month and day 
    time: 'string' /// because it also includes 
    items: [array]// collection of strings of what was odered
    price: [array]//collections of the price of the above items
    dicsounts: number /// numerical value
    carry out: boolean // will they be eating in or out
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: 'Ron Swanson',
    date: 'Apr 7, 2016',
    time : '10:15 PM',
    items: ['bacon', 'eggs', 'steak'],
    price: [18.00, 12.50, 35.99],
    discounts: 0.00,
    carryOut: false 
}

console.log(customer.items)