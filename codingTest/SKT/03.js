function solution(n, plans, clients) {
  let answer = Array(clients.length).fill(0);

  let palnsArr = [];
  let clientArr = [];
  for (let plan of plans) {
    let arr = plan.split(' ').map(Number);
    let data = arr.shift();
    if (palnsArr.length) {
      let set = new Set([...palnsArr[palnsArr.length - 1][1], ...arr]);
      palnsArr.push([data, [...set]]);
    } else {
      palnsArr.push([data, [...arr]]);
    }
  }

  for (let client of clients) {
    let arr = client.split(' ').map(Number);
    clientArr.push([arr.shift(), [...arr]]);
  }

  palnsArr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < palnsArr.length; j++) {
      if (
        clientArr[i][0] <= palnsArr[j][0] &&
        palnsArr[j][1].filter((value) => clientArr[i][1].includes(value)).length ===
          clientArr[i][1].length
      ) {
        answer[i] = j + 1;
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(5, ['100 1 3', '500 4', '2000 5'], ['300 3 5', '1500 1', '100 1 3', '50 1 2'])
); // [3, 3, 1, 0]
console.log(solution(4, ['38 2 3', '394 1 4'], ['10 2 3', '300 1 2 3 4', '500 1'])); //[1, 2, 0]
