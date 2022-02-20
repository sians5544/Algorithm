'use strict';

// function solution(str){

//   let answer = 'YES';
//   let stack = [];

//   for(let x of str){

//     if( x === '('){
//       stack.push('(');
//     }
//     else{
//         stack.pop();
//     }
//   }

//   if(stack.length !==0) return 'NO';

//   return answer;
// }




function solution(s){

  let answer = 'YES';
  let stack = [];

  for(let x of s ){

    if(x !== ')'){ // ')' 가 아니라면  스택에 넣어준다
      stack.push(x);
    }
    else{
      stack.pop(); // ')' 라면 stack 마지막 인덱스를 빼준다 
    }
  }

  if(stack.length){ // '(' 와 ')' 의 수가 똑같다면 올바른 괄호들 
    // 올바른 괄호면 같은 수 만큼 push, pop을 진행했기 때문에 stack이 비어있다 
    return 'NO';
  }

  return answer;

}


console.log(solution("(())()")); // YES
console.log(solution("(()(()))(()"));//NO 
