function solution(tickets) {
  let answer = [];
  let queue = [];
  let check = [];
  let head = 0;
  tickets.sort((a, b) => (a[1] < b[1] ? -1 : a[1] < b[1] ? 1 : 0));

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === 'ICN') {
      break;
    }
  }
  check.push([]);
  queue.push(['ICN', []]);

  while (queue.length > head) {
    let len = queue.length - head;

    for (let i = 0; i < len; i++) {
      let current = queue[head];
      let checkVisited = check[head];
      head += 1;

      if (current[1].length === tickets.length) {
        return (answer = [...current[1], current[0]]);
      }

      tickets.forEach((t, idx) => {
        if (checkVisited.includes(idx)) return;
        if (t[0] === current[0]) {
          queue.push([t[1], [...current[1], t[0]]]);
          check.push([...checkVisited, idx]);
        }
      });
    }
  }

  return answer;
}

// console.log(
//   solution([
//     ['ICN', 'JFK'],
//     ['HND', 'IAD'],
//     ['JFK', 'HND'],
//   ])
// );
// console.log(
//   solution([
//     ['ICN', 'SFO'],
//     ['ICN', 'ATL'],
//     ['SFO', 'ATL'],
//     ['ATL', 'ICN'],
//     ['ATL', 'SFO'],
//   ])
// );

console.log(
  solution([
    ['ICN', 'AOO'],
    ['AOO', 'BOO'],
    ['BOO', 'COO'],
    ['COO', 'DOO'],
    ['DOO', 'EOO'],
    ['EOO', 'DOO'],
    ['DOO', 'COO'],
    ['COO', 'BOO'],
    ['BOO', 'AOO'],
  ])
);
//["ICN", "AOO", "BOO", "COO", "DOO", "EOO", "DOO", "COO", "BOO", "AOO"]
