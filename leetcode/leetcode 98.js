function solution(candidates,target){
  let answer = [];
    
  let len = candidates.length;

  let check = Array(len).fill(0);
  
  let tmp = [];
  
  function DFS(v,sum){
  
      
      if(sum > target) return ;
      if(sum === target){
        return answer.push(tmp.slice());
      }
      else{
            for(let i = v; i<len ; i++){
                tmp.push(candidates[i]);
                DFS(i, sum+candidates[i]);
                tmp.pop();
              }
            }
      }


  DFS(0,0);
  
  return answer;
}

console.log(solution([2,3,6,7],7));