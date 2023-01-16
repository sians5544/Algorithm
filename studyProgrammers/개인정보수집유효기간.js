const settigDays = (today) => {
  let total = 0;
  let str = today.split('.');

  total += +str[0] * 12 * 28;
  total += +str[1] * 28;
  total += +str[2];

  return total;
};

function solution(today, terms, privacies) {
  let answer = [];
  let settingArr = [];
  let hash = new Map();
  let todayNum = settigDays(today);

  terms.forEach((term, index) => {
    let [str, num] = term.split(' ');
    hash.set(str, num * 28);
  });

  privacies.forEach((privacy, index) => {
    let [day, name] = privacy.split(' ');
    settingArr.push(+settigDays(day) + hash.get(name));
  });

  settingArr.forEach((arr, index) => {
    if (todayNum - arr >= 0) answer.push(index + 1);
  });

  return answer;
}
