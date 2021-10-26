
// 돌 다리를 건거는 간 값은 dy[n+1] 에 저장되어있다 
// 돌은 7개고 도착하는건 8번째 

function solution(n){
  let answer = 0;

  let dy = Array(n+1).fill(0);

  dy[1] = 1;
  dy[2] = 2;

  for(let i = 4; i<=n+1; i++){
    if( i !== 5){
    dy[i] = dy[i-2]+ dy[[i-1]];
    }
  }

  answer = dy[n+1];
  return answer;
}

console.log(solution(7));


// 3번째, 5번째 돌 못 밟는다고 생각하자 

