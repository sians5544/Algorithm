function solution(k, dungeons) {
  let answer = 0;
  let tmp = [];
  let check = Array(dungeons.length).fill(0);

  const checkCount = (arrs) => {
    let sum = k;
    let count = 0;

    for (let arr of arrs) {
      if (sum >= arr[0]) {
        count += 1;
        sum -= arr[1];
      }
    }

    return count;
  };

  const DFS = (v) => {
    if (v === dungeons.a) {
      answer = Math.max(answer, checkCount(tmp));
    } else {
      for (let i = 0; i < dungeons.length; i++) {
        if (check[i] == 0) {
          check[i] = 1;
          tmp.push(dungeons[i]);
          DFS(v + 1);
          tmp.pop();
          check[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
}
