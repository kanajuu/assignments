const form = document.superform;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let output = {};
  output.firstName = this.firstName.value;
  output.lastName = this.lastName.value;
  output.age = this.age.value;
  output.gender = this.gender.value;
  output.location = this.location.value;

  let rest = [];
  if (this.kosher.checked === true) {
    rest.push("kosher");
  }
  if (this.vegan.checked === true) {
    rest.push("vegan");
  }
  if (this.lactose.checked === true) {
    rest.push("lactose");
  }
  console.log(rest);
  alert(
    ` 
     First Name: ${output.firstName} 

     Last Name: ${output.lastName} 

     Age: ${output.age} 

     Gender: ${output.gender} 

     Destination: ${output.location} 
     
     Restrictions: ${rest}`
  );
});
