function solution(orders, course) {
  let answer = [];
  let menuHash = new Map();
  let tmp = [];
  let len = 0;

  const DFS = (L, s, n, str) => {
    if (L === n) {
      let strArr = tmp.slice();
      strArr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
      menuHash.set(strArr.join(''), (menuHash.get(strArr.join('')) || 0) + 1);
    } else {
      for (let i = s; i < str.length; i++) {
        tmp.push(str[i]);
        DFS(L + 1, i + 1, n, str);
        tmp.pop();
      }
    }
  };

  for (let i = 0; i < course.length; i++) {
    len = course[i];
    for (let j = 0; j < orders.length; j++) {
      if (orders[j].length >= len) {
        DFS(0, 0, course[i], orders[j]);
      }
    }
  }

  for (let i = 0; i < course.length; i++) {
    let courseArr = [...menuHash].filter((menu) => menu[0].length === course[i] && menu[1] >= 2);
    courseArr.sort((a, b) => b[1] - a[1]);
    if (!courseArr.length) continue;
    let max = courseArr[0][1];
    for (let j = 0; j < courseArr.length; j++) {
      if (courseArr[j][1] < max) break;
      if (courseArr[j][1] === max) {
        answer.push(courseArr[j][0]);
      }
    }
  }

  return answer.sort();
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]));
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
