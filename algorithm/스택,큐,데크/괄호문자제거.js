// function solution(str){

//   let answer = "";
//   let stack = [];
//   for(let x of str){
    
//     if(x === ')'){
//       while(stack.pop() !=='('); 
//     }
//     else{
//       stack.push(x);
//       console.log(stack);
//     }
//   }

//   answer = stack.join("");
//   return answer;
// }


function solution(str){

  let answer = "";

  let stack = [];

  for( let s of str){
    if(s !==')'){
      stack.push(s); // ')' 가 아니라면 스택에 넣어준다 
    }
    else{
      while(stack.pop() !== '('); // stack 에서 '(' 만날 때 까지 빼준다 '( ' 포함되어서 빠진다 ! 
    }
  }

  answer = stack.join(''); //스택에 남아있는 애들 문자열로 만든다 
  return answer;
}


console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));