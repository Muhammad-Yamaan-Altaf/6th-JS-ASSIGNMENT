                    // ! CHAPTERS 35 - 38
                    // * Q.1
function displayCurrentDateTime() {
    var currentDateTime = new Date();
    document.write(currentDateTime);
}
displayCurrentDateTime();

                    // *Q.2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "! Welcome!");
}
var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");
greetUser(userFirstName, userLastName);

                    // *Q.3
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter valid numbers.";
    } else {
        var sum = num1 + num2;
        return "The sum of " + num1 + " and " + num2 + " is: " + sum;
    }
}
var result = addNumbers();
console.log(result); 

                    // *Q.4
function calculator(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter valid numbers.";
    }
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please enter +, -, *, or /.";
    }
}
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operator = prompt("Enter the operator (+, -, *, /):");
var result = calculator(num1, num2, operator);
document.write("Result: " + result); 

                    // *Q.5
function square(number) {
    return number * number;
}
var inputNumber = 5;
var squaredNumber = square(inputNumber);
console.log("The square of " + inputNumber + " is: " + squaredNumber);

                    // *Q.6
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1; 
    } else {
        var result = 1;
        for (var i = 2; i <= number; i++) {
            result *= i; 
        }
        return result;
    }
}
var inputNumber = 5;
var factorialResult = factorial(inputNumber);
console.log("The factorial of " + inputNumber + " is: " + factorialResult);

                    // *Q.7
function displayCounting(start, end) {
    start = parseInt(start);
    end = parseInt(end);
    if (isNaN(start) || isNaN(end)) {
        document.write("Invalid input. Please enter valid numbers.");
    } else if (start <= end) {
        for (var i = start; i <= end; i++) {
            document.write(i + "<br>");
        }
    } else {
        for (var i = start; i >= end; i--) {
            document.write(i + "<br>");
        }
    }
}
var startNumber = prompt("Enter the start number:");
var endNumber = prompt("Enter the end number:");
displayCounting(startNumber, endNumber);

                    // *Q.8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
}
var baseLength = parseFloat(prompt("Enter the base length of the triangle:"));
var perpendicularLength = parseFloat(prompt("Enter the perpendicular length of the triangle:"));
var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
console.log("The length of the hypotenuse is: " + hypotenuseLength);

                    // *Q.9
// TODO Method 1: Passing Arguments as Values
function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
}
var width = 5;
var height = 10;
var area1 = calculateRectangleArea(width, height);
console.log("Method 1: Area of the rectangle with width " + width + " and height " + height + " is " + area1);

// TODO Method 2: Passing arguments as variables
function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
}
var widthInput = parseFloat(prompt("Enter the width of the rectangle:"));
var heightInput = parseFloat(prompt("Enter the height of the rectangle:"));
var area2 = calculateRectangleArea(widthInput, heightInput);
console.log("Method 2: Area of the rectangle with width " + widthInput + " and height " + heightInput + " is " + area2);

                    // *Q.10
function isPalindrome(str) {
    var cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
var userInput = prompt("Enter a word or phrase:");
if (isPalindrome(userInput)) {
    console.log(userInput + " is a palindrome.");
} else {
    console.log(userInput + " is not a palindrome.");
}

                    // *Q.11
function capitalizeWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
var inputString = 'the quick brown fox';
var outputString = capitalizeWords(inputString);
console.log("Original String: " + inputString);
console.log("Transformed String: " + outputString);

                    // *Q.12
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        var wordLength = words[i].replace(/[\W_]/g, '').length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
            longestWord = words[i];
        }
    }
    return longestWord;
}
var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
console.log("Longest Word: " + longestWord);

                    // *Q.13
function countOccurrences(str, letter) {
    var lowerStr = str.toLowerCase();
    var lowerLetter = letter.toLowerCase();
    var count = 0;
    for (var i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerLetter) {
            count++;
        }
    }
    return count;
}
var inputString = 'JSResourceS.com';
var specifiedLetter = 'o';
var occurrences = countOccurrences(inputString, specifiedLetter);
console.log("Number of occurrences of '" + specifiedLetter + "' in the string: " + occurrences);

                    // *Q.14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
}
var radius = 5; 
calcCircumference(radius); 
calcArea(radius); 



