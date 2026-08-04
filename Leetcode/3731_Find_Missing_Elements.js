// 3731. Find Missing Elements

var findMissingElements = function (nums) {
    if (!nums || nums.length < 2) return [];

    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const presentNumbers = new Set(nums);
    const missing = [];

    for (let i = min + 1; i < max; i++) {
        if (!presentNumbers.has(i)) {
            missing.push(i);
        }
    }

    return missing;
};
