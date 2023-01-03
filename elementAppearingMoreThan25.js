//given an array of integers, there is exactly 1 integer that occurs more than 25% of the time, return that integer.
//ex
// Input: arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
// Output: 6;

//approach, count all integers and highest frequency wins
//create an object, each integer is a key and the value is how often the integer appears (count)

let elementCount = {};

function calculateElement25(arr) {
  arr.forEach(
    (integer) => (elementCount[integer] = (elementCount[integer] || 0) + 1)
  );
  console.log(elementCount);
  return Object.keys(elementCount).reduce((a, b) =>
    elementCount[a] > elementCount[b] ? a : b
  );
}
