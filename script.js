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

