// function solution(n , m){

//   let answer = [];
//   let tmp = [];

//   function DFS(L , s){ // L 레벨, s 포문의 스타트
//     if(L===m){ // 종착점에 도착했다면 answer 에 넣고 return
//       answer.push(tmp.slice());
//     }else{
//       for(let i = s ; i <=n; i++){
//         tmp.push(i);    //
//         console.log(tmp);
//         DFS(L+1, i+1); // 그 다음 레벨들의 조합은 i가 뽑는 숫자  s = i+1 (for문은 i 뒷편부터 돌아야하기 때문)
//         tmp.pop();
//       }
//     }

//   DFS(0,1);
//   return answer;
// }

// 조합은 집합에서 다른 n개의 원소 중에서 순서에 상과없이 r개를 선택할수 있고 중복이면 안된다

// 순열에서 [1,2] 과 [2,1]은 다른 결과이지만  조합은 [1,2] [2,1] 는 같은 것이다  (1 과 2로 구성된 조합이 같이 때문!)

function solution(n, m) {
  let answer = [];
  let tmp = []; // 조합을 만들 배열

  function DFS(L, s) {
    //DFS(Level, start) level은 무조건 증가하고 s는 조합할 뽑은 숫자를 의미한다
    if (L === m) {
      answer.push(tmp.slice()); // tmp 배열에 m 개의 조합이 뽑혔다면 모두 뽑았기에 answer 에 추가
    } else {
      for (let i = s; i <= n; i++) {
        // 시작 자연수 부터 n까지 반복작업 , 재귀함수가 사용되기 때문에 다시 stack으로 돌아왔을 때 i가 뭐였는지 혼돈하기 쉽다 주의하자
        tmp.push(i);
        DFS(L + 1, i + 1);
        tmp.pop(); // 넣어줬던 i는 이미 구성을 answer 에 추가한  조합이므로 제거
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
