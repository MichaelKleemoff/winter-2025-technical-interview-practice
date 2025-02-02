/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10, 13]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
	// TODO: Implement the string matching algorithm
	// Return an array of indices where the pattern is found in the text
	// If the pattern is not found, return an empty array

	// Step 1: Implement the string matching algorithm
	const result = [];
	const textLength = text.length;
	const patternLength = pattern.length;

	// Edge case: Empty pattern
	if (textLength === 0 || patternLength === 0) return [];

	// Iterate over text and check substrings
	for (let i = 0; i <= textLength - patternLength; i++) {
		if (text.substring(i, i + patternLength) === pattern) {
			result.push(i); // Add the index if a match is found
		}
	}

	// Step 2: Return an array of indices where the pattern is found in the text
	// Step 3: If the pattern is not found, return an empty array

	return result;
}

console.log(stringMatching('ababcababcabc', 'abc'));

module.exports = stringMatching;
