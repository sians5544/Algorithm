function solution(keymap, targets) {
  let answer = [];
  let keyObj = {};

  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (keyObj[key[i]]) {
        keyObj[key[i]] = Math.min(i + 1, keyObj[key[i]]);
      } else {
        keyObj[key[i]] = i + 1;
      }
    }
  }
    
  for (let target of targets) {
    let cnt = 0;
    let flag = true;

    for (let t of target) {
      if (keyObj[t]) {
        cnt += keyObj[t];
      } else {
        flag = false;
      }
    }

    flag ? answer.push(cnt) : answer.push(-1);
  }

  return answer;
}

