function solution(numbers, target) {
  let answer = 0;
  let n = numbers.length;
  let sum = 0;

  function DFS(L,sum){
    if(L===numbers.length){
      if(target === sum) answer++;
    }
    else{
      // +1 로 사용 
      DFS(L+1,sum+numbers[L]);
    
      DFS(L+1,sum-numbers[L]);
      
    }
  }
  
  DFS(0,0);
  return answer;
}


console.log(solution([1,1,1,1,1],3));