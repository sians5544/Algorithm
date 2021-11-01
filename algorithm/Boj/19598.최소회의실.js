
//최소 회의실 개수 

// 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다 
// 회의의 시작 시간은 끝나는 시간보다 항상 작다 

// 회의실 end 시간을 기준으로 최소 힙을 만들어라 

// 회의실을 카운트 하는 배열을 만든다 
// 이 배열에는 끝나는 시간을 넣는다  
// 끝나는 시간과 for문을 도는 배열의 시작 시간을 비교하여 회의실 쓸수있는지 판단 



const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());

let nums = [];

for (let i = 1; i < input.length; i++) {
	nums.push(input[i].trim().split(' ').map(Number));
}

function solution(n,nums){
  let answer = 0;

  //회의실 개수를 체크하는 배열 
  let check = Array(n).fill(0);

  nums.sort(function(a,b){
    if(a[0]===b[0]) return a[1]-b[1];
    else return a[0]-b[0];
  }); // 정렬 기준을 두개로 잡으려면 하나로 먼저 정렬한 후에 다른 한가지 조건으로 정렬을 해준다 


  console.log(nums);

  for(let x of nums){
    for(let i = 0; i<n; i++){
      if(check[i] <= x[0]){
        check[i] = x[1];
        break;
      }
    }
  }

  for(let j = 0; j<check.length; j++){
    if(check[j] !== 0){
      answer++;
    }
  }

  return answer;
}

// console.log(solution(3,[[0,40],[15,30],[5,10]]));
// console.log(solution(2,[[10,20],[5,10]]));

console.log(solution(n,nums));