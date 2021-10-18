function solution(root, low, high) {
    
  let sum = 0;
  let len = root.length;
  let answer = 0;

  function DSF(v,num){
      if(len>=v){
          if(num >= low && high >= num){
              sum+=num;
          }
          else{
              DFS(v+1,root[v]);
              console.log(sum);
          }
          
      }
  }
  
  
  DFS(0);
  answer = sum;
  return answer;
};

console.log(solution[[10,5,15,3,7,null,18],7,15]);