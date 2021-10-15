function solution (str){

  let answer = 0;

  let count = 0;

  let stack = [];

  for( let s of str){

    if( s !== ')'){
      stack.push(s);
    }
    else{
      stack.pop();
      count++;
    }
  }
  answer = count;
  return answer ;
}

console.log(solution("()(((()())(())()))(())"));
//스택에 있는 ( 들은  는 막대기의 개수 
//  i번쨰에 ) 가 나왔는데 i-1 에 ( 가 나왔다? 이건 레이저 이므로 push 된 ( 빼고 서 
// 스택의 사이즈를 더해준다 
// 닫는 괄호면 무조건 pop() 

