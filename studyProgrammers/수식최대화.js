function solution(expression) {
  let answer = Number.MIN_SAFE_INTEGER;
  let priorities = [
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['+', '*', '-'],
    ['+', '-', '*'],
  ];

  for (let prioty of priorities) {
    let nums = expression.replace(/[*+-]/g, ' ').split(' ').map(Number);
    let formula = expression.replace(/[^*+-]/g, '').split('');
    for (let p of prioty) {
      let idx = formula.indexOf(p);
      while (idx !== -1) {
        nums[idx] = eval(nums[idx] + p + nums[idx + 1]);
        formula.splice(idx, 1);
        nums.splice(idx + 1, 1);
        idx = formula.indexOf(p);
      }
    }
    answer = Math.max(answer, Math.abs(nums[0]));
  }

  return answer;
}

console.log(solution('100-200*300-500+20'));
