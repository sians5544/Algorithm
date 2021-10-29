// N 개의 재료와 
// 갑옷을 만드는데 필요한 수 M
// 두 재료의 고유한 번호를 합쳐서 M 되면 갑옷이 만들어 지는 것
// 갑옷을 만들 수 있는 개수는?

//오름차순 정렬
// 포인터 시작 끝으로 설정해서 확인하기 


const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let m = Number(input[1].trim());


let tmp = input[2].split(" ").map(Number);

let nums = Array(n);

for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}

function solution(n,m,nums){

  let answer = 0, sum=0, left=0;

  nums.sort((a,b) => a-b);

  let right = n-1;

  while(left< right){

    if(nums[left] + nums[right]<m){
      left++;
    }
    else if(nums[left] + nums[right]>m){
      right--;
    }
    else{
      answer++;
      left++;
      right--;
    }

  }
  

  return answer;
}



console.log(solution(n,m,nums));