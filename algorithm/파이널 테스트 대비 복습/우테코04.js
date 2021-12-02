// 처음과 끝이 이어져 있는 문자열
// 문자열 내에 같은 글자가 연속해있는 구간의 길이를 각가 배열에 담아서
// 오름 차순으로 정렬하여 return

function solution(s) {
  let left = 0;
  let answer = [];
  let arr = s.split('');

  for (let right = 1; right < s.length; right++) {
    if (arr[left] !== arr[right]) {
      answer.push(right - left);
      left = right;
    }

    if (right === s.length - 1 && arr[0] === arr[right]) {
      answer[0] += right - left + 1;
    }
  }

  return answer.sort();
}

console.log(solution('aaabbaaa'));
console.log(solution('wowwow'));
