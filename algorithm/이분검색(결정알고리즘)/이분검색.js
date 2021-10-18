
// 이분검색은 정렬이 되어있어야 하는게 조건이다 

function solution(nums,m){

  let answer = 0;

  nums = nums.sort((a,b) => a-b);

  let mid = parseInt
  let start = 0;

  let end = nums.length-1;


  while(start<=end){
    
    let mid = parseInt((start+end)/2);

    if(nums[mid] === m ){
      answer = mid +1;
      break
    }

    else if(nums[mid] > m){
      end = mid - 1;
    }
    else{
      start = mid +1;
    }
  }

  return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));