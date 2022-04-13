function solution(begin, target, words) {
  let answer = Number.MAX_SAFE_INTEGER;
  let strlen = begin.length;
  let check = Array(words.length).fill(0);
  let flag = false;
  let queue = [];

  const BFS = () => {
    let cnt = 1;

    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let str = queue.shift();

        if (str === target) {
          flag = true;
          return cnt;
        }

        for (let i = 0; i < words.length; i++) {
          if (
            words[i].split('').filter((w, idx) => w === str[idx]).length === strlen - 1 &&
            check[i] === 0
          ) {
            queue.push(words[i]);
            check[i] = 1;
          }
        }
      }
      cnt++;
    }
    return cnt;
  };

  for (let i = 0; i < words.length; i++) {
    if (words[i].split('').filter((w, idx) => w === begin[idx]).length === strlen - 1) {
      queue.push(words[i]);
      check[i] = 1;
      answer = Math.min(answer, BFS());
      queue = [];
    }
  }

  return !flag ? 0 : answer;
}
