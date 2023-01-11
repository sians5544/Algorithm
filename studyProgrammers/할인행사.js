function solution(want, number, discount) {
  let answer = 0;
  let hash = null;
  const VALID_DAY = 9;

  const settingHash = (want, number) => {
    hash = new Map();
    totalWant = 0;
    for (let i = 0; i < want.length; i++) {
      hash.set(want[i], number[i]);
      totalWant += number[i];
    }
  };

  settingHash(want, number);

  for (let i = 0; i < discount.length - VALID_DAY; i++) {
    if (hash.has(discount[i]) && i + VALID_DAY < discount.length) {
      hash.set(discount[i], hash.get(discount[i]) - 1);
      if (hash.get(discount[i]) === 0) hash.delete(discount[i]);

      for (let j = i + 1; j <= i + VALID_DAY; j++) {
        if (hash.has(discount[j])) hash.set(discount[j], hash.get(discount[j]) - 1);
        if (hash.get(discount[j]) === 0) hash.delete(discount[j]);
      }

      if (hash.size === 0) answer += 1;
      settingHash(want, number);
    }
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
