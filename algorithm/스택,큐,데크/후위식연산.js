function solution(str){

  let answer = 0;

  let stack = [] ;

  let sum = 0;
  let chekAtZ = /[~!@#$%^&*()_+|<>?:{}]/; 

  for( let x of str){
    if(isNaN(x)){
      let right = stack.pop();
      let left = stack.pop();
      if(x === '+'){
        stack.push(left+right);
      }
      else if(x === '-'){
        stack.push(left-right);
      }
      else if( x === '*'){
        stack.push(left*right);
      }
      else if( x === '/'){
        stack.push(left/right);
      }
      console.log(stack);
    }
    else{
      stack.push(Number(x)) ; 

    }
  }
  answer = stack[0];
  return answer;
}



function solution2(s){

  let answer = 0;

  let stack = [];

  for(let x of s){

    if(isNaN(x)){ //후위식은 왼-> 오 -> 부 의  준으로 트리가 정렬됨
      let right = stack.pop(); // 그래서 lefe 값을 기준으로 산술 연산을 한다 
      let left = stack.pop();

      if(x === '+'){
        stack.push(left+right);
      }
      else if(x === '-'){
        stack.push(left-right);
      }
      else if(x === '*'){
        stack.push(left*right);
      }
      else if(x === '/'){
        stack.push(left/right);
      }
    }
    else{
      stack.push(Number(x));
    }
  }
  answer = stack[0];
  return answer;
}

console.log(solution2("352+*9-"));