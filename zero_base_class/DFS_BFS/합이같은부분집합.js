
// 서로소 집합이란 ?
// 공통 원소가 없는 두 집합을 의미한다 
// 즉 나눠진 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야함 
// 처음에 모든 요소의 값인 total을 구하고 시작하는 것이 좋다 
// DFS 안에 합을 로직으로 만들면 반복 연산이 생성되기 때문에 
// DFS 연산이 수행되면서 부분집합의 sum과 total-sum 값이 같은지 비교 




// function solution(nums){

//   let answer = "NO";
//   let total = nums.reduce((a,b) => a+b);
//   let len = nums.length;
//   //let flag = 1; 
//   function DFS(n,sum){

//     //끝나는 조건에서 합이 같아야지 서로소 집합이 되는 것이다 

//     if(n === len ){ 
//       if(total-sum == sum ){
//         answer = 'YES';
//       }
//     }
//     else{
//       DFS(n+1,sum+nums[n]);
//       DFS(n+1,sum);
//     }
//   }


//   DFS(0,0);
  
//   return answer;
// }


// 두개의 부분집합으로 나누었을 때  두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 yes 출력,
// 그렇지 않으면 NO 출력
// 둘로 나뉘는 두 부분 집합은 서로소 집합  
// 서로소 집합이란 ?
// 공통 원소가 없는 두 집합을 의미한다 
// 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다 
// 그래서 시작 시에 배열의 총 합을 구하고 부분 배열을 뺏을 때 /2 의 값이 나온다면 부분 집합으로 해당된다 

function solution(nums){
  let answer = "NO";

  // 우선 reduce() 함수로 nums 배열의 합을 구해라 
  // reduce()는 배열의 요소들을 모아둘 때 사용됨 

  let total = nums.reduce((a,b) => a+b);


  function DFS(v,sum){

    if(v === nums.length){
      if(total-sum === sum){
        answer= "Yes";
      }
    }
    else{
      DFS(v+1,sum+nums[v]);
      DFS(v+1,sum);
      console.log(sum);

    }
  }

  DFS(0,0);

  return answer;
}
console.log(solution([1,3,5,6,7,10])); //YES
//console.log(solution([5,2,6,9,10,12])); //YES
//console.log(solution([3, 9, 11, 13]));