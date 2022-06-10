function solution(arr1, arr2) {
  let answer = [];
  let differElem = [];

  for (let arr of arr2) {
    let sameElem = arr1.filter((item) => item === arr);
    if (sameElem.length) answer = [...answer, ...sameElem];
  }

  for (let arr of arr1) {
    let sameElem = arr2.filter((item) => item === arr);
    if (!sameElem.length) differElem.push(arr);
  }

  differElem.sort((a, b) => a - b);

  return [...answer, ...differElem];
}

console.log(solution([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); //[2,2,2,1,4,3,3,9,6,7,19]
console.log(solution([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); //[22,28,8,6,17,44]
