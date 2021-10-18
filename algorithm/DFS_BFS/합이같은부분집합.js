
// 서로소 집합이란 ?
// 공통 원소가 없는 두 집합을 의미한다 
// 즉 나눠진 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야함 
// 처음에 모든 요소의 값인 total을 구하고 시작하는 것이 좋다 
// DFS 안에 합을 로직으로 만들면 반복 연산이 생성되기 때문에 
// DFS 연산이 수행되면서 부분집합의 sum과 total-sum 값이 같은지 비교 




function solution(nums){

  let answer = "NO";
  let total = nums.reduce((a,b) => a+b);
  let len = nums.length;
  //let flag = 1; 
  function DFS(n,sum){

    //끝나는 조건에서 합이 같아야지 서로소 집합이 되는 것이다 

    if(n === len ){ 
      if(total-sum == sum ){
        answer = 'YES';
      }
    }
    else{
      DFS(n+1,sum+nums[n]);
      DFS(n+1,sum);
    }
  }


  DFS(0,0);
  
  return answer;
}

console.log(solution([1,3,5,6,7,10])); //YES
console.log(solution([5,2,6,9,10,12])); //YES
console.log(solution([3, 9, 11, 13]));