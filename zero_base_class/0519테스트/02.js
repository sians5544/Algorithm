function solution(M, remote_tasks, office_tasks, employees) {
  let answer = [];
  let offisCheck = Array(M + 1).fill(0);
  let remoteEmployee = {};
  let remoteObj = {};

  remote_tasks.forEach((remote) => {
    remoteObj[remote] = 1;
  });

  for (let j = employees.length - 1; j >= 0; j--) {
    let task = employees[j].split(' ');
    let team = task.shift();

    if (task.filter((t) => remoteObj[t]).length === task.length) {
      if (!remoteEmployee[team]) remoteEmployee[team] = [];
      remoteEmployee[team].push(j + 1);
      continue;
    }
    offisCheck[team]++;
  }

  offisCheck.forEach((check, index) => {
    if (index !== 0 && check === 0) {
      remoteEmployee[index].pop();
    }
    if (index !== 0) answer.push(...remoteEmployee[index]);
  });

  return answer.sort((a, b) => a - b);
}

console.log(
  solution(
    3,
    ['develoment', 'marketing', 'hometask'],
    ['recruitment', 'education', 'officetask'],
    [
      '1 develoment hometask',
      '1 recruitment marketing',
      '2 hometask',
      '2 develoment marketing hometask',
      '3 marketing',
      '3 officetask',
      '3 develoment',
    ]
  )
); //[1, 4, 5, 7]

console.log(
  solution(
    2,
    ['design'],
    ['building', 'supervise'],
    ['2 design', '1 supervise building design', '1 design', '2 design']
  )
);

console.log(
  solution(
    3,
    ['develoment', 'marketing', 'hometask'],
    ['recruitment', 'education', 'officetask'],
    [
      '1 develoment hometask',
      '1 recruitment marketing',
      '2 hometask',
      '2 develoment marketing hometask',
      '3 marketing',
      '3 officetask',
      '3 develoment',
      '3 marketing',
    ]
  )
); // [1,4,5,7,8]
