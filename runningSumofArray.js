// Leetcode 75 question
// Input: nums = [1,2,3,4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

function runningSum() {
    let total = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]
        result.push(total)
    }

    return result
}