function solution(n, computers) {
  var answer = 0;
  
  let checknet = Array(n).fill(0);
  
  function DFS(i){
      let index = i;
      if(checknet[index] === 1) return ;
      else{
          checknet[i] = 1;
          for(let i = 0; i<n; i++){
              if(computers[index][i] === 1 && checknet[i] === 0){
                  DFS(i);
              }
          }        
      }
  }
  
  for(let i = 0; i<n; i++){
      if(checknet[i]===0){
          DFS(i);
          answer+=1;
      }
  }
  
  return answer;
}