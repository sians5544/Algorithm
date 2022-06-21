function solution(nums) {
  let answer = 0;
  let tmp = [];
  const NUMBER_LENGTH = 3;

  const checkPrime = (num) => {
    let flag = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) flag = false;
    }

    return flag;
  };

  const DFS = (L, s) => {
    if (NUMBER_LENGTH === L) {
      if (checkPrime(tmp.reduce((acc, cur) => acc + cur))) answer++;
    } else {
      for (let i = s; i < nums.length; i++) {
        tmp.push(nums[i]);
        DFS(L + 1, i + 1);
        tmp.pop();
      }
    }
  };

  DFS(0, 0);

  return answer;
}
let answer = 0;
let num = 7;
const DFS = (n, total) => {
  if (n === num) {
    answer = total * n;
    return;
  } else {
    if (n === num || n % 2 === 1) {
      DFS(n + 1, total * n);
    } else {
      DFS(n + 1, total);
    }
  }
};

DFS(0, 1);
console.log(answer);
