// 1. given a string with three characters, return the second character
function returnChar(str) {
	return str[1];
}
console.log(returnChar('Michael'));

// 2. get the second and third char from a string. the string will always have atleast three characters
function returnSecondThirdChar(str) {
	return str.substring(1, 3);
}
console.log(returnSecondThirdChar('cat'));
console.log(returnSecondThirdChar('robbed'));

// 'cat' => 'at'
// 'robbed' => 'ob'

// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter(word) {
	return word.slice(1);
}
console.log(getSecondThroughFifthLetter('apple'));

// 4. given a string and a number called N, return the second through the Nth character

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

function getSecondToNth(str, N) {
	return str.slice(1, N);
}
console.log(getSecondToNth('schoolbus', 5));
console.log(getSecondToNth('telephone', 6));

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]
function getFalseElements(arr) {
	return arr.filter((element) => element === false);
}
console.log(getFalseElements([true, true, false, true, false]));

// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

function insertThe(str) {
	const words = str.split(' '); // Split the string into an array of words
	return words.join(' the '); // Join the words with ' the ' in between
}
console.log(insertThe('to beach'));
console.log(insertThe('for real'));
console.log(insertThe('jim john'));
console.log(insertThe('to house'));

// 7.  given two numbers, price and discount, return the price after the discount is applied

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.

function getPriceAfterDiscount(price, discount) {
	return price - price * (discount * 0.01);
}
console.log(getPriceAfterDiscount(100, 15));
console.log(getPriceAfterDiscount(70, 3));
