/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    
    
  let stack = [];
  let answer = -1e10;
  let cnt = 0;
  
  for(let i = 0; i<s.length; i++){
      
      if(s[i] === '('){
          stack.push(s[i]);
          cnt++;
      }
      else{
          
          if(s[i] === ')' && stack.length){
              stack.pop();
              cnt--;
          }   
      }
      
    answer = Math.max(answer,cnt);
  
      
  }
  
  
  return answer;
  
};