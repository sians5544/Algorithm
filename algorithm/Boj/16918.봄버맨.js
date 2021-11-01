
// count = 1이면  pan에 폭탄 위치 기록
// count  = 2이면 board 에 다 0으로 초기화 
// count = 3 이면 기록된 pan 기준 (i+1,j) , (i-1,j) , (i,j+1) , (i,j-1) 을 .처리하고

// 새로운 배열은 무조건 전체 0으로 채워지게 하고 
// 이전 배열은 폭탄 파괴할 때 이용해보자 
const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [r,c,n] = input[0].split(" ").map(Number);

let board = Array(r);

for (let i = 1; i < input.length; i++) {
  board[i-1]=input[i].trim().split('').map(String);
  }

  let dx = [1,-1,0,0];
  let dy = [0,0,1,-1];


  let pan = Array.from(Array(r), ()=>Array(c).fill(""));


  function setBomb(time){
    for(let i = 0; i<r; i++){
      for(let j = 0 ; j<c; j++){
        if(pan[i][j] === time){
          for(let k =0; k<4; k++){
            let xd = dx[k] + i;
            let yd = dy[k] + j;
            if(xd < r && yd < c && xd >= 0 && yd >= 0)
              board[xd][yd] = '.';
          }
          board[i][j] = '.';
          pan[i][j] = 0;
        }
      }
    }
  }
  // pan에다가 board 백업 해주자


  function settime(){
    for(let i = 0; i<r; i++){
      for(let j = 0; j<c;j++){
        if(board[i][j]==='O'){
          pan[i][j] = 3;
        }
      }
    }
  }

  function install_bomb(time){
    for(let i = 0; i<r; i++){
      for(let j = 0; j<c;j++){
        if(board[i][j]==='O') continue;
          board[i][j] = 'O';
          pan[i][j] = time + 3;
      }
    }
  }
  
  settime();

  for(let t = 2 ; t<=n; t++){
  
    if(t%2 === 1){
      setBomb(t);
    }
    else{
      install_bomb(t)
    }
  }

  for(let i = 0; i < r; i++){
    board[i] = board[i].join("");
    console.log(board[i]);
  }
