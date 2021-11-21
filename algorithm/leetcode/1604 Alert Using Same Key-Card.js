function solution(keyName, keyTime) {
  let answer = [];
  let len = keyName.length;
  let hash = new Map();
  let check;

  for (let i = 0; i < len; i++) {
    check = hash.get(keyName[i]);
    if (!check) {
      hash.set(keyName[i], [keyTime[i].split(':')[0] * 60 + keyTime[i].split(':')[1] * 1]);
    } else {
      check.push(keyTime[i].split(':')[0] * 60 + keyTime[i].split(':')[1] * 1);
    }
  }

  for (let [key, value] of hash) {
    if (value.length >= 3) {
      console.log(key);
      value.sort((a, b) => a - b);
      for (let i = 2; i < value.length; ++i) {
        if (value[i] - value[i - 2] <= 60) {
          answer.push(key);
          break;
        }
      }
    }
  }

  return answer.sort();
}

let keyName = ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'];
let keyTime = ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00'];

console.log(solution(keyName, keyTime));
