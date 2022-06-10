function solution(nums, target) {
  let answer = [];
  let sum = 0;
  let temp = Math.abs(target - nums[0] + nums[1] + nums[2]);

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    sum = nums[i] + nums[left] + nums[right];
    if (sum === target) return sum;

    while (left < right) {
      if (temp >= Math.abs(target - sum)) {
        temp = Math.abs(target - sum);
      }

      if (sum > target) right--;
      else if (sum < target) left++;
      else {
        right--;
        left++;
      }
    }
  }

  return temp + target;
}

console.log(solution([0, 1, 2], 0));
console.log(solution([1, 0, 1, 1], -100));

function Person(name) {
  function person(name) {
    this.name = name;
  }
  const hi = function sayHello() {
    console.log('Hi my name is ${name}');
  };
}
