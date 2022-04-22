function solution(s) {
  let answer = [];
  const regExp = new RegExp('[^},{]', 'g');
  let set = new Set();
  let tuple = s
    .slice(2, -2)
    .split('},{')
    .map((t) => t.split(',').map(Number));

  tuple.sort((a, b) => a.length - b.length);

  for (let t of tuple) {
    let notContain = t.filter((num) => !set.has(num));
    set.add(...notContain);
    answer.push(...notContain);
  }
  return answer;
}
