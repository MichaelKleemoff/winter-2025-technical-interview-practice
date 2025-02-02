function reverseString(str) {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

console.log(reverseString('Hello, World!'));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
	const words = str.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}

	return words.join(' ');
}

console.log(capitalizeWords('hello, world!'));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords('javascript is awesome'));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
	const vowels = 'aeiou';
	let vowelCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			vowelCount++;
		}
	}

	return vowelCount;
}

console.log(countVowels('hello'));
// Expected Output: 2

console.log(countVowels('programming'));
// Expected Output: 3
