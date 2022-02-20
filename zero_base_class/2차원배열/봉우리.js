'use strict';
// function solution(arr){  
//   let answer=0;
//   let n=arr.length;
//   let dx=[-1, 0, 1, 0];
//   let dy=[0, 1, 0, -1];
//   for(let i=0; i<n; i++){
//       for(let j=0; j<n; j++){
//           let flag=1;
//           for(let k=0; k<4; k++){
//               let nx=i+dx[k];
//               let ny=j+dy[k]; /// 네 방향의 좌표 
//               if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){ // 마이너스 영역으로 가지 않도록 설정 
//                   flag=0;
//                   break;
//               }
//           }
//           if(flag) answer++;
//       }
//   }  
    
//   return answer;
// }



function solution2(nums){

  let answer = 0;
  let n = nums.length ;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let cnt = 0;

  for( let i = 0; i < n ; i++){
    for(let j = 0 ; j < n; j++){
      let flag = 1;
      for(let k = 0; k < 4 ; k++){

        let nx = dx[k] + i;
        let ny = dy[k] + j;

        if( nx <n  && ny <n && nx >=0 && ny >=0 && nums[nx][ny] >= nums[i][j]){
          flag = 0; 
          break;
        }
        
      }
      if(flag === 1) cnt++;    
    }
  }

  answer = cnt ; 
  return answer;
}

console.log(solution2([[5, 3, 7, 2, 3], 
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]]));
