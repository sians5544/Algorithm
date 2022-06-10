
var numBusesToDestination = function (routes, source, target) {
  let answer = -1;
  let L = 0;
  let flag = false;
  let hash = {};
  let visited = Array(routes.length).fill(0);
  let queue = [];
  let buslines = [];

  if (source === target) return 0;

  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (!hash[routes[i][j]]) {
        hash[routes[i][j]] = [i];
      } else {
        hash[routes[i][j]].push(i);
      }
    }
  }

  // console.log( typeof hash[1]);

  queue.push(source);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let station = queue.shift();

      for (let line of hash[station]) {
        if (visited[line] === 0) {
          visited[line] = 1;
          for (let bus of routes[line]) {
            if (bus === target) return (L += 1);
            queue.push(bus);
          }
        }
      }
    }
    L++;
  }

  return answer;
};
