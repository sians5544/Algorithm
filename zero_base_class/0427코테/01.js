const { setServers } = require('dns');

function solution(s) {
  let answer = 1;
  const len = s.length;
  const dp = new Array(len).fill().map((_) => new Array(len).fill(false));

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      answer = 2;
    }
  }

  for (let i = 3; i <= len; i++) {
    for (let start = 0; start <= len - i; start++) {
      const end = start + i - 1;
      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        answer = Math.max(answer, i);
      }
    }
  }

  return answer;
}

function solution2(s) {
  let answer = Number.MIN_SAFE_INTEGER;
  const isPalindrome = (s) => {
    return s === [...s].reverse().join('');
  };
  for (let i = 1; i <= s.length; i++) {
    // 글자수 늘려가기

    for (let j = 0; j <= s.length - i; j++) {
      console.log(s.slice(j, i + j));
      if (isPalindrome(s.slice(j, i + j))) answer = Math.max(answer, s.slice(j, i + j).length);
    }
  }
  return answer;
}

console.log(solution2('abcbbbccaa'));


function solution(s) {
  let answer = s.length;
  let len = s.length;
  let flag = false;
  let tmp = [];
  let check = Array(len).fill(0);

  const isPalindrome = (s) => {
    return s === [...s].reverse().join('');
  };

  const DFS = (v,L) => {
    if (v === L) {
        let str = tmp.slice().join('');
        if(isPalindrome(str)){
            if(answer >= str.length){
                flag = true;
                return answer = str.length;
                }
            }
    } else {
      for (let i = 0; i < s.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp.push(s[i]);
          DFS(v + 1,L);
          tmp.pop();
          check[i] = 0;
        }
      }
    }
  };


  for(let j = len; j>1; j--){
    if(flag) break; 
    DFS(0,j);
  }
  
  if(answer === len & !flag){
      answer = 1;
  }

  return answer;
}