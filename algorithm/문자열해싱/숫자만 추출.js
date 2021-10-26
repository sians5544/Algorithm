function solution(s){
  
  let answer = ""
  //s = s.split("");
  let check = /[0-9]/;
for(let x of s){
  if(check.test(x)){
    answer+=x;
  }
}

  return Number(answer);
}


console.log(solution("g0en2T0s8eSoft"));