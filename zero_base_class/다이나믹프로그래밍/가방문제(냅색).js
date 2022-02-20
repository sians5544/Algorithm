// 냅색 알고리즘 

// function solution(nums, m){  
//   let answer=0;
//   let dy=Array.from({length:m+1}, ()=>0);
//   for(let i=0; i<nums.length; i++){
//       for(let j=nums[i][0]; j<=m; j++){
//           dy[j]=Math.max(dy[j], dy[j-nums[i][0]]+nums[i][1]);
//       } 
//   }
//   answer=dy[m];
//   return answer;
// }



function solution(nums,m){

  let answer = 0;

  let dy = Array(m).fill(0);

  for(let i = 0; i< nums.length; i++){
    for(let j = nums[i][0] ; j<=m ; j++){
      dy[j] = Math.max(dy[i],dy[j-nums[i][0] + nums[j][1]]);
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution([[5, 12], [3, 8], [6, 14], [4, 7]], 11));