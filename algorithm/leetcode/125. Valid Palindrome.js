function isPalindrome(str) {
  let answer = true;

  let palind = str.split('').reverse().join('').toLowerCase();
  let result = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  palind = palind.replace(/[^A-Za-z0-9]/g, '');

  if (result !== palind) answer = false;

  return answer;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
