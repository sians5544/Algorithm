//테스트 케이스 2개밖에 통과 못함

function solution(priorities, location) {
  let answer = [];
  let stack = [];
  let count = 0;

  const new_list = priorities.map((priority, index) => {
    return { priority, index };
  });

  // console.log(new_list[0]);

  while (new_list.length > 0) {
    let queue = new_list.shift();
    console.log(queue);
    if (new_list.some((priority) => queue.priority < priority.priority)) new_list.push(queue);
    else {
      count += 1;
      if (queue.index === location) return count;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 5));
// stack.push(priorities[0]);

// for (let i = 1; i < priorities.length; i++) {
//   if (stack[stack.length - 1] >= priorities[i]) {
//     stack.push(priorities[i]);
//   } else {
//     answer.push(priorities[i]);
//   }
// }

// answer = [...answer, ...stack];

// console.log(answer.indexOf(priorities[location]) + 1);
// return answer;
