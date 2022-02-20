function solution(nums, k) {
  let answer = 0;
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] - mid - 1 < k) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }

  console.log(left);
  answer = left + k; //이미 있는 숫자 배열에 있는 숫자의 개수가 left 이고 우리가 찾는 k 번째 이기때문에 left + k 이다 
  return answer;
}


// function solution(nums, k) {
//   let answer = 0;
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = parseInt((left + right) / 2);

//     if (nums[mid] >= nums[left]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }

//   }
//   console.log(left);
//   return answer;
// }
console.log(solution([2, 5, 7, 9, 12], 6))