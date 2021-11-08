function solution(asteroids) {
    
  let answer = 0;
  let stack = [];

  if(asteroids[asteroids.length-1] < 0){
      for(let a of asteroids){
          if(a>0){
              stack.push(a);
          }
          else{
            console.log(a);
              let last = stack[stack.length-1];

              if( Math.abs(a) > Math.abs(last)){
                  stack.pop();
                  stack.push(a);
              }
              else if( Math.abs(a) === Math.abs(last)){
                  stack.pop();
                  continue;
              }
              
            console.log(stack);
          }
      }
  }
  else return asteroids;
  
  return stack;
};

console.log(solution([5,10,-5]));