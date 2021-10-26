// function solution(n, k , arr){

//   let answer = Number.MAX_SAFE_INTEGER;

//   let left  = 0, cnt  = 0;


//   for(let right = 0; right< arr.length;  right++){

//     if(arr[right] === 1) cnt ++;

//     while( cnt > k){
//       if(arr[left] === 1 ){
//         cnt--;
//       }
//       left++;
//     }

//     if(cnt >=k){
//       answer = Math.min(answer,right-left);
//     }
//   }
    
//     if(cnt < k){
//       answer =  -1;
//     }
    
//   return answer;
// }



const PROBLEM_NUMBER = 20922;

const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./testcase/" + PROBLEM_NUMBER + ".txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = parseInt(input[0].split(" ")[0]);
let k = parseInt(input[0].split(" ")[1]);

let tmp = input[1].split(" ");
let nums = Array(n);
for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}

function solution(n, k , nums){

  let answer = Number.MAX_SAFE_INTEGER;

  let left  = 0, cnt  = 0;

  for(let right = 0; right< n ;  right++){

    if(nums[right] === 1) cnt ++;

    while( cnt > k){
      if(nums[left] === 1 ){
        cnt--;
      }
      left++;
    }

    if(cnt >=k){
      answer = Math.min(answer, (right-left)+1);
    }
  }
        
  return answer;
}

console.log(solution(n, k, nums));
