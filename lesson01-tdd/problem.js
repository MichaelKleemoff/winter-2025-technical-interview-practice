/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
	// Remove spaces, punctuation, and convert to lowercase
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

	// Check if the cleaned string is the same as its reverse
	return cleanedStr === cleanedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
