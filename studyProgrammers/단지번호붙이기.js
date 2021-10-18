function solution(len,map){

  let answer = [];
  let cnt = 0;

  let dx = [-1 ,0 ,1,0];
  let dy = [ 0, 1, 0,-1]; 

  function DFS(x,y){
    
    for(let k = 0; k <4; k++){
      let nx = x + dx[k]; 
      let ny = y + dy[k];



      if(nx>=0 && ny>=0 && nx < len &&  ny < len && map[nx][ny]===1){
        map[nx][ny] = 0;
        cnt++;
        DFS(nx,ny);
      }
  }
}

  for(let i = 0; i<len;i++){
    for(let j = 0; j<len;j++){
      if(map[i][j]===1){
        DFS(i,j);
        answer.push(cnt);
        cnt = 0;
      }
    }
  }

  answer.unshift(answer.length);
  answer.sort((a,b) => a-b);
  return answer;
}

console.log(solution(7,[[0,1,1,0,1,0,0],[0,1,1,0,1,0,1],[1,1,1,0,1,0,1],[0,0,0,0,1,1,1],[0,1,0,0,0,0,0],[0,1,1,1,1,1,0],[0,1,1,1,0,0,0]]));