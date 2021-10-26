function solution(n,k){
  let answer = 0;
  let cnt = 0;
  let stack = Array(n);

  for(let i = 0; i <n; i++){
    stack[i] = i+1;
  }

  while(stack.length){
    for(let i = 1; i<k; i++){
      stack.push(stack.shift());
    }
    stack.shift();

    if(stack.length === 1){
      answer = stack.shift();
    }
  }

  
  return answer;
}

console.log(solution(8,3));