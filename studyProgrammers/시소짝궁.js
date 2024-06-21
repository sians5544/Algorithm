function solution(weights) {
  let answer = 0;
  let check = {};
  const cal = [1, 3 / 2, 2, 4 / 3];

  weights
    .sort((a, b) => b - a)
    .forEach((element) => {
      cal.forEach((c) => {
        if (check[c * element]) answer += check[c * element];
      });

      if (check[element]) check[element]++;
      else check[element] = 1;
    });

  return answer;
}
