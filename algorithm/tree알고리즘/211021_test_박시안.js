function solution(games){
  let answer = 0;
  let len = games.length;
  let hash = new Map();
  let max;
  // let board = Array.from(Array(len+1), () => Array(len+1).fill(0));
  // // // for(let i = 0; i <=n; i++) dy[i][i] = 0;
  // // for(let i = 1 ; i <=len; i++){
      
  // //   for(let j =1; j<=len ; j++){
  // //     board[i][j] =games[i-1][j-1]; 
  // //   }
  // // }
  // // console.log(board);

  for(let i = 0; i < len; i++){
      for(let j =0; j<games[i].length; j++){
        max = Number.MIN_SAFE_INTEGER;
        if(j === 0){
          hash.set( games[i][0], 0 );
        }
        else{
          max = Math.max(max,games[i][j]);
          //hash.set(games[i][j],(hash.get(games[i][j]) || 0)+1);
        }
      }
      hash.set(games[i][0],  max);
  
    }

  for(let [key,value] of hash){
    answer+= value;
  }

  return answer;
}


console.log(solution([[1,3,4,5],[2,2,2,4],[3,2,1,2],[4,1,3]]));