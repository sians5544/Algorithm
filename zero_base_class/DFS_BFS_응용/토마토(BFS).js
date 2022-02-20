// 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 
// 익은 토마토의 영향을 받아 익게 된다 
// 인접은 왼쪽, 오른쪽, 앞, 뒤 , 네방향 
// 창고의 토마토들이 며칠이 지나면 다 익게 되는가? 
// 최소 일수를 구하라 

// 정수 1은 익은 토마토
// 정수 0은 익지 않은 토마토
// 정수 -1은 토마토 안들어 있음 

// 레벨 써서 해보기 

// 강사님은 dist 로해서 하나의 토마토에 의해 익혀지면 가중 +1 시켜줌 
// dist 에서 가장 큰 값이 답 




// function solution(board){

//   let answer=0;
//   let n=board.length;
//   let m=board[0].length;
//   let dx=[-1, 0, 1, 0];
//   let dy=[0, 1, 0, -1];
//   let dist=Array.from(Array(n), ()=>Array(m).fill(0));
//   let queue=[]; 
//   function BFS(){
//       while(queue.length){
//           let curr=queue.shift();
//           for(let j=0; j<4; j++){
//               let nx=curr[0]+dx[j];
//               let ny=curr[1]+dy[j];
//               if(nx>=0 && nx<n && ny>=0 && ny<m && board[nx][ny]===0){
//                   board[nx][ny]=1;
//                   dist[nx][ny]=dist[curr[0]][curr[1]]+1;
//                   answer=dist[nx][ny];
//                   queue.push([nx, ny]);
//               }
//           }   
//       }
//   }
//   for(let i=0; i<n; i++){
//       for(let j=0; j<m; j++){
//           if(board[i][j]===1){
//               queue.push([i, j]);
//           }
//       }
//   }
  
//   BFS();
//   for(let i=0; i<n; i++){
//       for(let j=0; j<m; j++){
//           if(board[i][j]===0){
//               return -1;
//           }
//       }
//   }
//   return answer;
// }

const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [m,n] = input[0].split(" ").map(Number);

let tomato = [];

for (let i = 1; i < input.length; i++) {
	tomato.push(input[i].trim().split(' ').map(Number));
}

function solution(tomato,m,n){
    let answer = 0;

    let dx = [1,0,-1,0];
    let dy = [0,1, 0,-1];

    let checktt =Array.from(Array(n),()=>Array(m).fill(0));
    let queue = [];

    function BFS(){
        checktt[0][0]=0;
        while(queue.length){
            let target = queue[0];
            for(let k = 0; k <4; k++){

                    let nx = target[0] + dx[k];
                    let ny = target[1] + dy[k];

                    if(nx>=0 && nx<n && ny>=0 && ny<m && tomato[nx][ny]===0){
                        tomato[nx][ny] = 1;
                        checktt[nx][ny] = checktt[target[0]][target[1]] + 1;
                        queue.push([nx,ny]);
                        answer = checktt[nx][ny];
                    }
            }               
        }
    }

    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(tomato[i][j]===1) queue.push([i,j]);
        }
    }

    if(queue.length === (n*m)){
        return 0;
    }
    else if(queue.length > 0){
        BFS();
    }
    
    for(let i = 0; i <n; i++){
        for(let j = 0; j<m; j++){
            if(tomato[i][j] === 0) return -1;
        }
    }

    return answer;
}
console.log(solution(tomato,m,n));