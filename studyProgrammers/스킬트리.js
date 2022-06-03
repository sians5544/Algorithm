function solution(skill, skill_trees) {
  let answer = 0;
  let hash = {};

  skill.split('').forEach((s) => {
    hash[s] = 1;
  });

  for (let tree of skill_trees) {
    let stack = [];

    for (let t of tree) {
      if (hash[t]) stack.push(t);
    }

    let flag = true;

    stack.forEach((value, index) => {
      if (value !== skill[index]) flag = false;
    });

    if (flag) answer++;
  }
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
