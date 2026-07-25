// 3514. Number of Unique XOR Triplets II

/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
    const n = nums.length;

    let maxEl = 0;
    for (const num of nums) {
        if (num > maxEl) maxEl = num;
    }

    let T = 1;
    while (T <= maxEl) {
        T <<= 1;
    }

    const pairXorExists = new Uint8Array(T);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            pairXorExists[nums[i] ^ nums[j]] = 1;
        }
    }

    const tripleXorExists = new Uint8Array(T);
    for (let x = 0; x < T; x++) {
        if (pairXorExists[x]) {
            for (let i = 0; i < n; i++) {
                tripleXorExists[x ^ nums[i]] = 1;
            }
        }
    }

    let uniqueCount = 0;
    for (let x = 0; x < T; x++) {
        if (tripleXorExists[x]) {
            uniqueCount++;
        }
    }
    return uniqueCount;

};
