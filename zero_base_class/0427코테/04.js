function solution(names, times) {
  let answer = [];
  let hash = {};
  for (let i = 0; i < names.length; i++) {
    if (!hash[names[i]]) {
      hash[names[i]] = [+times[i].replace(':', '')];
    } else {
      hash[names[i]].push(+times[i].replace(':', ''));
    }
  }

  for (let key in hash) {
    let list = [...hash[key]];

    for (let i = 0; i < list.length; i++) {
      let cnt = 1;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] - list[i] <= 100) cnt++;
        if (cnt > 2) {
          answer.push(key);
          break;
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(
    ['yaniel', 'yaniel', 'yaniel', 'luis', 'luis', 'luis', 'luis'],
    ['10:21', '10:40', '11:21', '09:00', '09:12', '10:09', '10:12']
  )
);
