// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

function generateLine(n) {
	return '*'.repeat(n); // Repeat the '*' character n times
}
console.log(generateLine(5));
console.log(generateLine(12));
console.log(generateLine(3));

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

function generateAsterisksAndSpaces(n) {
	if (n < 3 || n > 100) {
		return 'Input must be an integer between 3 and 100.';
	}

	return '*' + ' '.repeat(n - 2) + '*';
}
console.log(generateAsterisksAndSpaces(5));
console.log(generateAsterisksAndSpaces(12));

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

function generateBox(n, m) {
	if (n < 3 || m < 3) {
		return 'Both n and m must be integers greater than or equal to 3.';
	}

	const fullLine = '*'.repeat(m); // First and last line
	const middleLine = '*' + ' '.repeat(m - 2) + '*'; // Middle lines

	let result = [];

	// Add the first line
	result.push(fullLine);

	// Add the middle lines
	for (let i = 0; i < n - 2; i++) {
		result.push(middleLine);
	}

	// Add the last line
	result.push(fullLine);

	return result.join('\n');
}

console.log(generateBox(5, 5));

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
