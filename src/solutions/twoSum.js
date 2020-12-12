const twoSum = (nums, target) => {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (seen[target - nums[i]]) {
      return [nums.indexOf(target - nums[i]), i];
    }
    seen[nums[i]] = true;
  }
};

module.exports = { twoSum };
