//given an array of integers (nums) and an integer (val), remove all occurences of that val.
//return k (elements remaining) after placing the final result in the first k slots of nums

//input nums = [3,2,2,3], val = 3
//output 2, nums = [2,2,_,_]
//so abvoe, k is 2

function removeElement(nums, val) {
  //find all instances of val in nums, remove all from array, return length of array.

  // const k = nums.filter(num => num != val)
  //.filter doesn't work in this case bc question calls for the same array (nums)

  //this for loop is looping backwards, looping backwards bc we don't want to mess with the index of the elements in the array.
  //splicing at i and for 1 element(so splicing all of the val)
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}
