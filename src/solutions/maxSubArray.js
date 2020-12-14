/*
/* Given an integer array nums, find the contiguous
/* subarray (containing at least one number) which
/* has the largest sum and return its sum.
*/

const maxSubArray = function (nums) {
  let currSum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};

module.exports = { maxSubArray };
