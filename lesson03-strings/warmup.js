// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function areAnagramsSorted(str1, str2) {
	// Helper function to clean and sort strings
	const cleanString = (str) =>
		str
			.replace(/[^a-zA-Z]/gi, '')
			.split('')
			.sort()
			.join('');

	return cleanString(str1) === cleanString(str2);
}

console.log(areAnagramsSorted('aba', 'baa'));
console.log(areAnagramsSorted('hub', 'huc'));
console.log(areAnagramsSorted('aa bb', 'a b a b'));
console.log(areAnagramsSorted('ABA', 'aba'));
console.log(areAnagramsSorted('aabbb', 'baabb'));
console.log(areAnagramsSorted('a&!#bb', 'aaabbbb'));
console.log(areAnagramsSorted('a&!#bb', 'abb'));

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

function areAnagramsNotSorted(str1, str2) {
	// Helper function to clean and sort strings
	const cleanString = (str) =>
		str
			.replace(/[^a-zA-Z]/gi, '')
			.split('')
			.join('');

	return cleanString(str1) === cleanString(str2);
}

console.log(areAnagramsNotSorted('aba', 'baa'));
console.log(areAnagramsNotSorted('hub', 'huc'));
console.log(areAnagramsNotSorted('aa bb', 'a b a b'));
console.log(areAnagramsNotSorted('ABA', 'aba'));
console.log(areAnagramsNotSorted('aabbb', 'baabb'));
console.log(areAnagramsNotSorted('a&!#bb', 'aaabbbb'));
console.log(areAnagramsNotSorted('a&!#bb', 'abb'));

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 3. Given two strings, how many characters would need to be added or replaced in order to make them anagrams

function anagramChanges(str1, str2) {
	const countChars = (str) => {
		const count = {};

		for (let char of str) {
			count[char] = (count[char] || 0) + 1;
		}

		return count;
	};

	const count1 = countChars(str1);
	const count2 = countChars(str2);

	let changes = 0;

	// Count mismatches between character frequencies
	const allChars = new Set([...Object.keys(count1), ...Object.keys(count2)]);
	console.log(allChars);

	for (let char of allChars) {
		const freq1 = count1[char] || 0;
		const freq2 = count2[char] || 0;
		changes += Math.abs(freq1 - freq2);
	}

	return changes / 2;
}
console.log(anagramChanges('abad', 'abcd'));
console.log(anagramChanges('aabb', 'baba'));
console.log(anagramChanges('aaaazzzz', 'bbbbwwww'));

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8
