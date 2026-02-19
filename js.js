var word = "JavaScript"
var number1  = 3
var number2 = 6

var d

console.log(d)
console.log(number1 * word)
console.log(number1 > number2)
console.log(number2 > number1)
console.log(typeof number2)
console.log(typeof word)

var input = prompt("Enter purchase amount: ")
var amount = Number(input)

if (isNaN(amount) || amount <= 0) {
    console.log("Please enter a correct number")
} else {
    var discount = 0;
    if (amount < 100) {
        discount = 0;
    } else if (amount >= 100 && amount < 500) {
        discount = 0.05;
    } else if (amount >= 500 && amount <= 1000) {
        discount = 0.10;
    } else {
        discount = 0.15;
    }

    var price = amount - (amount * discount)

    console.log("Discount: " + (discount * 100) + "%")
    console.log("Price with discount: " + price)
}