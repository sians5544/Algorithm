function solution(queue1, queue2) {
  let answer = 0;
  let len = queue1.length * 2;
  let queue1Idx = 0;
  let queue2Idx = 0;
  let sum1 = queue1.reduce((acc, cur) => acc + cur);
  let sum2 = queue2.reduce((acc, cur) => acc + cur);

  while (sum1 !== sum2) {
    if (sum1 < sum2) {
      sum1 += queue2[queue2Idx];
      sum2 -= queue2[queue2Idx];
      queue1.push(queue2[queue2Idx]);
      queue2Idx++;
    } else {
      sum1 -= queue1[queue1Idx];
      sum2 += queue1[queue1Idx];
      queue1.push(queue2[queue1Idx]);
      queue1Idx++;
    }

    if (queue1Idx > len || queue2Idx > len) {
      return -1;
    }
    answer++;
  }
  return answer;
}
