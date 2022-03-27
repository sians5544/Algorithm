function solution(chars) {
  let answer = [];
  let count = 1;
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i - 1] === chars[i]) {
      count++;
    } else {
      if (count > 9) {
        let counter = (count + '').split('');
        answer.push(chars[i - 1]);
        [...counter].map((item) => answer.push(item));
      } else if (count > 1) {
        answer.push(chars[i - 1]);
        answer.push(count + '');
      } else if (count < 2) {
        answer.push(chars[i - 1] + '');
      }
      count = 1;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    chars[i] = answer[i];
  }

  chars = chars.slice(0, answer.length);

  return chars.length;
}

console.log(solution(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
