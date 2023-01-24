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
