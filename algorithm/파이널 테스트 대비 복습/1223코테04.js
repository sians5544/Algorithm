function solution(nums) {
  let answer = 0;

  let len = nums.length;
 
  for (let i = 1; i < len; i++) {
    let left = nums.slice(0, i);
    let right = nums.slice(i, len);

    let leftmax = [...left].reduce((acc, cur) => (acc > cur ? acc : cur));
    let rightmin = [...right].reduce((acc, cur) => (acc > cur ? cur : acc));
    
    if (leftmax <= rightmin) {
      answer = i;
      break;
    }
  }
  return answer;
}

console.log(solution([5, 0, 3, 8, 6]));
