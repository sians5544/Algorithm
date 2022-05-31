function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = Array(bridge_length).fill(0);
  let len = truck_weights.length;
  let throw_truck = [];

  truck_weights = truck_weights.reverse();
  while (1) {
    if (truck_weights.length === 0 && queue.reduce((acc, cur) => acc + cur) === 0) break;

    queue.shift();

    if (queue.reduce((acc, cur) => acc + cur) + truck_weights[truck_weights.length - 1] <= weight) {
      queue.push(truck_weights.pop());
    } else {
      queue.push(0);
    }

    answer += 1;
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
