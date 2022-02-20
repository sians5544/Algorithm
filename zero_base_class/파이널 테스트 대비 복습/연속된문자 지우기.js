function solution(s){
  let answer = "";
  let stack = [];

  for(let x of s){
    
    if(stack[stack.length-1] !== x ){
      stack.push(x);
      
    }
    else{
      stack.pop();
    }
  }

  answer = stack.join("");
  return answer;
}


console.log(solution("acbbcaa"));
console.log(solution("bacccaba"));