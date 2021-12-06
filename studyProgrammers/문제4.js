// function solution(times, k) {
//   var answer = 0;

//   let hash = new Map();
//   let start = 1;

//   for (let i = 1; i <= times.length; i++) {
//     hash.set(i, times[i - 1]);
//   }

//   while (k > 0) {
//     hash.set(start, (hash.get(start) - 1));
//     if (hash.get(start) === 0) {
//       hash.delete(start);
//       start++;
//     }
//     k--;
//   }
//   if (hash.size === 0) return -1;
//   answer = [...hash][0][0];

//   return answer;
// }



// var answer = 0;

// let hash = new Map();
// let start = 1;

// for (let i = 1; i <= times.length; i++) {
//   hash.set(i, times[i - 1]);
// }

// while (k > 0) {
//   hash.set(start, (hash.get(start) - 1));
//   if (hash.get(start) === 0) {
//     hash.delete(start);
//     start++;
//   }
//   k--;
// }
// if (hash.size === 0) return -1;
// answer = [...hash][0][0];

// return answer;


function solution(times, k) {

  let answer = 0, sum = 0;

  for (let i = 0; i < times.length; i++) {

    sum += times[i];
    if (sum > k) {
      if ((sum - times[i]) < times[i]) return i + 1;
      else times[i] -= 1;
    }
    else {
      times[i] = 0;
    }
  }

  console.log(times);
  for (let i = 0; i < times.length; i++) {
    if (times[i] > 0) return i + 1;
  }
  return -1;
}
console.log(solution([3, 2, 4, 5], 9));
console.log(solution([1, 2, 3], 5));