document.getElementById("FORM").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Accessing form field values
    const Gender = document.getElementById('gender').value;
    const Age = parseInt(document.getElementById("age").value);
    const height_feets = parseInt(document.getElementById("hfeets").value);
    const height_inches = parseInt(document.getElementById("hinches").value);
    const Weight = parseFloat(document.getElementById("weight").value);
  
    // Checking if all fields are filled
    if (Gender && Age && height_feets && height_inches && Weight) {
      // Convert height from feet and inches to meters
      const Height_In_Meters = (height_feets * 12 + height_inches) * 0.024;
  
      // Calculating BMI
      const bmi_calculation = Weight / (Height_In_Meters ** 2);
  
      // Categoring BMI with appropriate ,messae display
      let category = "";
      if (bmi_calculation < 18.5) {
        category = "underweight";
      } else if (bmi_calculation >= 18.5 && bmi_calculation < 24.9) {
        category = "normal weight";
      } else if (bmi_calculation >= 25 && bmi_calculation < 29.9) {
        category = "OverWeight";
      } else {
        category = "Obese";
      }
  
      // Displaying the result
      const resultMessage = `Your BMI: ${bmi_calculation.toFixed(2)} <br> Category: ${category}`;
      document.getElementById("result").innerHTML = resultMessage;
    }
  });
  