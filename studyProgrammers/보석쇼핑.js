function solution(gems) {
  let answer = [];
  let left = 0;

  let setJewerly = new Set(gems);
  let hash = new Map();

  for (let right = 0; right < gems.length; right++) {
    hash.set(gems[right], (hash.get(gems[right]) || 0) + 1);

    while (hash.size === setJewerly.size) {
      answer.push([left + 1, right + 1]);
      hash.set(gems[left], hash.get(gems[left]) - 1);
      if (hash.get(gems[left]) === 0) hash.delete(gems[left]);
      left++;
    }
  }

  answer.sort();
  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
}

console.log(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']));
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC']));
console.log(solution(['XYZ', 'XYZ', 'XYZ']));
