function solution(board){  
  let answer=0;
  let n=board.length;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  let dist=Array.from(Array(7), ()=>Array(7).fill(0));
  function BFS(x, y){
      let queue=[]; 
      queue.push([x, y]);
      board[x][y]=1; // 출발점 체크가 필요하다 
      while(queue.length){
          let curr=queue.shift();
          for(let j=0; j<4; j++){ // 4방향을 확인한다 
              let nx=curr[0]+dx[j];
              let ny=curr[1]+dy[j];
              if(nx>=0 && nx<7 && ny>=0 && ny<7 && board[nx][ny]==0){ // 경계선 안쪽에 있어야하고 방문을 안했어야함 
                  board[nx][ny]=1;
                  dist[nx][ny]=dist[curr[0]][curr[1]]+1; // 현재지점에서 =  갈려고 하는 지점  
                  queue.push([nx, ny]);
              }
          }   
      }
  }
  BFS(0, 0);
  console.log(dist);
  if(dist[6][6]===0) return -1; // 0으로 되어있다면 거기 지점을 못갔다는 표시이다 
  else answer=dist[6][6];
  return answer;
}
let arr=[[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 1], 
[1, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0, 0]];

console.log(solution(arr));