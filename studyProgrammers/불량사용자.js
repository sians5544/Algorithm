const CheckIdx = (str1, str2) => {
  let flag = false;
  let cnt = 0;
  let StarCnt = str1.replace(/[*]/g, '').length;
  let tmp = [];
  let setArr = new Set();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== '*' && str1[i] === str2[i]) {
      cnt++;
    }
  }
  cnt === StarCnt ? (flag = true) : (flag = false);
  return flag;
};

const matchId = (ids, banId) => {
  for (let j = 0; j < ids.length; j++) {
    if (CheckIdx) return false;
  }
  return true;
};
function solution(user_id, banned_id) {
  let answer = 0;
  let matchingMap = new Map();
  let len = banned_id.length;
  let tmp = [];
  let setArr = new Set();
  let totalLen = 0;
  let correctId = new Set();
  // banned_id length 와 * 의 인덱스 위치도 같아야함

  for (let i = 0; i < banned_id.length; i++) {
    for (let j = 0; j < user_id.length; j++) {
      if (banned_id[i].length === user_id[j].length && CheckIdx(banned_id[i], user_id[j])) {
        correctId.add(user_id[j]);
      }
    }
  }

  let correct = [...correctId];
  const DFS = (L, s) => {
    if (L === len) {
      let sliceStr = tmp.slice();
      if (sliceStr.join('').length === banned_id.join('').length) {
        setArr.add(
          sliceStr
            .filter((str) => {
              for (let i = 0; i < banned_id.length; i++) {
                if (CheckIdx(banned_id[i], str)) return true;
              }
              return false;
            })
            .join('')
        );
      }
    } else {
      for (let i = s; i < correct.length; i++) {
        tmp.push(correct[i]);
        DFS(L + 1, i + 1);
        tmp.pop();
      }
    }
  };

  banned_id.sort((a, b) => a.length - b.length);
  DFS(0, 0);
  answer = setArr.size;
  return answer;
}
console.log(
  solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', '*rodo', '******', '******'])
);
console.log(solution(['fradi', 'frady'], ['frady', 'frad*']));
