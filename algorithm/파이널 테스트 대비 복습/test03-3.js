// function solution(nums, k) {
//   var answer = 0;

//   nums.sort((a, b) => a - b);

//   console.log(nums);
//   let left = 0;
//   let right = nums[nums.length - 1];

//   function count(mid) {
//     let count = 0;
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//       sum += Math.abs(nums[mid] - nums[i]);
//       if (sum <= k) count++;
//     }
//     return count;
//   }

//   while (left < right) {
//     let mid = parseInt((left + right) / 2);

//     if (count(mid) <= k) {
//       answer = count(mid);
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return answer;
// }

function solution(nums, k) {
  let answer = 0;
  let sum = 0;
  nums.sort((a, b) => a - b);
  console.log(nums);
  let len = parseInt((nums.length - 1) / 2);

  console.log(len);

  for (let i = 0; i < nums.length; i++) {
    sum += Math.abs(nums[len] - nums[i]);
    if (sum <= k) answer++;
  }

  return answer;
}
//console.log(solution([5, 7, 8, 2, 9, 6, 3], 10));
console.log(solution([-1, 1, 2, 4, 0, -2], 6));
//console.log(solution([1, 2, 4, 7], 6));
//console.log(solution([1, 3, 6, 9, 10], 7));
//console.log(solution([6, 7, 15, 25, 27], 25));
// function solution(nums, k) {
// let n = nums.sort((a, b) => a - b);

// let len = parseInt(nums.length / 2);

// let sum = 0;
// let answer = [];

// let counts = Array(len + 1).fill(0);

// console.log(counts);

// for (let i = 0; i < nums.length; i++) {
//   sum += Math.abs(nums[len] - nums[i]);
//   if (sum <= k) counts[nums[len]]++;
//   else break;
// }

// console.log(counts);
