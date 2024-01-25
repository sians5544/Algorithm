function solution(X, Y) {
    let answer = "";
    let xObj = {};
    let yObj = {};
    let xSet = new Set(X.length > Y.length ? Y : X);
    let flag = false;
  
    for (let i = 0; i < Math.max(X.length, Y.length); i++) {
      if (X[i]) {
        xObj[X[i]] ? (xObj[X[i]] += 1) : (xObj[X[i]] = 1);
      }
  
      if (Y[i]) {
        yObj[Y[i]] ? (yObj[Y[i]] += 1) : (yObj[Y[i]] = 1);
      }
    }
  
    [...xSet]
      .sort((a, b) => b - a)
      .forEach((num) => {
        if (xObj[num] && yObj[num]) {
          flag = true;
          answer += num.repeat(Math.min(xObj[num], yObj[num]));
        }
      });
  
    if (!flag) return "-1";
  
    return !Number(answer) ? "0" : answer;
  }