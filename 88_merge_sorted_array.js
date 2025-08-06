var merge = function (nums1, m, nums2, n) {
  temp = nums1.slice(0, m);
  nums2 = nums2.slice(nums2.length - n);
  temp = [...temp, ...nums2];
  temp = temp.sort((a, b) => a - b);
  for (let i = temp.length - 1; i >= 0; i--) {
    nums1.pop();
    nums1.unshift(temp[i]);
  }
};
