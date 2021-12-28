function solution(genres, plays) {
  let answer = [];
  let hash = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (hash.has(genres[i])) {
      let list = hash.get(genres[i]);
      list.push([i, plays[i]]);
      hash.set(genres[i], list);
    } else {
      hash.set(genres[i], [[i, plays[i]]]);
    }
  }

  let sortArray = [...hash.values()];

  

  return answer;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
