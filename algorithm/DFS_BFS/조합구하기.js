function solution(n , m){

  let answer = [];
  let tmp = [];

  function DFS(L , s){ // L 레벨, s 포문의 스타트 
    if(L===m){ // 종착점에 도착했다면 answer 에 넣고 return 
      answer.push(tmp.slice());
    }else{
      for(let i = s ; i <=n; i++){
        tmp.push(i);    // 
        console.log(tmp);
        DFS(L+1, i+1); // 그 다음 레벨들의 조합은 i가 뽑는 숫자  s = i+1 (for문은 i 뒷편부터 돌아야하기 때문) 
        tmp.pop();
      }
    }
  }

  DFS(0,1);
  return answer;
}


console.log(solution(4,2));