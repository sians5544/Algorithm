const isPalindrome = (s) => {
  const temp = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return temp === [...temp].reverse().join('');
};

function solution(s) {
  let answer = [];

  console.log(s.length);
  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(s[i])) answer.push(0);
    else {
      let check = false;
      [...s[i]].forEach((element, idx) => {
        let isPalind = [...s[i]].filter((value, index) => idx !== index).join('');

        if (isPalindrome(isPalind)) check = true;
      });
      check ? answer.push(1) : answer.push(2);
    }
  }

  return answer;
}

console.log(solution(['abba', 'summuus', 'xabba', 'xabbay', 'comcom', 'comwwmoc', 'comwwtmoc']));
