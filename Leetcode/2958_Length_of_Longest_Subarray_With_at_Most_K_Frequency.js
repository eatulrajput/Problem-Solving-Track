// 2958: Length of Longest Subarray With at Most K Frequency

// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];
        freq.set(num, (freq.get(num) || 0) + 1);

        // Shrink window until the current number's frequency is <= k
        while (freq.get(num) > k) {
            const leftNum = nums[left];
            freq.set(leftNum, freq.get(leftNum) - 1);
            left++;
        }

        // Update maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};