function solution(nums) {
  // 각 원소 중 자기 보다 작은 값을 카운트해서 배열에 기록하기
  let len = nums.length;

  let countArray = Array(len).fill(0);

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j] && i !== j) countArray[i]++;
    }
  }

  for (let i = len - 1; i >= 1; i--) {
    let count = 0;
    for (let j = i - 1; j >= 0; j--)
      if (nums[i] > nums[j] && i !== j) {
        count++;
      }
    countArray[i] += count;
  }

  return countArray;
}

console.log(solution([6, 5, 4, 8]));

///  더 효율적인 방법이 있을거 같아서 찾아본 결과 정렬만 잘해도 코드가 확 효율적이게 변한다는 것을 알았다

function solution2(nums) {
  let answer = [];
  let sortedArray = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    answer.push(sortedArray.indexOf(nums[i])); // 오름차순으로 정렬시 자신의 인덱스 값이 곧 자기보다 작은 원소들의 개수이다 !!
  }

  return answer;
}

console.log(solution2([6, 5, 4, 8]));
