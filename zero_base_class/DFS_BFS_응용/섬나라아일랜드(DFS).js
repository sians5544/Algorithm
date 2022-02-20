// 1 . 얘 대각선 까지 해줘야함 나는 4방향인줄 알았어 



// function solution(board){

//   let answer  = 0;
//   let cnt = 0;

//  // 9시 12시 3시 6시 
//   let dx = [-1, -1, 0, 1, 1, 1, 0, 0,-1];
//   let dy = [0, 1, 1, 1, 0, -1,-1, -1];

//   let len = board.length;

//   function DFS(x,y){

//     for(let k =0; k < 8; k++){

//       let nx = x + dx[k];
//       let ny = y + dy[k];

//       if(nx <=len && ny <=len && nx <=0 && ny <=0 && board[nx][ny] === 0 ){ // board 크기 넘어가는 방향 이거나 0 이면 return 
//         board[nx][ny] = 0;
//         DFS(nx,ny);
//       } 
//     }
//   }

//   for(let i = 0; i<board.length; i++){
//     for( let j = 0; j<board.length; j++){
//       DFS(i,j)
//       cnt++;
//     }
//   }

//   return answer;
//   }

// let dx = [-1, -1, 0, 1, 1, 1, 0, 0,-1];
//   let dy = [0, 1, 1, 1, 0, -1,-1, -1];
function solution(board){

  let answer = 0;

  let dx = [-1, 1, -1, 0, 1, 1, 1, 0];
  let dy = [0, 0, 1, 1, 1, 0, -1,-1];

  let count = 0;

  function DFS(x,y){

    for(let k = 0;  k < 8; k++){
      let nx = x + dx[k];
      let ny = y + dy[k];

      if(nx <board.length && ny <board.length && nx>=0 && ny>=0 && board[nx][ny]===1){
        board[nx][ny] = 0; //한번 탐색한 부분은 바다로 표시 그래야지 다른 방향 검사시에 중복체크 안됨
        DFS(nx,ny);
      }
    }
  }

  for(let i = 0; i<board.length; i++){
    for(let j =0 ; j<board.length; j++){
      if(board[i][j]===1){
        DFS(i,j);
        count++;
      }
    }
  }

  answer = count;
  return answer;
}

console.log(solution([[1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 1], 
  [1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0, 0]]));