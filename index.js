function calculateMortgage(principal, interest, loanlength) {
    let number1 = Number(document.getElementById('principal').value);
    let number2 = Number(document.getElementById('interest').value);
    let number3 = Number(document.getElementById('loanlength').value);

    let L_months = L_years * 12; // Convert loan length from years to months
    let i_monthly = annualRate / 12; // Convert annual interest rate to a monthly rate

    // Calculate monthly payment
    let monthlyPayment = P * (i_monthly / (1 - Math.pow((1 + i_monthly), -L_months)));

   // return monthlyPayment;
    document.getElementById('re').innerHTML = monthlyPayment ;
}

/*// Example usage:
let principal = 200000; // Principal amount ($200,000)
let annualRate = 0.05; // Annual interest rate (5%)
let loanLengthYears = 30; // Length of the loan in years (30 years)

let monthlyPayment = calculateMortgage(principal, annualRate, loanLengthYears);
console.log("Monthly Payment: $" + monthlyPayment.toFixed(2));






function performAddition() {

    //Grabing the value from the textfield and storing it in a variable number 1
    let number1 = Number(document.getElementById('number1field').value);
    let number2 = Number(document.getElementById('number2field').value);
    let result = number1 + number2;

    // for the output 
    document.getElementById("txtResult").innerHTML = result;
}*/