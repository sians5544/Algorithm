//https://leetcode.com/problems/count-of-smaller-numbers-after-self/
// test case 는 통과하는데 Time Limit Exceeded 발생

function solution(nums) {
  let answer = [];
  let countArray = [...nums];
  countArray.sort((a, b) => a - b);
  let len = nums.length;

  for (let i = 0; i < len; ++i) {
    let seq = countArray.indexOf(nums[i]);
    answer.push(seq);
    countArray.splice(seq, 1); // splice 로 삭제 확인한 인덱스를 삭제 해줘야함
    // nums[i] 가 6이라고 가정하면, 오른쪽에 올수있는 작은 숫자의 개수들을 줄여줘야함 6보다 작은 남은 원소가 오른쪽에 와있는 원소다
  }

  return answer;
}
