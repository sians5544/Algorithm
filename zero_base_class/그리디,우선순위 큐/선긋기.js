// 끝정렬 안된다 체크 배열 안된다 
// x y 는 1~~ 1억 까지의 좌표점을 가지고 있기 때문에 배열은 사용하면안된다 
// 이건 내가 풀수 있을거같다 답 보지말고 하자 

// 'use strict';

// function solution(nums){

//   let answer = 0;

//   nums.sort((a, b)=>a[0]-b[0]); // 시작 정렬로 정렬하여 앞에서부터 측정 

//   let s = nums[0][0]; // 선의 시작 점 세팅
//   let e = nums[0][1]; // 선의 끝 점 세팅 

//   answer+= e-s; // [0]인덱스의 길이 세팅

//   for(let i = 1; i <nums.length; i++){
//     if(nums[i][0]<=e && nums[i][1]>=e){ // 선이 앞의 좌표와 겹치는 경우 
//       answer+= nums[i][1] - e; //i번째 시작점에서 앞의 끝점을 빼주면 겹쳐서 그린 부분으로 answer 에 누적 
//       s = e; // 직전의 끝점을 시작 점으로 세팅 
//     } 
//     else{ //선이 겹치지 않는 경우 
//       answer+=nums[i][1]-nums[i][0]; //  겹치지 않는다면 그냥 해당 좌표의 끝 - 시작 해주면 단독 길이가 나온다 
//       s = nums[i][0]; // 시작점을 i번째로 세팅 
    
//     }
//     e = nums[i][1]; // 끝점은 각 좌표의 마지막 정렬이므로 공통으로 빼줬다 
//   }
//   return answer;
// }



function soluiton(nums){

  let answer = 0;

  nums.sort((a,b) => a[0]-b[0]);

  let start = nums[0][0];
  let end = nums[0][1];

  answer+= end - start;

  for(let i = 1; i< nums.length; i++){
    if(end > nums[i][0]){
      answer+= nums[i][1]-end;
    }
    else{
      answer+= nums[i][1] - nums[i][0];
    }

    start = nums[i][0];
    end = nums[i][1];
  }

  return answer;
}
console.log(soluiton([[1,3] ,[2,5],[7,10]]));
console.log(soluiton([[5,6] ,[1,3],[7,8],[9,10]]));