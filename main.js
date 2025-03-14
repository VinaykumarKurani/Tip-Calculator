function totalAmount() {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    document.getElementById("result").innerText = "Please enter valid numbers";
  }
  let tipAmount = (billAmount * tipPercentage) / 100;
  let total = billAmount + tipAmount;
  if (!isNaN(total))
    document.getElementById(
      "result"
    ).innerText = `The Total Amount Is ${total.toFixed(2)}`;
}
totalAmount();
