/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  let hash = new Map();
  let sum = 0;
  let val = 0;

  let symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let value = [1, 5, 10, 50, 100, 500, 1000];

  for (let i = 0; i < symbol.length; i++) {
    hash.set(symbol[i], value[i]);
  }

  for (let i = s.length - 1; i >= 0; i--) { // 문자열의 맨 뒤부터 탐색
    let target = hash.get(s[i]);

    if (val <= target) {  // 현재 문자가이전 문자보다 크거나 같으면 sum+
      val = target; // 다음 문자와 비교하기 위해서 백업 
      sum += target;
    } else {
      sum -= target; // 이전 문자가 더 크다면 현재 문자를 빼준다 
    }

  }

  return sum
};