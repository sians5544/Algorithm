
'use strict';

// 이 문제는 메세지(숫자 N개로 이루어진 수열을) 에 등장하는 숫자를 빈도순대로 정렬하려고 하는 문제 
// 투포인터를 사용해야겠다는 힌트는 
// 메세지가 숫자 N 개로 이루어진 수열이고 
// 해당 수열의 원소들을 하나씩 확인해야하는 문제인데 완전 탐색하는거보다 투포인터가 빠르기 때문
// 메세지의 숫자 N (배열의 원소 개수 )
// 메세지의 숫자는 C 보다 작거나 같다 

// 빈도 정렬은 두수 X 와 Y가 있을 때 , X가 Y보다 수열에서 많이 등장하는 경우에는 
// X 가 Y보다 앞에 있어야한다 
//  등장하는 횟수가 같다면 먼저 나온것이 앞에 있어야함 그렇기 때문에 hash의 값은 [count , index] 값이어야함

const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n,c] = input[0].split(" ").map(Number);

let tmp = input[1].split(" ");
let nums = Array(n);

for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}

function solution(n,c,nums){
  let answer = [];

  let hash = new Map();

  for(let right = 0; right < n; right++){
    //[count,index]
    
    if(hash.has(nums[right])){
      //이미 해쉬에 있다면 카운트만 증가시키면 된다  
      let [cnt,index] = hash.get(nums[right]);
      hash.set(nums[right],[cnt+1,index]);
    }
    else{
      //해쉬에 없다면 , hash에 넣어주면서 배열의 값과 인덱스를 추가한다 [nums[right] , index] 
      hash.set(nums[right],[1,right]);
    }
  }

  // 정렬
  // 등장하는 횟수가 같다면 인덱스 값이 작은 것으로 오름차순 정렬
  // 등장횟수가 큰 값으로 내림차순 정렬
  let result=[...hash].sort((a, b) => { 
    if(a[1][0] === b[1][0]) return a[1][1]-b[1][1];
    else return b[1][0]-a[1][0];
  });


  // value 을 카운트 만큼 answer 배열에 추가
  for(let [key,[value,index]] of result){
    for(let i = 0; i<value; i++){
      answer.push(key);
    }
  }
  
  //출력 값이 배열의 형태가 아니므로 join처리 
  return answer.join(" ");
}

console.log(solution(n,c,nums));