function solution1(words) {
  let answer = 0;
  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < words.length; i++) {
    let count = 1;
    for (let j = 0; j < words.length; j++) {
      if (i === j || words[i].length + 1 !== words[j].length) continue;
      for (let k = 0; k < words[j].length; k++) {
        let isCorrect = [...words[j]].filter((_, index) => k !== index).join('');
        if (isCorrect === words[i]) {
          count++;
          i = j;
          break;
        }
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

function solution(words) {
  let answer = Number.MIN_SAFE_INTEGER;
  let map = {};

  let dict = new Set(words);
  let memo = {};

  const buildGraph = (a) => {
    for (let k = 0; k < a.length; k++) {
      let isCorrect = [...a].filter((_, index) => k !== index).join('');

      if (dict.has(isCorrect)) {
        if (!map[a]) map[a] = [];
        map[a].push(isCorrect);
      }
    }
  };

  const findMaxLen = (word) => {
    if (memo[word]) return memo[word];

    if (!map[word] || !map[word].length) return 1;

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < map[word].length; i++) {
      max = Math.max(max, findMaxLen(map[word][i]));
    }

    max++;
    memo[word] = max;
    return max;
  };
  for (let word of words) {
    buildGraph(word);
  }

  for (let i = 0; i < words.length; i++) {
    answer = Math.max(answer, findMaxLen(words[i]));
  }

  return answer;
}
console.log(solution(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])); //4

// console.log(solution(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])); //5
