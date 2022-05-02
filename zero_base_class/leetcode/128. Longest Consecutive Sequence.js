var longestConsecutive = function (nums) {
  let answer = 0;
  let hash = new Map();
  let left = 0;
  let cnt = 1;

  nums.sort((a, b) => a - b);

  for (let num of nums) {
    hash.set(num, num);
  }

  let arr = [...hash.keys()];

  arr.sort((a, b) => a - b);

  for (let right = 1; right < arr.length; right++) {
    if (hash.has(arr[right] - 1)) {
      cnt += 1;
    } else {
      cnt = 1;
    }
    answer = Math.max(cnt, answer);
  }

  answer === arr.length - 1 ? (answer = answer + 1) : answer;

  return answer;
};
