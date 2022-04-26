function solution(lines) {
  let answer = Number.MIN_SAFE_INTEGER;
  let changeMille = [];

  for (let line of lines) {
    let key = line.split(' ').slice();
    let runtime = +key.pop().replace('s', '') * 1000;
    key[0] = key[0].replace(/[-]/g, '/');

    changeMille.push([Date.parse(key.join('/')), runtime]);
  }

  for (let i = 0; i < changeMille.length; i++) {
    let cnt = 1;
    for (let j = i + 1; j < changeMille.length; j++) {
      if (changeMille[i][0] + 999 > changeMille[j][0] - changeMille[j][1]) {
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}
