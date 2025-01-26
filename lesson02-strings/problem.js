/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
	let charSet = new Set(); // To store unique characters
	let maxLength = 0; // To keep track of the longest substring
	let left = 0; // Left pointer of the sliding window

	for (let right = 0; right < s.length; right++) {
		while (charSet.has(s[right])) {
			charSet.delete(s[left]); // Remove the leftmost character
			left++; // Move the left pointer to shrink the window
		}
		charSet.add(s[right]); // Add the current character to the set
		maxLength = Math.max(maxLength, right - left + 1); // Update max length
	}

	return maxLength;
}

module.exports = lengthOfLongestSubstring;
