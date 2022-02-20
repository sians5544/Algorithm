// 동적 계획법 
// 문제를 한번에 풀기에는 어려워서 작은 단위로 쪼개서 하나 풀고 저장
// 그리고 범위를 넓혀서 점화식의 관계를 넓혀가는 것이다 
// 이러한 관계식을 잡아가는게 핵심이다 

// 수열에서 가장 긴 증가하는 부분의 수열의 길이를 출력하라 


const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());

let tmp = input[1].split(" ");
let nums = Array(n);

for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}

function solution(n,nums){

  let answer = 0;

  //dy - 메모이제이션을 해줄 배열 선언 
  let dy = Array(n).fill(0);

  // 점화식이기 때문 시작을 지정해주어야한다 
  dy[0]= 1;

  // 배열만큼 도는 for문 
  for(let i = 1 ; i<n; i++){
    let max = 0; // 자기보다 작은 애들을 찾지 못하면 본인의 숫자로 갱신해줘야하기 때문 
    // i번째보다 앞에 있는 애들을 검사한다 

    for(let j = i; j>=0; j--){
      if(nums[i]>nums[j] && dy[j] > max){
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer,dy[i]);
  }

  return answer;
}

console.log(solution(n,nums));
