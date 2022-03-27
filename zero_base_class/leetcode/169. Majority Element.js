
function solution(nums) {

  let n = nums.reduce((a, b) => a > b ? a : b);

  let counts = Array(n).fill(0);

  let len = parseInt(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i] - 1] >= len) return nums[i];
    else counts[nums[i] - 1] += 1;
  }
}
//내가 짠 부분 
// counts 라는 배열의 인덱스 값을 이용하여서 가장 빈번한 원소를 얻어내려 했으나 런타임 오류 발생
// 


//////////////통과한 소스..
// 무어의 알고리즘 : 다수 원소의 출현 횟수의 총합은 나머지 원소 출현 횟수보다 많다 
// 그말은 즉 sort 했을 때 한 가운데 있는 배열 요소는 항상 다수의(majority) 한 요소라는 것 
var majorityElement = function(nums) {
    
  nums.sort();
  return nums[parseInt(nums.length/2)];
};
console.log(solution([3, 2, 3]));
console.log(solution([4, 5, 4]));
console.log(solution([2, 2, 1, 1, 1, 2, 2]));
