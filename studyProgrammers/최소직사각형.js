function solution(sizes) {
  let maxSqr = [0, 0];

  sizes.sort((a, b) =>
    a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0
  );

  for (let size of sizes) {
    let [ga, se] = size;

    if (ga < se) {
      if (maxSqr[0] < se) maxSqr[0] = se;
      if (maxSqr[1] < ga) maxSqr[1] = ga;
    } else {
      if (maxSqr[0] < ga) maxSqr[0] = ga;
      if (maxSqr[1] < se) maxSqr[1] = se;
    }
  }

  return maxSqr[0] * maxSqr[1];
}
