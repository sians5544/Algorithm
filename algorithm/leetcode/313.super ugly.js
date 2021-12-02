function solution(n, primes) {
  let answer = [];
  let pnums = Array(primes.length).fill(0);
  answer[0] = 1;
  let current = [];

  if (n === 0) return 0;

  let p = 0;

  while (answer.length < n) {
    for (let i = 0; i < primes.length; i++) {
      //1~32 까지 값 모두 검사하는게 아니라 슈퍼 어글리 값들끼리 곱해서 32보다 작은 애들 배열에 넣고 값을 리턴하면된다
      current[i] = answer[pnums[i]] * primes[i];
    }

    let minValue = Math.min(...current);

    answer.push(minValue);

    for (let j = 0; j < primes.length; j++) {
      if (minValue % primes[j] === 0) {
        pnums[j]++;
      }
    }
  }

  return answer[n - 1];
}

console.log(solution(12, [2, 7, 13, 19]));
