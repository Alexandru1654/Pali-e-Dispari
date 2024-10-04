function palindrome(word) {
    // Convert the word
    const reverseWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reverseWord;
}

// Enter a word
const word = prompt("Enter a word");

// Let's pass the word to the function
if (palindrome(word)) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}

// Function to generate a number from 1 to 5
function GenerateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Function to check if a number is even or odd
function isEven(num) {
    return num % 2 === 0;
}

// Request input from user
const userSelect = prompt("choose even or odd").toLocaleLowerCase();
const userNumber = parseInt(prompt("Enter a number from 1 to 5;"));

// Generate a random number for the computer
const computerNumber = GenerateRandomNumber();

console.log('you have chosen:')

console.log('Your number')

console.log('PC number')

const sum = UserNumber + computerNumber;
console.log('Sum: ${Sum}');

// Check if the sum is even or odd
const evensum = isEven(sum);

const sumEven = isEven(sum); // Check if the sum is even
const userChoice = prompt("Choose 'even' or 'odd':").toLowerCase();

// Winner check
if ((sumEven && userChoice === 'even') || (!sumEven && userChoice === 'odd')) {
    console.log('You win!');
} else {
    console.log('You lose!');
}

