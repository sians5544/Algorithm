function solution(users, emoticons) {
  let answer = [];
  const discounts = [0.1, 0.2, 0.3, 0.4];
  let tmp = [];

  const checkSum = (disArr) => {
    let result = [0, 0];
    for (let user of users) {
      let sum = 0;
      for (let i = 0; i < emoticons.length; i++) {
        if (user[0] <= disArr[i] * 100)
          sum += emoticons[i] - emoticons[i] * disArr[i];
      }
      if (sum >= user[1]) {
        result[0] += 1;
      } else {
        result[1] += sum;
      }
    }

    return result;
  };

  const DFS = (v) => {
    if (v === emoticons.length) {
      answer.push(checkSum(tmp.slice()));
    } else {
      for (let i = 0; i < discounts.length; i++) {
        tmp.push(discounts[i]);
        DFS(v + 1, i + 1);
        tmp.pop();
      }
    }
  };

  DFS(0, 0);

  return answer.sort((a, b) =>
    a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0
  )[0];
}
