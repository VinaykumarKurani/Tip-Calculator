function calculateTip() {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  if (
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    billAmount <= 0 ||
    tipPercentage <= 0
  ) {
    document.getElementById("result").innerText = "Please enter valid values!";
  }
  let tipAmount = (billAmount * tipPercentage) / 100;
  let totalAmount = billAmount + tipAmount;
  if (!isNaN(totalAmount))
    document.getElementById("result").innerText = `Tip: ₹${tipAmount.toFixed(
      2
    )} | Total: ₹${totalAmount.toFixed(2)}`;
}
calculateTip();
