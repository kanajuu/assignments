const eventHandler = {
  addHandler: document
    .getElementById("addbutton")
    .addEventListener("click", function(e) {
      let val1 = document.getElementById("add1").valueAsNumber;
      let val2 = document.getElementById("add2").valueAsNumber;
      if (isNaN(val1 || val2)) {
        alert("you need to enter a number to perform a calculation");
      }
      let sum = val1 + val2;
      let sumHtml = document.createElement("h2");
      sumHtml.innerText = sum;
      document.getElementById("add").appendChild(sumHtml);
    })
};
