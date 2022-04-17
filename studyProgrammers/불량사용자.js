const CheckIdx = (str1, str2) => {
  let flag = false;
  let cnt = 0;
  let StarCnt = str1.replace(/[*]/g, '').length;
  let tmp = [];
  let setArr = new Set();

  console.log(StarCnt);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== '*' && str1[i] === str2[i]) {
      cnt++;
    }
  }
  cnt === StarCnt ? (flag = true) : (flag = false);
  return flag;
};

function solution(user_id, banned_id) {
  let answer = 0;
  let matchingMap = new Map();
  let check = Array(banned_id.length).fill(0);
  let tmp = [];
  let setArr = new Set();
  // banned_id length 와 * 의 인덱스 위치도 같아야함

  for (let i = 0; i < banned_id.length; i++) {
    for (let j = 0; j < user_id.length; j++) {
      if (banned_id[i].length === user_id[j].length && CheckIdx(banned_id[i], user_id[j])) {
        matchingMap.set(user_id[j], i);
      }
    }
  }

  let correctId = [...matchingMap.keys()];

  console.log(correctId);
  const DFS = (L, s) => {
    if (L === banned_id.length) {
      let sliceStr = tmp.slice();
      sliceStr.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
      console.log(sliceStr);
      setArr.add(sliceStr.slice().join(''));
    } else {
      for (let i = s; i < correctId.length; i++) {
        if (check[matchingMap.get(correctId[i])] === 0) {
          check[matchingMap.get(correctId[i])] = 1;
          tmp.push(correctId[i]);
          DFS(L + 1, i + 1);
          tmp.pop();
          check[matchingMap.get(correctId[i])] = 0;
        }
      }
    }
  };

  DFS(0, 0);
  answer = setArr.size;
  return answer;
}
