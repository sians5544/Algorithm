function solution(array, commands) {
  var answer = [];

  for (let command of commands) {
    let i = command[0];
    let j = command[1];
    let k = command[2];

    let temp = array.slice(i - 1, j);
    temp.sort((a, b) => a - b);
    answer.push(temp[k - 1]);
  }
  return answer;
}
