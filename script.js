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

