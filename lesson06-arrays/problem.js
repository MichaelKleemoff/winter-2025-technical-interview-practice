// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
	let max = Math.max(...nums);
	let maxIndex = nums.indexOf(max);

	for (let i = 0; i < nums.length; i++) {
		if (i !== maxIndex && nums[maxIndex] < 2 * nums[i]) {
			return -1;
		}
	}

	return maxIndex;
}
console.log(checkLargestElement([1, 5, 3, 9, 2]));
console.log(checkLargestElement([-7, -2, -5, -1]));
console.log(checkLargestElement([-7, 5, -5, 1]));

module.exports = checkLargestElement;
