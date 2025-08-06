var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      nums.pop();
      i -= 1;
    }
  }
};
