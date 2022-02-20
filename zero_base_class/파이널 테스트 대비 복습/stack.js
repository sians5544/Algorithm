
function solution(s){
  let answer = "";
  let stack = [];
  
  for(let i = 0; i<s.length; i++){
      if(s[i] === ']' && stack.length !==0){
        let str ="";
        let num = "";
        let tmp = "";
        while(stack[stack.length-1] !== '['){
          tmp = stack.pop();
          str = tmp + str;
          }
          //console.log(str);
          // [  빼주기 
          stack.pop();
          //2. 숫자 거르기
        while(stack.length && !isNaN(stack[stack.length-1]) ){
            num=stack.pop() + num;
          }
          //console.log(num);
          //3 . 숫자와 문자 리핏 
          stack.push( str.repeat(parseInt(num)));
      }
      else{
          stack.push(s[i]);
          
      }
  }
  while(stack.length !==0){
    answer =stack.pop() +answer;
  }

return answer;
}


// 문자를 만나거나 스택이 비어있을 때 까지 돈다 



console.log(solution("3[a]2[bc]"));



// if( isNaN (s[i])){
//   stack.push(s[i]);
// }
// else{
//   console.log(s[i]);
//   while(stack[stack.length -1] !== '['){
//       let tmp = stack.pop();
//       str = tmp +str ; 
//       stack.push(str);
//     }
// }
// console.log(stack);
// }