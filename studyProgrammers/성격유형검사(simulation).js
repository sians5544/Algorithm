function solution(survey, choices) {
  let answer = "";
  let graph = Array.from({ length: 4 }, () => Array(2).fill(0));
  let score = { 1: 3, 2: 2, 3: 1, 5: 1, 6: 2, 7: 3 };
  let position = {
    R: [0, 0],
    T: [0, 1],
    C: [1, 0],
    F: [1, 1],
    J: [2, 0],
    M: [2, 1],
    A: [3, 0],
    N: [3, 1],
  };

  let strs = ["RT", "CF", "JM", "AN"];

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] === 4) continue;

    let idx = choices[i] < 4 ? 0 : 1;
    let [x, y] = position[survey[i][idx]];

    graph[x][y] += score[choices[i]];
  }

  for (let j = 0; j < graph.length; j++) {
    if (graph[j][0] < graph[j][1]) {
      answer += strs[j][1];
    } else {
      answer += strs[j][0];
    }
  }

  return answer;
}
