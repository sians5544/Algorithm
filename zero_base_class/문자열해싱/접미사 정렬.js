function solution(s){
  let answer = [];

 

  for(let i = 0 ; i< s.length; i++){
    answer.push(s.substring(s.length,i));
  }

  answer.sort();
  
  return answer;
}

console.log(solution("kseaedu"));