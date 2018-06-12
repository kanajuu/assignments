let submit = document.getElementById("button1");

submit.addEventListener("click", function (e) {
      e.preventDefault;
      let one = +document.getElementById("amount1").value;
      let two = +document.getElementById("amount2").value;
      let three = +document.getElementById("amount3").value;

      var total = 7 * one + 5 * two + 11 * three;
      if (one < 0 || two < 0 || three < 0) {
        alert("No negative values!");
        total = "No";
      }
      if (!total) {
        total = "No";
      }

      document.getElementById("totalprice").innerHTML = `${total} coins!`;
      document.getElementById("amount1").value = "";
      document.getElementById("amount2").value = "";
      document.getElementById("amount3).value = "
        ";

      }) 