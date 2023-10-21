let number1, number2, operator;
function calculator() {
    number1 = +prompt("Enter first number for calculation:");
    number2 = +prompt("Enter second number for calculation:");
    operator = prompt("Enter the operation which you want to perform (+, -, *, /):");
    if (isNaN(number1) || isNaN(number2)) {
        alert("Invalid input. Please enter valid numbers.");
        return 0;
    }
    let result;
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                alert("Division by zero is not allowed.");
                return 0;
            }
            break;
        default:
            alert("Invalid operator. Please enter a valid operator (+, -, *, /).");
            return 0;
    }
    alert("Result: " + result);
}
calculator();
