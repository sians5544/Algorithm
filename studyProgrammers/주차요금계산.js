function solution(fees, records) {
  let answer = [];
  let hash = {};
  let sumHash = {};
  let check = [];
  const LAST_OUT = 23 * 60 + 59;

  for (let record of records) {
    let [time, carNum, flag] = record.split(' ');

    let minute = time.split(':').map(Number);

    if (flag === 'IN') {
      if (!hash[carNum]) {
        hash[carNum] = [];
      }
      hash[carNum].push(minute[0] * 60 + minute[1]);
    } else {
      let feeTime = minute[0] * 60 + minute[1] - hash[carNum].pop();
      sumHash[carNum] ? (sumHash[carNum] += feeTime) : (sumHash[carNum] = feeTime);
      if (hash[carNum].length <= 0) delete hash[carNum];
    }
  }

  if (hash) {
    for (let key in hash) {
      let feeTime = LAST_OUT - hash[key].pop();
      sumHash[key] ? (sumHash[key] += feeTime) : (sumHash[key] = feeTime);
    }
  }

  for (let key in sumHash) {
    let total = fees[1];
    if (sumHash[key] > fees[0]) {
      total += Math.ceil((sumHash[key] - fees[0]) / fees[2]) * fees[3];
    }
    check.push([key, total]);
  }

  check.sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));
  answer = check.map((item) => item[1]);
  return answer;
}

// console.log(
//   solution(
//     [180, 5000, 10, 600],
//     [
//       '05:34 5961 IN',
//       '06:00 0000 IN',
//       '06:34 0000 OUT',
//       '07:59 5961 OUT',
//       '07:59 0148 IN',
//       '18:59 0000 IN',
//       '19:09 0148 OUT',
//       '22:59 5961 IN',
//       '23:00 5961 OUT',
//     ]
//   )
// );

console.log(solution([1, 461, 1, 10], ['00:00 1234 IN']));
