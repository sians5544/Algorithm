// function solution(nums, m) {
//   let answer = 0;
//   let n = nums.length;
//   function DFS(l, sum) { // 재귀함수 정의
//     if (sum > m) return; // sum이 m(조건값)보다 크면 전(?) 재귀함수 실행하던곳으로 돌아간다
//     if (l === n) { // 배열을 다 돌면
//       console.log(sum);
//       answer = Math.max(answer, sum); // m(조건값)에 가까운 값을 answer변수에 넣기
//     } else {
//       DFS(l + 1, sum + nums[l]); // 재귀함수-배열의 요소를 사용(=그 무게를 사용)
//       //console.log(sum);
//       DFS(l + 1, sum); // 재귀함수-배열의 요소를 사용하지 않음
//     }
//   }
//   DFS(0, 0); // 함수호출 - 매개변수 0,0으로 넘기기
//   return answer;
// }


function solution(nums,c){
  let answer = 0;

  function DFS(v,sum){

    if(v === nums.length){
      if(sum<=c){
        answer = Math.max(answer,sum);
      }
    } else{
      DFS(v+1,sum+nums[v]);
      DFS(v+1,sum);
    }
  }

  DFS(0,0);
  return answer;
}


console.log(solution([81, 58, 42, 33, 61], 259));