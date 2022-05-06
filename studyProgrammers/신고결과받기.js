function solution(id_list, report, k) {
  let len = id_list.length;
  let answer = Array(len).fill(0);
  let hash = {};
  let checkUsers = Array.from(Array(len), () => Array(len).fill(0));
  let countArrs = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    hash[id_list[i]] = i;
  }

  for (let j = 0; j < report.length; j++) {
    let [t, f] = report[j].split(' ');
    checkUsers[hash[t]][hash[f]]++;
  }

  for (let k = 0; k < len; k++) {
    for (let l = 0; l < len; l++) {
      if (checkUsers[l][k] === 1) {
        countArrs[k]++;
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (checkUsers[i][j] === 1 && countArrs[j] >= k) {
        answer[i]++;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
