const process = require("process");

let itemCostInput = null;
let paymentInput = null;

for (let i = 0; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg === "--item-cost") {
    itemCostInput = process.argv[i + 1];
  } else if (arg === "--payment") {
    paymentInput = process.argv[i + 1];
  }
}

if (itemCostInput == null) {
  console.error("--item-cost must be provided");
  process.exit(1);
}

const itemCost = Number(itemCostInput) * 100;
if (isNaN(itemCost)) {
  console.log("--item-cost must be a number");
  process.exit(1);
}

if (paymentInput == null) {
  console.error("--payment must be provided");
  process.exit(1);
}

const payment = Number(paymentInput) * 100;
if (isNaN(payment)) {
  console.log("--payment must be a number");
  process.exit(1);
}

// get difference of payment - itemCost
const totalChange = payment - itemCost;

// let variables for value of quarter, dime, and nickel
let q = 25;
let d = 10;
let n = 5;

let result = "";

// create a function that accepts the item cost and payment as arguments
function vendingMachine(itemCost, payment) {
  const quarters = Math.floor(totalChange / q);
  if (quarters > 0) {
    result += `Quarters: ${quarters}`;
  }

  const dimes = Math.floor((totalChange - quarters * q) / d);
  if (dimes > 0) {
    result += `\nDimes: ${dimes}`;
  }

  const nickels = Math.floor((totalChange - (quarters * q + dimes * d)) / n);
  if (nickels > 0) {
    result += `\nNickels: ${nickels}`;
  }

  const pennies = Math.floor(
    totalChange - (quarters * q + dimes * d + nickels * n)
  );
  if (pennies > 0) {
    result += `\nPennies: ${pennies}`;
  }

  console.log(result, `\nTotal Change: $0.${Math.trunc(totalChange)}`);
}

vendingMachine(itemCost, payment);
