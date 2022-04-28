function solution(s) {
  let answer = 0;
  let len = s.length;
  let arrList = [];
  let tmp = [];
  let check = Array(len).fill(0);

  const isPalindrome = (s) => {
    return s === [...s].reverse().join('');
  };

  const DFS = (v) => {
    if (v === len) {
      let str = tmp.slice().join('');
      if (!arrList[str]) {
        arrList[str] = str;
        if (isPalindrome(str)) answer++;
      }
    } else {
      for (let i = 0; i < s.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp.push(s[i]);
          DFS(v + 1);
          tmp.pop();
          check[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
}
// 강사님 풀이 보고 다시 풀기~~~

function solution2(s) {
  let answer = [];
  let set = new Set();
  let hash = {};
  let odd = 0; // 짝수개수
  let mid = '';

  for (let x of s) {
    if (!hash[x]) {
      hash[x] = 1;
    } else {
      hash[x]++;
    }
  }

  for (let key in hash) {
    if (hash[key] % 2 === 0) {
      set.add(key);
    } else {
      odd += 1;
      mid = key;
      set.add(key);
    }
  }

  if (odd > 1) return 0;

  const DFS = (tmp) => {
    if (tmp.length === s.length) {
      answer.push(tmp.join(''));
    } else {
      for (let x in hash) {
        if (hash[x] !== 0) {
          tmp.unshift(x);
          tmp.push(x);
          hash[x] -= 2;
          DFS(tmp);
          tmp.shift();
          tmp.pop();
          hash[x] += 2;
        }
      }
    }
  };

  let tmp = [];
  if (mid) {
    tmp.push(mid);
    hash[mid]--;
  }

  DFS(tmp);

  return answer.length;
}

console.log(solution2('aabbaa')); //3
console.log(solution2('ab')); //0
console.log(solution2('bb')); //0
console.log(solution2('abcdedcbaff')); //120
console.log(solution2('ebacacabe')); //24
