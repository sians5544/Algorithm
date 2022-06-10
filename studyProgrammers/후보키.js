function solution(relation) {
  let answer = 0;
  let tmp = [];
  let hist = [];
  let set = new Set();
  let len = relation.length;
  let column = relation[0].length;
  let check = true;

  const countmin = (L, s, comStr, n) => {
    if (L === n) {
      let arrs = hist.slice().join('');
      if (set.has(arrs)) {
        console.log(arrs);
        check = false;
        return;
      }
    } else {
      for (let j = s; j < comStr.length; j++) {
        hist.push(comStr[j]);
        countmin(L + 1, j + 1, comStr, n);
        hist.pop();
      }
    }
  };

  const countStudent = (tmp) => {
    check = true;
    let cnt = 0;
    let uniqueSet = new Set();

    for (let i = 0; i < relation.length; i++) {
      let strArr = tmp.map((item) => relation[i][item]).join('');

      if (set.has(strArr) && uniqueSet.has(strArr)) {
        return false;
      } else {
        uniqueSet.add(strArr);
      }
    }

    if (uniqueSet.size === len) {
      for (let j = 0; j < len; j++) {
        let strArr = tmp.map((item) => relation[j][item]);
        for (let k = 1; k <= strArr.length; k++) {
          countmin(0, 0, strArr, k);
          if (!check) return false;
        }
        set.add(strArr.join(''));
      }
    } else return false;

    return true;
  };

  const DFS = (L, s, n) => {
    if (L === n) {
      if (countStudent(tmp.slice())) answer += 1;
    } else {
      for (let j = s; j < column; j++) {
        tmp.push(j);
        DFS(L + 1, j + 1, n);
        tmp.pop();
      }
    }
  };

  for (let k = 1; k < column; k++) {
    DFS(0, 0, k);
  }

  return answer;
}
