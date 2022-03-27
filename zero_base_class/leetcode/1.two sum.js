
function solution(nums, target) {
    let answer = [];
    let sum = 0;


    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                answer.push(i);
                answer.push(j);
                break;
            }
        }
    }

    return answer;
}

console.log(solution([2, 7, 11, 15], 9));
console.log(solution([3, 2, 4], 6));
console.log(solution([3, 2, 3], 6));
console.log(solution([-1, -2, -3, -4, -5], -8));

Number.MIN_SAFE_INTEGER