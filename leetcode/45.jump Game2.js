function solution(nums) {
  let answer = 0;

  let queue = [];

  if (nums.length <= 1) return 0;

  let checkarr = Array(10001).fill(0);

  queue.push(0);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      for (let j = 1; j <= nums[node]; j++) {
        let num = node + j;

        if (num === nums.length - 1) {
          return answer + 1;
        }

        if (checkarr[num] === 0 && num > 0 && num < 10001) {
          queue.push(num);
          checkarr[num] = 1;
        }
      }
    }
    answer++;
  }

  return answer;
}

console.log(solution([2, 3, 1, 1, 4]));
console.log(solution([2, 3, 0, 1, 4]));
console.log(
  solution([
    8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8,
    7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3,
    9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5,
  ])
);
