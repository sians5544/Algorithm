function solution(s) {
  let answer = [];

  for (let sp of s.split(' ')) {
    let arr = '';
    for (let i = 0; i < sp.length; i++) {
      if (i % 2 === 0) {
        arr += sp[i].toUpperCase();
      } else {
        arr += sp[i].toLowerCase();
      }
    }
    answer.push(arr);
  }

  return answer.join(' ');
}

console.log(solution('try hello world'));
