var asteroidCollision = function(asteroids) {
    
  let stack = [];
  
  for(let x of asteroids){
      if(x > 0) stack.push(x);
      else{
          let top = stack[stack.length-1] ;
          while(top >0 && Math.abs(stack[stack.length-1]) < Math.abs(x)  && stack.length){
                stack.pop();
                top = stack[stack.length-1];
          }
          
          if (x + top === 0) stack.pop();
          else if (!stack.length || top < 0) stack.push(x);
          }       
  }
  
  return stack; 
};

function solution(asteroids) {
  let stack = [];

  for (const x of asteroids) {
    let top = stack[stack.length - 1];
    if (!stack.length || x > 0 || (x < 0 && top < 0)) stack.push(x);
    else {
      while (stack.length && top > 0 && Math.abs(top) < Math.abs(x)) {
        stack.pop();
        top = stack[stack.length - 1];
      }
      if (x + top === 0) stack.pop();
      else if (!stack.length || top < 0) stack.push(x);
    }
  }
  return stack;
}

console.log(solution([1, -2, -2, -2]));