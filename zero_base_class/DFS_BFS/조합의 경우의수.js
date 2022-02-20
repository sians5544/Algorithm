//function solution(n,r){

//   let answer = [];

//   let dy = Array.from(Array(35), () => Array(35).fill(0)); 

//   function DFS(n,r){
//     if(dy[n][r]>0) return dy[n][r];

//     if(n === r || r=== 0) return 1;
//     else return dy[n][r]= DFS(n-1,r-1)+DFS(n-1,r); 
//   }
//   answer = DFS(n,r);
//   return answer;
// }

// console.log(solution(5,3));

// 조합의 경우의 수 (
// nCr = (n-1) C( r-1 )+(n-1) C (r)

// n : 5 ,r =3 일 경우는  저 공식은 두가지 경우를 더하면 조합수를 구할 수 있다는 것이다
// 1. (n-1) C( r-1 )  :  n-1 : 4 , r-1 : 3 으로  4 개중에  5를 포함하고 조합하는 숫자 2개
// 2. (n-1) C (r) :  5가 참여하지 않는 4개 중에 3개를 뽑아서 조합한 수 
// 위 1,2 를 더하면  5C3 의 조합의 수를 구할 수 있다 
// n 과 r 이 같으면  ( n: 3, r:3 이라면 3가지 중에 3가지 뽑는 경우 1개 )
// r이 0 이라면 (2가지 중에 0개 뽑는 방법 1개 ) 이런식이므로
// r = 0 || n===r 인 경우는 return 1 을 시켜줘야한다 
// 그런데 이런식으로 재귀함수로 푼다면 시간이 너무오래 걸리므로 메모이 제이션을 사용한다 


function solution(n,r){

  let answer = 0; 
  let memoization = Array.from(Array(35), () =>  Array(35).fill(0));

  function DFS(n,r){
    if(memoization[n][r] > 0) return memoization[n][r];

    if(r === 0 || n === r) return 1; 
    else{
      return memoization[r][n] =  DFS(n-1,r-1) + DFS(n-1,r);
    }
  }
  answer = DFS(n,r);

  return answer;
}

console.log(solution(5,3));