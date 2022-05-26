function solution(call) {
  let answer = [];

  let setArray = new Set(call.split(''));
  let hash = new Map();

  for (let arr of setArray) {
    const regExp = new RegExp(arr, 'gi');
    hash.set(arr, call.match(regExp).length);
  }

  let maxNum = [...hash.values()].sort((a, b) => b - a)[0];

  for (let c of call) {
    if (hash.get(c) < maxNum) answer.push(c);
  }

  return answer.join('');
}

console.log(solution('abcabcdefabc')); //def
console.log(solution('abxdeydeabz')); //xyz
console.log(solution('abcabca')); //bcbc
console.log(solution('ABCabcA')); //BCbc
console.log(solution('dkgjkAGSGSDDGdkgkjkADGDDASDDAAADDAAA')); //dkgjkdkgkjk
console.log(solution('jdjlkgjkAGDADDAGHFSDSDDGdkjklgjlkjagjekjdkljocamlkgjk')); //jdjlkgjkdkjklgjlkjagjekjdkljocamlkgjk
