let submit = document.getElementById("button1");
document.getElementById("totalprice").innerHTML = ' ';

submit.addEventListener("click", function (e) {
  e.preventDefault;
  let value1 = document.getElementById("amount1").valueAsNumber;
  let value2 = document.getElementById("amount2").valueAsNumber;
  let value3 = document.getElementById("amount3").valueAsNumber;

  let total = value1 * 7 + value2 * 5 + value3 * 11;

  document.getElementById("totalprice").innerHTML = `${total} Coins`;

})