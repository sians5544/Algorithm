var findingUsersActiveMinutes = function (logs, k) {
  let answer = Array(k).fill(0);
  let hash = new Map();

  for (let [userId, time] of logs) {
    let list = hash.has(userId) ? hash.get(userId) : [];
    if (list.indexOf(time) == -1) list.push(time);
    hash.set(userId, list);
  }

  for (let [key, value] of hash) {
    answer[value.length - 1]++;
  }

  return answer;
};
