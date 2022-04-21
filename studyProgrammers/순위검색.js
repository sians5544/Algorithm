function solution(info, query) {
  let answer = [];
  let hash = {};

  const combination = (start, infoStr, change, score) => {
    let value = change.join('');
    if (!hash[value]) {
      hash[value] = [score];
    } else {
      hash[value].push(score);
    }

    for (let k = start; k < infoStr.length; k++) {
      let comstr = [...change];
      comstr[k] = '-';
      combination(k + 1, infoStr, comstr, score);
    }
  };

  for (let i = 0; i < info.length; i++) {
    info[i] = info[i].split(' ');
    let score = info[i].pop();
    combination(0, info[i], info[i], +score);
  }

  for (let key in hash) {
    hash[key].sort((o1, o2) => o1 - o2);
  }

  const scliceinfo = (cutline, str) => {
    let valueArr = hash[str];

    if (valueArr) {
      let left = 0;
      let right = valueArr.length;

      while (left < right) {
        let mid = parseInt((left + right) / 2);

        if (valueArr[mid] >= cutline) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      return valueArr.length - left;
    } else {
      return 0;
    }
  };

  for (que of query) {
    let question = que.replace(/ and /g, ' ').split(' ');
    let cutline = +question.pop();

    answer.push(scliceinfo(cutline, question.join('')));
  }

  return answer;
}

// 이문제는 극악의 효율성으로 고생을 했다
// Map() 쓰는거 보다 그냥 object 를 써서 하는게 score 추가하는 부분에서 시간을 많이 단축 할 수 있었다 앞으로 기억하자!!
