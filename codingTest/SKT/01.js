function solution(p) {
  let answer = Array(p.length).fill(0);
  let j = 0;

  const findMinIndex = (num) => {
    let index = 0;
    let value = Number.MAX_SAFE_INTEGER;

    for (let i = num; i < p.length; i++) {
      if (p[i] < value) {
        value = p[i];
        index = i;
      }
    }

    return index;
  };

  for (let i = 0; i < p.length; i++) {
    let j = findMinIndex(i);
    if (p[i] !== p[j]) {
      let copy = p[i];
      p[i] = p[j];
      p[j] = copy;
      answer[i]++;
      answer[j]++;
    }
  }
  return answer;
}

console.log(solution([2, 5, 3, 1, 4])); //[1, 1, 0, 3, 1]
console.log(solution([2, 3, 4, 5, 6, 1])); //[1, 1, 1, 1, 1, 5]
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[0, 0, 0, 0, 0, 0, 0, 0, 0]
