/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
  let stack = [];
  
  let answer = 0;
  
  for(let i = 0; i < s.length; i++){
      
      if(s[i] !== '(' && stack.length){
          stack.pop();
      }
      else if(s[i] === ')' && stack.length ==0){
          answer++;
      }
      else{
          stack.push(s[i]);
      }
  }

  answer+= stack.length;  
  return answer;
};