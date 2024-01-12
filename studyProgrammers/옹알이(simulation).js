function solution(babbling) {
    let answer = 0;
    let checkObj = new Set(["aya", "ye", "woo", "ma"]);
    let before = "";
  
    let lenObj = { a: 3, y: 2, w: 3, m: 2 };
  
    for (let bab of babbling) {
      let flag = true;
      before = "";
  
      for (let i = 0; i < bab.length; ) {
        let idx = lenObj[bab[i]];
        let str = bab.slice(i, i + idx);
        if (lenObj[bab[i]] && checkObj.has(str) && before !== str) {
          before = str;
          i = i + idx;
        } else {
          flag = false;
          break;
        }
      }
  
      if (flag) answer++;
    }
  
    return answer;
  }