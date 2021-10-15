

// function solution(str){

//   let answer = "";
//   let stack = [];
  
//   for(let x of str){

//     if(stack.length > 0 && stack.pop() === x)
//     {
//       continue;
//     }
//     else{
//       stack.push(x);
//     }
//   }

//   answer = stack[0];
//   return answer;
// }




function solution(s){
  let answer ="";

  let stack = [];

  for(let x of s){
    if(stack.length > 0 && stack[stack.length-1] === x) // stack에 값이 있고 , pop 으로 가져오면 계속 스택이 비어가는 형태가 되기 때문에 인덱스 값으로 조회하여 비교 
    stack.pop(); // 연속된 문자라면 pop () 제거한다 
    else stack.push(x); // 마지막에 stack 에 있는 값이랑 같지 않으면 stack에 추가!
  }

  answer = stack.join("");
  return answer;
}
console.log(solution("acbbcaa")); //a

console.log(solution("bacccaba"));//bacaba