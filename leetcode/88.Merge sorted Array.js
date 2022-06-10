var merge = function (nums1, m, nums2, n) {
  let answer = [...nums1.slice(0, m), ...nums2.slice(0, n)];

  answer.sort((a, b) => a - b);

  for (let i = 0; i < answer.length; i++) {
    nums1[i] = answer[i];
  }
};
