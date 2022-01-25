// function solution(nums) {
//   let answer = [];

//   let tmp = [];

//   let len = nums.length;

//   let check = Array.from({ length: len }, () => 0);

//   function DFS(L) {
//     if (L > len) {
//       return;
//     } else {
//       answer.push(tmp.slice());
//       for (let i = 0; i < nums.length; i++) {
//         if (check[i] === 0) {
//           check[i] = 1;
//           tmp.push(nums[i]);
//           DFS(L + 1);
//           check[i] = 0;
//           tmp.pop();
//         }
//       }
//     }
//   }
//   DFS(0);

//   return answer;
// }

// function solution(nums) {
//   let answer = [];
//   let tmp = [];
//   let cnt = 0;
//   const MOD = 1e9 + 7;

//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums.slice(j, i).length) tmp.push(nums.slice(j, i));
//     }
//   }

//   for (let t of tmp) {
//     let sum = 0;
//     while (t.length) {
//       sum += t.pop();
//     }
//     if (sum % 2 !== 0) cnt++;
//   }

//   return cnt % MOD;
// }

// function solution(nums) {
//   const MOD = 1e9 + 7;
//   const count = [1, 0];

//   let res = 0;
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     sum = (sum + num) % 2; // 합을 나눠서 짝수인지 홀수인지 확인
//     console.log(sum); //  합에서 전체 홀수 에서
//     if (sum === 1) res = (res + count[0]) % MOD;
//     else res = (res + count[1]) % MOD;

//     console.log(count);
//     count[sum]++;
//   }
//   return res;
// }

// 짝 -홀 : 홀
function solution(nums) {
  let cnt = { 0: 1, 1: 0 };

  let answer = 0;

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum % 2 === 1) {
      answer += cnt[0];
    } else answer += cnt[1];
    cnt[sum % 2]++;
  }

  return answer;
  
}
console.log(solution([1, 3, 5]));
