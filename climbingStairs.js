//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
  //this is solved recursively
  let memo = {};
  //this is storing the previous numbers

  let count = function (k) {
    if (memo[k]) return memo[k];
    if (k == 2) return 2;
    if (k <= 1) return 1;
    //two above ifs are base cases
    memo[k] = count(k - 1) + count(k - 2);
    return memo[k];
  };

  return count(n);
}
