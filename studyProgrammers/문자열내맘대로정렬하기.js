function solution(strings, n) {
  let answer = [];
  let check_arr = [];
  for (let i = 0; i < strings.length; i++) {
    check_arr.push([`${strings[i][n]}${strings[i]}`, i]);
  }

  check_arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  check_arr.forEach((check) => {
    answer.push(strings[check[1]]);
  });

  return answer;
}
