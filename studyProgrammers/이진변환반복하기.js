function solution(n) {
  let answer = [0, 0];
  let checkArr = [];

  const changeBinary = (num, checkArr) => {
    checkArr.unshift(num % 2);
    num = parseInt(num / 2);
    if (num > 1) changeBinary(num, checkArr);
    else {
      checkArr.unshift(1);
      return;
    }
  };

  const checkOneCount = (str) => {
    let replaceZero = [...str].filter((n) => n != 0);

    answer[0]++;
    answer[1] += str.length - replaceZero.length;

    if (replaceZero.join("") === "1") return;

    checkArr = [];

    changeBinary(replaceZero.length, checkArr);
    checkOneCount(checkArr.join(""));
  };

  checkOneCount(n);
  return answer;
}
