//https://leetcode.com/problems/count-of-smaller-numbers-after-self/
// test case 는 통과하는데 Time Limit Exceeded 발생
// 다시 시간복잡도 확인해서 풀어보기

// 중복된 배열  (첫번째 뽑기, 나중에 뽑기)
// 이분탐색으로 인덱스 값 가져오는 걸 바꿔보자
function solution(nums) {
  let answer = [];
  let countArray = [...nums];
  countArray.sort((a, b) => a - b);
  let len = nums.length;

  for (let i = 0; i < len; ++i) {
    let seq = countArray.indexOf(nums[i]); // 이 부분이 indexof 할 때 처음부터 끝까지 배열 내에서 인덱스 값을 찾아주므로 맨 끝에 있는 경우 시간이 엄청 오래 걸린다
    // 이러한 점을 확인해서 인덱스 값 구하는 방식을 이분 탐색으로 바꿔보자!!
    answer.push(seq);
    countArray.splice(seq, 1); // splice 로 삭제 확인한 인덱스를 삭제 해줘야함
    // nums[i] 가 6이라고 가정하면, 오른쪽에 올수있는 작은 숫자의 개수들을 줄여줘야함 6보다 작은 남은 원소가 오른쪽에 와있는 원소다
  }

  return answer;
}
