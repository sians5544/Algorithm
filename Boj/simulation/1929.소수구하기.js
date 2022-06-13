// 소수란? 1과 자기 자신을 제외한 자연수로는 나누어떨어지지 않는 자연수
// 이를 찾는 방법을 에라토스테네스의 체 로 빠르게 구하기
// 16의 경우
// 1 X 16 = 16
// 2 X 8 = 16
// 4 X 4 = 16
// 8 X 2 = 16
// 16 X 1 = 16
//이와 같은 식으로 제곱근을 중심으로 대칭을 이루기 때문에 제곱근까지만 확인하면  시간 복잡도 O(N^(1/2))

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [M, N] = input[0].split(' ').map(Number);

let index = 0;
let arr = Array.from(Array(1000001), () => index++);

for (let i = 2; i <= arr.length; i++) {
  if (arr[i] === 0) continue;

  for (let j = i * i; j <= 1000001; j += i) {
    arr[j] = 0;
  }
}

for (let k = M; k <= N; k++) {
  if (arr[k] && arr[k] > 1) console.log(arr[k]);
}
