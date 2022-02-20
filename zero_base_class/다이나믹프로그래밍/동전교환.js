

// DFS 는 종류가 30개 정도면 써도되지만 ,  그 이상이면 무조건 다이나믹으로 가야한다 
function solution(nums,m){
  let answer = 0;
  let sum = 0;
  let tmp = [];

  let dy = Array(m).fill(0);

  dy[0] = 1;


  for(let x of nums){
    for( let i = x ; i<=m; i++){
        dy[i]= dy[i-x];
    }
  }
  answer = dy[m];
  return answer;
}

console.log(solution([2,3,5],10));


