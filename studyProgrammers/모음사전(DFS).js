function solution(word) {
  let answer = 0;
  let set = [];
  let alphabets = ["A", "E", "I", "O", "U"];
  let tmp = [];

  const DFS = (v, len) => {
    if (v === len) {
      if (tmp.length > 0) set.push(tmp.join(""));
    } else {
      for (let i = 0; i < alphabets.length; i++) {
        tmp.push(alphabets[i]);
        DFS(v + 1, len);
        tmp.pop();
      }
    }
  };

  for (let i = 1; i < 6; i++) {
    DFS(0, i);
  }

  set.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  for (let j = 0; j < set.length; j++) {
    if (set[j] === word) {
      answer = j + 1;
      break;
    }
  }
  return answer;
}
