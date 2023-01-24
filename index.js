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

console.log(itemCost, payment)