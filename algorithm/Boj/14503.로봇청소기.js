// 청소하는 영역의 개수를 구하라 
// (r,c) -> (북쪽으로부터 떨어진 칸의 개수, 서쪽으로부터 떨어진 칸의 개수)


const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n,m] = input[0].split(" ").map(Number);
let [r,c] = input[1].split(" ").map(Number);
let d = Number(input[2].trim());

let arr = Array(n);


for (let i = 0; i < n; i++) {
  arr[i] = input[i+2].split(" ").map(Number);
}


function solution(n,m,r,c,d,arr){

  let answer = 0;

  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];

  for(let i = r; i < n; i++){
    for(let j = c; j< m; j++){

      for(let k = 0; k<4; k++){
          let di = i+dx[k];
          let dj = j+dy[k];

          if(arr[di][dj] === 0 && di>0 && di<n && dj > 0 && dj < m){
            console.log(arr[di][dj]);
            arr[di][dj] = 1;
            answer++;
          }

      }
    }
  }

  return answer;
}

console.log(solution(n,m,r,c,d,arr));