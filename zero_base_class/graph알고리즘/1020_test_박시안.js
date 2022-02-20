
function solution(nums){

  let n = nums.length;
  let updy = Array(n).fill(0); 
  let downdy = Array(n).fill(0);

  let answer = [];
  
  for(let i = 0; i<n;i++){
    let cnt = 0; 
    for(let j =i-1; j>=0; j--){
      if(nums[j] < nums[i] && updy[j] > cnt){
        cnt = updy[j];
      }
    }
    updy[i] = cnt + 1;
  }

  for(let i=n-1; i>=0; i--){
    let cnt = 0;
    for(let j = i+1; j<=n; j++){
      if(nums[j] < nums[i] && downdy[j] > cnt){
        cnt = downdy[j];
      }
    }
    downdy[i] = cnt + 1;
  }

  answer = updy.map((value,idx) => value + downdy[idx]);
  return (Math.max(...answer) -1);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1]));

