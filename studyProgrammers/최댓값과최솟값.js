function solution(s) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let originArr = s.split(" ").map(Number);

  for (let origin of originArr) {
    min = Math.min(origin, min);
    max = Math.max(origin, max);
  }

  return `${min} ${max}`;
}
