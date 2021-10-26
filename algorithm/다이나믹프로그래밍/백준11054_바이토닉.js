// 바이토닉 수열이란? 
// 한 값을 기준으로 왼쪽은 증가하는 수열 , 오른쪽은 감소하는 수열을 이루는 형태 

// 주어진 수열을 입력 받고 수열의 첫번째 원소부터 돌면서 
// 그 원소에 가장 긴 바이토닉 수열의 개수를 dp배열에 저장한다

//  이 문제는 수열의 부분 중 바이토닉 수열이면서 
// 가장 긴 수열의 길이를 구하는 것 

function solution(nums){

  let n = nums.length;
  let updy = Array(n).fill(0); // 증가하는 부분수열의 최대 값 저장 배열
  let downdy = Array(n).fill(0); // 감소하는 부분 수열의 최대 값

  let answer = [];
  

  // 앞에서 부터 배열 돈다 
  // 증가하는 부분의 수열 최대 길이 구하기 

  for(let i = 0; i<n;i++){
    let cnt = 0; 
    for(let j =i-1; j>=0; j--){
      if(nums[j] < nums[i] && updy[j] > cnt){
        cnt = updy[j];
      }
    }
    updy[i] = cnt + 1;
  }

  // 뒤에서 부터 배열을 돈다 
  // 감소하는 부분 수열의 최대 길이들 구하기 

  for(let i=n-1; i>=0; i--){
    let cnt = 0;
    for(let j = i+1; j<=n; j++){
      if(nums[j] < nums[i] && downdy[j] > cnt){
        cnt = downdy[j];
      }
    }
    downdy[i] = cnt + 1;
  }
  // 증가하는 부분수열, 감소하는 부분 수열의 길이들 더하기 
 // 최대 값에 해당하는 부분은 
 //1,2,3,4,5 /1,2 ,5 이고 
 // 이 둘을 합치면
 // 1,2,3,4,5,5,2,1 이 되는데 가운데 값이 중복이라서 -1 을 하는 것! 

  answer = updy.map((value,idx) => value + downdy[idx]);
  return (Math.max(...answer) -1);
}

console.log(solution([1,5,2,1,4,3,4,5,2,1]));

