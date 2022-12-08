//Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.
//You may assume that the array is non - empty and the majority element always exist in the array.

let majorityElement = function (nums) {
    const ht = {} //hash table keeps count of how many times elements appear

    //for of loops are used to iterate over iterable objects, like arrays and strings
    for (const num of nums) {
        ht[num] = ht[num] + 1 || 1
    }

    //for in loops are used to iterate over an object
    for (const key in ht) {
        if (ht[key] > Math.floor(nums.length / 2)) {
            return key
        }
    }
}

majorityElement([2, 1, 2])