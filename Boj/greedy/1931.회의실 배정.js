

//회의시간이 끝나는 시간으로 정렬 , 그리디는 정렬이 중요하다 
// 정렬을 끝시간으로 잡아줘야한다 
// 시작 시간으로 잡아주면 끝나지 않고 시간이 긴 하나가 회의실을 다 사용하는 사태가 발생 
// 끝나는 시간이 같다면?
// 최대 사용할 수 있는 회의의 개수 

// 배열을 정렬을 하면 앞뒤를 고려하면 뒤에 나오는 애들을 고려할 필요가없다 (그 뒤에 반례가 생기면 그리디로 풀면 안된다 )
// 그리디가 중요한것은 이 선택이 순간순간 최적의 해여야하기 떄문에 


// 주어진 조건이랑 출력해야하는 조건을 말해라 

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

  nums.sort(function(a,b){
    if(a[1]===b[1]) return a[0]-b[0];
    else return a[1]-b[1];
  });

  let endTime = 0;

  for(let x of nums){
    if(x[0] >= endTime){
      endTime=x[1];
      answer++;
    }
  }

  return answer;
}


console.log(n,nums);
