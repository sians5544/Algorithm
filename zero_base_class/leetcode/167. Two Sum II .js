var twoSum = function (numbers, target) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        answer.push(i + 1);
        answer.push(j + 1);
      }
    }
  }

  return answer;
};
