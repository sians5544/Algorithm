var isPalindrome = function (x) {
  let answer = true;

  let palidStr = String(x).split('').reverse().join('');

  x === Number(palidStr) ? (answer = true) : (answer = false);

  return answer;
};
