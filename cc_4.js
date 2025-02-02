// Task 1: If Statements
let purchaseAmount = 300; // amount of purchase
let finalAmount = purchaseAmount; // final amount after discount applied

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.8; // 20% discount
    console.log("Discount applied")
}

console.log(`Final amount after discount: $${finalAmount}`);

// Task 2: For Loop
let sales = [120, 85, 200, 150, 90]; // array of sales
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
}

console.log(`Total sales: $${totalSales}`);

// Task 3: While Loop
let stock = 10; // Current stock

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // decrements by 1
}

console.log("Stock depleted")

// Task 4: Do...While Loop
let responses = 0;

do {
    console.log(`Collecting responses: ${responses}`);
    responses++;
} while (responses < 3)

// Task 5: For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}; // object employee

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"]; // list of products

for (let product of products) {
    console.log(`Product: ${product}`);
}

// Task 7: forEach() Method
let orders = [101, 102, 103]; // array of orders

orders.forEach(order => {
    console.log(`order ID: ${order}`)
}); // logging of order IDs

// Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
let tax = calculateTax(1000, 0.07);

console.log(`Tax: $${tax}`);

// Task 9: Function Expressions
const applyDiscount = function(price, discountPercentage){
    return price - (price * (discountPercentage / 100));
};

let discountedPrice = applyDiscount (100, 10)

console.log(`Discounted price: $${discountedPrice}`);

// Task 10: Arrow Functions
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10 );
};
let points = calculatePoints(200);

console.log(`Loyalty earned points: ${points}`);