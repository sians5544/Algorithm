//이분검색(결정 알고리즘)

// 이분 검색은 정렬이 되어야 하는게 조건 

// N개를 만들 수 있는 랜선의 최대 길이를 센티미터 단위의 정수로 출력

// 우리가 조절해야할 left , right 는 랜선 

// 이미 가지고 있는 랜선 개수 k
// 필요한 랜선의 개수 n 

const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [k,n] = input[0].split(" ").map(Number);
let nums = [];

for (let i = 1; i < input.length; i++) {
nums.push(input[i].trim().split(' ').map(Number));
}

function solution(k,n,nums){

  let answer = 0 ,left = 1;

  let right = 10e9;

  nums = nums.sort((a,b) => a-b);

  function count(mid){
    let count = 0;
    for(let x of nums){
      count+= Math.floor(x/mid);
    }
    return count;
  }

  while(left<=right){

    let mid = parseInt((left+right)/2);

    if(count(mid)>=n){
      answer = mid;
      left = mid+1;
    }
    else{
      right = mid-1;
    }
  }
  return answer;
}

console.log(k,n,nums);