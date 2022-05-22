function solution(water, time) {
  let answer = [];

  let len = water.length;

  let leftArr = Array(len).fill(len);
  let rightArr = Array(len).fill(len);

  for (let left = time; left <= len - time; left++) {
    if (water[left - 1] >= water[left]) {
      leftArr[left] = leftArr[left - 1] + 1;
    } else {
      leftArr[left] = 0;
    }
  }

  for (let right = len - time; right > time; right--) {
    if (water[right] <= water[right + 1]) {
      rightArr[right] = rightArr[right + 1] + 1;
    } else {
      rightArr[right] = 0;
    }
  }

  for (let i = time; i < len - time; i++) {
    if (leftArr[i] >= time && rightArr[i] >= time) {
      answer.push(i);
    }
  }

  return answer;
}

console.log(solution([5, 3, 3, 3, 5, 6, 2], 2)); // [2,3]
console.log(solution([1, 1, 1, 1, 1], 0)); //[0,1,2,3,4]
console.log(solution([1, 2, 3, 4, 5, 6], 2)); // []
console.log(solution([1, 2, 3, 1, 2, 3], 1)); // [3]
