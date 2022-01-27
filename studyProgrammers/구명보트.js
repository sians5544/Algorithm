function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b - a);

  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    answer += 1;
  }

  if (left === right) answer++;

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
