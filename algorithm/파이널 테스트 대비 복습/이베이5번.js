const isPalindrome = (s) => {
  const temp = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (temp === [...temp].reverse().join('')) return true;
  else return false;
};

function solution(P) {
  var answer = [];

  let first = P[0];

  let popList = P.filter((item, index) => index !== 0);

  for(let i = 0; i < popList.length; i++){
    if(isPalindrome(first+popList[0])){
      answer.push()
    }
  }
  return answer;
}

console.log(solution(['11', '111', '11', '211']));
