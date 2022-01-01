function solution(genres, plays) {
  var answer = [];
  let hash = new Map();

  let hashsum = new Map();

  for (let i = 0; i < genres.length; i++) {
    hashsum.set(genres[i], (hashsum.get(genres[i]) || 0) + plays[i]);
  }

  let maxMusic = [...hashsum].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < genres.length; i++) {
    if (!hash.has(genres[i])) hash.set(genres[i], []);
    let hashArr = hash.get(genres[i]);
    hashArr.push([i, plays[i]]);
    hash.set(genres[i], hashArr);
  }

  while (maxMusic.length > 0) {
    let firstMusic = [...hash.get(maxMusic[0][0])].sort((a, b) =>
      a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
    );
    firstMusic.slice(0, 2).map((value) => answer.push(value[0]));
    maxMusic.shift();
  }

  return answer;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
