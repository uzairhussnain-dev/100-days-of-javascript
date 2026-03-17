const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const result = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid values";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  result.textContent = `Total: $${total.toFixed(2)} (Tip: $${tipAmount.toFixed(2)})`;
});