//1. 각 행에 1~9까지 숫자가 중복없이 나오고 
// 2. 각 열에 1~9까지 숫자가 중복 없이 나오고 
// 3. 각 3x3 사각형이 1~9까지 숫자가 중복없이 나와야함 

// 완성되지 않은 스도쿠 퍼즐이 주어졌을 때 스도쿠를 정확하게 완성하는 프로그램 작성 

// 완성한 스도쿠를 반환, 답이 여러게 있다면 오름차순으로 제일 먼저 발견된 것 반환 
// 81자리의 수가 제일 작은 경우로 반환 



// 0의 위치들만 좌표를 넣어줘야한다 
function solution(board){

  let len = board.length; 
  let position = Array.from(Array(2), ()=>Array(81));
  let group=Array.from(Array(len+1), ()=>Array());
  let row = Array.from(Array(len+1), ()=>Array());
  let col = Array.from(Array(len+1),()=>Array());

  let answer = [];

  for(let i = 0; i<9; i++){
    for(let j = 0; j<9; j++){
      if(board[i][j] === 0){
        position[0][cnt] = i;
        position[1][cnt++] = j;
      }
      else{
        row[i][board[i][j]] = 1;
        col[i][board[i][j]] = 1;
        group[find(i,j)][board[i][j]] = 1;
      }
    }
  }


  let flag = false;
  //DFS 선언
  DFS(0);
  function finc(x,y){
    return parseInt(x/3) * 3 + parseInt(y/3);
  }



  function DFS(L)}{

  }

  return answer;


}