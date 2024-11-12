function solution(s) {
  const rgxJaden = /^[a-zA-Z]/;

  let answer = [];

  for (let str of s.split(" ")) {
    if (!rgxJaden.test(str)) {
      answer.push(str.toLowerCase());
    } else {
      answer.push(str[0].toUpperCase() + str.slice(1).toLowerCase());
    }
  }

  return answer.join(" ");
}
