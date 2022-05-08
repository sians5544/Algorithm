function solution2(n, nums) {
  let answer = Number.MAX_SAFE_INTEGER;
  let len = nums.length;
  let check = Array(len).fill(0);
  let mid = nums.sort((a, b) => a - b);

  console.log(mid[parseInt(len / 2)]);
  let tmp = [];

  const totalCount = (tmp) => {
    let total = n;
    let arrs = new Array(n).fill().map((arr, i) => i + 1);
    let left = arrs.slice(0, tmp[0]);
    let right = arrs.slice(tmp[0]);

    console.log(left, right);
    for (let i = 1; i < tmp.length; i++) {
      if (left.indexOf(tmp[i]) !== -1) {
        total += left.length;
        let idx = left.indexOf(tmp[i]);
        left = left.slice(idx + 1, left.length);
        console.log(left);
        continue;
      }

      if (right.indexOf(tmp[i]) !== -1) {
        total += right.length;
        let idx = right.indexOf(tmp[i]);
        right = right.slice(idx + 1, right.length);
      }
    }

    return total;
  };

  const DFS = (v) => {
    if (v === len && tmp[0] === mid[parseInt(len / 2)]) {
      answer = Math.min(totalCount(tmp), answer);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp.push(nums[i]);
          DFS(v + 1);
          tmp.pop();
          check[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
}

function solution(n, nums) {
  let len = nums.length;
  nums.unshift(0);
  nums.push(n);

  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  

}

console.log(solution(10, [2, 4, 7]));
