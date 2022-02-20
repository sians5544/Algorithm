'use strict';
 
// n = 3, m = 2임을 기준으로 주석 기입 
// function solution(n,m){
//   let answer= [];
//   let tmp = []; 

//   function DFS(L){
    
//     if(L === m ){ // D(2) 로 넘어온 경우로  중복 순열의 하나의 경우의 수가 완성
//         answer.push(tmp.slice());   // 경우의 수 완성 시에 answer 에 추가 
//     }else{
//       for(let i = 1; i<=n; i++){ // n 가닥의 가지가 뻗어진다 생각하자 
//         // 시작은 D(0) - > D(0)-1([1,]) ,D(0)-2([2,]) , D(0)-3([3,])  을 실행하는 반복 문 
//         tmp.push(i); 
//         DFS(L+1); // 다음 레벨 실행 다음 단계로 (ex D(1)로 실행 경우 ) [1,] 인 경우에 [1,1] 으로 추가될 깊이로 이동 
//         tmp.pop();  // D(2) 가 실행이 된 후 돌아 오는 경우 pop이 실행이 됨, 다음 요소로 검사하기 위해 제거 
//       }
//     }
//   }
//   DFS(0); // 재귀함수의 시작 
//   return answer;
// }




// function solution(n,m){

//   let answer = [];

//   let tmp = [];

//   function DFS(L , sum ){ // L은 레벨을 의미한다 
//     if(L > m){  
//       return answer.push(tmp.slice());
//     }
//     else{
//       for(let i = 1; i <=n; i++){ //중복 순열은 순서를 지켜서 출력해야 하기 때문에  
//         tmp.push(i); // 
//         DFS(L+1); // 
//         tmp.pop(); //  i 가 1이라면 2로 가기 전에 pop 
//       }
//     }
//   }

//   DFS(0);
//   return answer;

// }


// 중복 순열이란 임의의 집합의 순서를 부여하여 차례대로 나열하는데 
// 일반 순열과 다르게 집합의 원소를 중복해서 선택할수 있는 것 
function solution(n,m){
  let answer= [];
  let tmp = [];


  function DFS(v){
    if(tmp.length===m){
      answer.push(tmp.slice());
    }else{
      for(let i = 1; i<=n; i++){
        tmp.push(i);
        DFS(i+1);
        tmp.pop();
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3,2));




























console.log(solution(3,2));