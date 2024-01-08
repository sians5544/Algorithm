function getDivisorsCnt(num) {
    let cnt = 0;
  
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        cnt++;
        if (num / i !== i) cnt++;
      }
    }
  
    return cnt;
  }
  
  function solution(number, limit, power) {
    let answer = [];
    
    for (let i = 1; i <= number; i++) {
      let resultCnt = getDivisorsCnt(i);
      answer.push(resultCnt > limit ? power : resultCnt);
    }
  
    return answer.reduce((acc, cul) => acc + cul);
  }