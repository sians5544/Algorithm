
function solution(sequence, k) {
    let answer = [0, Number.MAX_SAFE_INTEGER];
    let sum = 0;
    let left = 0;
    let min = Number.MAX_SAFE_INTEGER;
  
    for (let right = 0; right < sequence.length; right++) {
      sum += sequence[right];
      while (sum > k) {
        sum -= sequence[left++];
      }
      if (sum === k) {
        if (answer[1] - answer[0] > right - left || min > left) {
          answer = [left, right];
          min = left;
        }
        sum -= sequence[left++];
      }
    }
    return answer;
  }

console.log(solution([1,1,1,2,3,4,5],5));
console.log(solution([2,2,2,2,2],6));