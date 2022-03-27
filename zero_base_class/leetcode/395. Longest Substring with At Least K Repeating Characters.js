/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 부분 문자열에서 모든 문자들이 k만큼 반복되거나 커야합니다.

// 해당 부분 문자열 중에서 가장 긴 값을 리턴하세요.

// 반복되는 횟수가 더 긴걸 리턴하기
function solution(s, k) {
  let answer = 0;

  const isRepeat = (length) => {
    let left = 0;

    for (let i = length; i < s.length - length; i++) {
      let hash = new Map();

      [...s.slice(i, s.length - length)].forEach((element) => {
        hash.set(element, (hash.get(element) || 0) + 1);
      });

      let set = new Set([...s.slice(i, s.length - length)]);
      console.log(set);
      console.log(hash);

      let sumValue = [...hash].filter((item) => item[1] >= k);

      for (let [key, value] of hash) {
        let sum = 0;
        if (value >= k) {
          sum += value;
          answer = Math.max(answer, sum);
        }
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    isRepeat(i);
  }

  return answer;
}

// if (sumValue.length === hash.length) {
//   for (let value of sumValue) {
//     if (value >= k) {
//       sum += sumValue;
//       answer = Math.max(answer, sum);
//     }
//   }
// }

console.log(solution('aaabb', 3));
// console.log(solution('ababbc', 2));
// console.log(solution('bchhbbdefghiaaacb', 3));
