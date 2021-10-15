function solution(n, f){         
  let answer, flag=0;
  let dy= Array.from(Array(11), () => Array(11).fill(0));
  let ch=Array.from({length:n+1}, ()=>0);
  let p=[], b=[];
  function combi(n, r){
      if(dy[n][r]>0) return dy[n][r];
      if(n===r || r===0) return 1;
      else return dy[n][r]=combi(n-1, r-1)+combi(n-1, r);
  }
  function DFS(L, sum){
      if(flag) return ;
      if(L === n){ // L 이 n 일때 순열하나 생성
        //p 배열의 0번과 b 배열의 number 을 더해줘야지 파이널 넘버가 나온다 
        if(sum === f){
          answer = p.slice();
          flag = 1; // 답 찾았으면 더 돌면 안됨 
        }
      }
      else{
        for(let i = 1; i <=n; i++){ // 오름차순으로 만들어지는 순열 
          if(ch[i]==0){
            ch[i] = 1;
            p.push(i);
            DFS(L+1, sum+(b[L] * p[L))); 
            ch[i] = 0;
            p.pop();
          }
        }
      }
  }
  for(let i=0; i<n; i++){
      b.push(combi(n-1, i)); // 이항계수를 만드는 부분
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));



b.push(1);
for(let i=1; i<n; i++){
 b.push(parseInt((b[i-1]*(n-i))/i));
}