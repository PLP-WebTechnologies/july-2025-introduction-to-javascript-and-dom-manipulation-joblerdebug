// =============================================
// Part 1: JavaScript Basics - Variables, Conditionals
// =============================================

// Variable declarations
const numberInput = document.getElementById('numberInput');
const checkNumberBtn = document.getElementById('checkNumberBtn');
const numberResult = document.getElementById('numberResult');

// Event listener for number checking
checkNumberBtn.addEventListener('click', function() {
    const number = parseFloat(numberInput.value);
    
    // Check if input is valid
    if (isNaN(number)) {
        numberResult.textContent = 'Please enter a valid number';
        return;
    }
    
    // Conditional logic
    if (number > 0) {
        numberResult.textContent = `${number} is a positive number.`;
    } else if (number < 0) {
        numberResult.textContent = `${number} is a negative number.`;
    } else {
        numberResult.textContent = 'The number is zero.';
    }
    
    // Additional check for even/odd if it's an integer
    if (Number.isInteger(number)) {
        if (number % 2 === 0) {
            numberResult.textContent += ' It is even.';
        } else {
            numberResult.textContent += ' It is odd.';
        }
    }
});

// =============================================
// Part 2: JavaScript Functions
// =============================================

// Function 1: String formatter
function formatString(inputString) {
    if (!inputString || typeof inputString !== 'string') {
        return 'Invalid input';
    }
    
    // Trim whitespace and capitalize first letter
    const trimmed = inputString.trim();
    if (trimmed.length === 0) return 'Empty string';
    
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

// Function 2: Temperature converter
function convertTemperature(temp, unit) {
    if (isNaN(temp)) return 'Invalid temperature';
    
    if (unit === 'celsius') {
        return (temp * 9/5) + 32; // Celsius to Fahrenheit
    } else {
        return (temp - 32) * 5/9; // Fahrenheit to Celsius
    }
}

// Using the functions with DOM
const stringInput = document.getElementById('stringInput');
const formatStringBtn = document.getElementById('formatStringBtn');
const stringResult = document.getElementById('stringResult');

formatStringBtn.addEventListener('click', function() {
    const result = formatString(stringInput.value);
    stringResult.textContent = `Formatted string: "${result}"`;
});

const tempInput = document.getElementById('tempInput');
const tempUnit = document.getElementById('tempUnit');
const convertTempBtn = document.getElementById('convertTempBtn');
const tempResult = document.getElementById('tempResult');

convertTempBtn.addEventListener('click', function() {
    const temp = parseFloat(tempInput.value);
    const unit = tempUnit.value;
    const convertedTemp = convertTemperature(temp, unit);
    
    if (isNaN(convertedTemp)) {
        tempResult.textContent = 'Please enter a valid temperature';
        return;
    }
    
    if (unit === 'celsius') {
        tempResult.textContent = `${temp}°C is ${convertedTemp.toFixed(1)}°F`;
    } else {
        tempResult.textContent = `${temp}°F is ${convertedTemp.toFixed(1)}°C`;
    }
});

// =============================================
// Part 3: JavaScript Loops
// =============================================

// Example 1: Multiplication table using for loop
const multiplicationNumber = document.getElementById('multiplicationNumber');
const generateTableBtn = document.getElementById('generateTableBtn');
const multiplicationTable = document.getElementById('multiplicationTable');

generateTableBtn.addEventListener('click', function() {
    const number = parseInt(multiplicationNumber.value);
    
    if (isNaN(number) || number < 1 || number > 10) {
        multiplicationTable.innerHTML = '<div>Please enter a number between 1 and 10</div>';
        return;
    }
    
    // Clear previous table
    multiplicationTable.innerHTML = '';
    
    // Generate table using a for loop
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const tableItem = document.createElement('div');
        tableItem.textContent = `${number} × ${i} = ${result}`;
        multiplicationTable.appendChild(tableItem);
    }
});

// Example 2: Countdown timer using while loop
const countdownNumber = document.getElementById('countdownNumber');
const startCountdownBtn = document.getElementById('startCountdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

startCountdownBtn.addEventListener('click', function() {
    let seconds = parseInt(countdownNumber.value);
    
    if (isNaN(seconds) || seconds < 1 || seconds > 60) {
        countdownDisplay.textContent = 'Please enter a number between 1 and 60';
        return;
    }
    
    // Disable button during countdown
    startCountdownBtn.disabled = true;
    
    // Countdown using while loop with setTimeout
    function countdown() {
        if (seconds > 0) {
            countdownDisplay.textContent = seconds;
            seconds--;
            setTimeout(countdown, 1000);
        } else {
            countdownDisplay.textContent = 'Countdown complete!';
            startCountdownBtn.disabled = false;
        }
    }
    
    countdown();
});

// =============================================
// Part 4: DOM Manipulation
// =============================================

// Example 1: Theme switcher
const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});

// Example 2: Dynamic list
const listItemInput = document.getElementById('listItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

addItemBtn.addEventListener('click', function() {
    const itemText = listItemInput.value.trim();
    
    if (itemText) {
        const listItem = document.createElement('li');
        
        // Create text node
        const textNode = document.createTextNode(itemText);
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            dynamicList.removeChild(listItem);
        });
        
        // Append elements
        listItem.appendChild(textNode);
        listItem.appendChild(deleteBtn);
        dynamicList.appendChild(listItem);
        
        // Clear input
        listItemInput.value = '';
    }
});

// Example 3: Element creator
const elementType = document.getElementById('elementType');
const elementText = document.getElementById('elementText');
const createElementBtn = document.getElementById('createElementBtn');
const elementContainer = document.getElementById('elementContainer');

createElementBtn.addEventListener('click', function() {
    const type = elementType.value.trim().toLowerCase();
    const text = elementText.value.trim();
    
    if (!type || !text) {
        alert('Please enter both element type and text');
        return;
    }
    
    try {
        // Create element
        const newElement = document.createElement(type);
        newElement.textContent = text;
        
        // Add some basic styling
        newElement.style.margin = '5px 0';
        newElement.style.padding = '5px';
        newElement.style.backgroundColor = '#f0f0f0';
        newElement.style.borderRadius = '3px';
        
        // Add to container
        elementContainer.appendChild(newElement);
        
        // Clear inputs
        elementType.value = '';
        elementText.value = '';
    } catch (e) {
        alert('Invalid element type. Please try something like "div", "p", "span"');
    }
});
