function solution1(cards) {
  let answer = 0;

  let maxColor = {};
  let check = Array(cards.length).fill(0);

  const isMinValue = () => {
    for (let i = 0; i < cards.length; i++) {
      let minNum = Number.MAX_SAFE_INTEGER;
      let color = 0;
      cards[i].forEach((card, idx) => {
        if (card < minNum) {
          minNum = card;
          color = idx;
        }
      });

      maxColor[i] = [color, minNum];
    }
  };

  const checkChange = (key1, key2, arr1, arr2) => {
    let minNum = Number.MAX_SAFE_INTEGER;
    let color = 0;
    let list = [];
    arr1.forEach((card, idx) => {
      if (card <= minNum) {
        minNum = card;
        color = idx;
      }
    });

    if (maxColor[key1][0] !== color) return false;

    minNum = Number.MAX_SAFE_INTEGER;
    color = 0;

    arr2.forEach((card, idx) => {
      console.log(arr2);
      if (card <= minNum) {
        minNum = card;
        color = idx;
      }
    });

    if (maxColor[key2][0] !== color) return false;

    return true;
  };
  // 0번하고, 맨 마지막 번호만 오른쪽, 왼쪽  검사하고 나머지는 양쪽 다 체크해야됨
  const changeNum = (keyN1, keyN2) => {
    if (maxColor[keyN1][0] !== maxColor[keyN2][0]) {
      // 서로의 색상값이 , 사장 작은 값보다 큰지 확인
      if (
        cards[keyN2][maxColor[keyN1][0]] > maxColor[keyN1][1] &&
        cards[keyN1][maxColor[keyN2][0]] > maxColor[keyN2][1]
      ) {
        // 이걸 해주면 작은 값이 바뀌는지 확인해봐야함
        let arr1 = [...cards[keyN1]];
        let arr2 = [...cards[keyN2]];
        arr1[maxColor[keyN2][0]]++;
        arr1[maxColor[keyN1][0]]--;
        arr2[maxColor[keyN1][0]]--;
        arr2[maxColor[keyN2][0]]++;

        if (checkChange(keyN1, keyN2, arr1, arr2)) {
          check[keyN1] = 1;
          check[keyN2] = 1;
          maxColor[keyN1][maxColor[keyN2][0]]++;
          maxColor[keyN1][maxColor[keyN1][0]]--;
          maxColor[keyN2][maxColor[keyN1][0]]--;
          maxColor[keyN2][maxColor[keyN2][0]]++;
          maxColor[keyN1][1]++;
          maxColor[keyN2][1]++;
        }
      }
    }
  };

  let num = 0;

  isMinValue();
  while (num < cards.length) {
    if (num === 0) {
      changeNum(num, num + 1);
      break;
    } else if (num === cards.length - 1) {
      if (check[num - 1] === 0 && check[num] === 0) {
        changeNum(num - 1, num);
        break;
      }
    } else {
      if (check[num - 1] === 0 && check[num] === 0) {
        changeNum(num - 1, num);
        break;
      } else if (check[num] === 0 && check[num + 1] === 0) {
        changeNum(num, num + 1);
        break;
      }
    }
    num++;
  }

  for (let key in maxColor) {
    answer += maxColor[key][1];
  }

  return answer;
}

function solution(cards) {
  let answer = 0;
  let check = Array(cards.length).fill(0);

  const isUniqueNum = (arr, index) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[index]) {
        cnt++;
      }
    }

    return cnt === 1;
  };

  const isGetMinNumindex = (arr) => {
    let minNum = Number.MAX_SAFE_INTEGER;
    let color = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minNum) {
        minNum = arr[i];
        color = i;
      }
    }

    return color;
  };

  for (let i = 0; i < cards.length; i++) {
    if (check[i] === 1) continue;
    if (!isUniqueNum(cards[i], isGetMinNumindex(cards[i]))) continue;

    for (let j = 0; j < cards.length; j++) {
      if (i === j) continue;
      if (check[j] === 1) continue;
      if (!isUniqueNum(cards[j], isGetMinNumindex(cards[j]))) continue;

      let a = isGetMinNumindex(cards[i]);
      let b = isGetMinNumindex(cards[j]);

      if (a !== b && cards[i][b] > 0 && cards[j][a] > 0) {
        if (cards[i][b] - 1 >= cards[j][a] + 1 && cards[j][a] - 1 >= cards[j][b] + 1) {
          cards[i][b]--;
          cards[j][a]--;
          cards[i][a]++;
          cards[i][b]++;
          check[i] = check[j] = 1;
          break;
        }
      }
    }
  }

  for (let i = 0; i < cards.length; i++) {
    answer += cards[i][isGetMinNumindex(cards[i])];
  }

  // 해당 인덱스에서 유니크한지 판단

  // 해당 인덱스에서 가장 큰 값인지 판단

  return answer;
}

console.log(
  solution([
    [10, 5, 15],
    [5, 15, 10],
    [10, 11, 9],
  ])
); //21
console.log(
  solution([
    [10, 5, 15],
    [8, 9, 13],
    [10, 10, 10],
  ])
); //23
console.log(
  solution([
    [8, 11, 11],
    [6, 15, 9],
    [14, 2, 14],
    [8, 20, 2],
  ])
); //22
console.log(
  solution([
    [8, 11, 11],
    [10, 7, 13],
    [15, 10, 5],
    [7, 17, 6],
  ])
); //28
console.log(
  solution([
    [0, 0, 30],
    [30, 0, 0],
  ])
); //0
