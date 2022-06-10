function solution(arr) {
  let answer = [];

  let tmp = [];

  let len = arr.length;

  let check = Array.from({ length: len }, () => 0);

  // console.log(visited);

  function DFS(L) {
    console.log(L >= len);
    if (L > len) {
      console.log();
      return answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp.push(arr[i]);
          // console.log(tmp);
          DFS(L + 1);
          check[i] = 0;
          tmp.pop();
        }
      }
    }
  }

  console.log(answer);
  DFS(0);

  return answer;
}

console.log(solution([1, 3, 5]));

// const MOD = 1e9 + 7;
// const n = arr.length;
// const count = [1, 0];

// let res = 0;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     const num = arr[i];
//     sum = (sum + num) % 2;

//     if (sum === 1) res = (res + count[0]) % MOD;
//     else res = (res + count[1]) % MOD;

//     count[sum]++;
// }

// return res;

// let numOfSubarrays = (A, sum = 0, cnt = [1, 0]) => {
//   for (let i = 0; i < A.length; ++i)
//       ++cnt[(sum += A[i]) % 2]
//   return (cnt[0] * cnt[1]) % (1e9 + 7);
// };

// var isPossibleDivide = function(nums, k) {
  const map = new Map()
  for(let n of nums){
    if(!map.has(n))map.set(n,0)
    map.set(n, map.get(n)+1)
  }

  nums.sort((a,b)=>a-b)

  for(let n of nums){
    let curr = n;
    let run = 0;
    if(map.size < k){
      break
    }
    while(map.get(curr) > 0 && run++ < k){
      map.set(curr, map.get(curr) - 1)
      if(map.get(curr) == 0){
        map.delete(curr)
      }
      curr++
    }
  }
  return !map.size
// };
