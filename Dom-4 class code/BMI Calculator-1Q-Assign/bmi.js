function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);

        let result = `Your BMI is ${bmi}. You are `;

        if (bmi <= 18.4) {
            result += "Underweight.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result += "Normal Weight.";
        } else if (bmi >= 25 && bmi <= 29.9) {
            result += "Overweight.";
        } else if (bmi >= 30) {
            result += "Obese.";
        }

        document.getElementById("result").innerText = result;
    } else {
        alert("Please enter valid weight and height values.");
    }
}
