'use strict';

// 조건문 switch 를 이용하여 1~7사이의 숫자를 입력 받으면 요일을 출력해주는 코드

const day = 3;
let weekend = "";

switch(day){

  case 1:
    weekend = "월요일";
    break
  case 2:
    weekend = "화요일";
    break
  case 3:
    weekend = "수요일";
    break
  case 4:
    weekend = "목요일";
    break
  case 5: 
    weekend = "금요일";
    break;
  case 6:
    weekend = "토요일";
    break;
  case 7:
    weekend = "일요일";
    break;
}

//console.log(weekend);


// 문제 1

const UNTIL_NUM = 10;
let sum = 0;


for ( let i = UNTIL_NUM ; i >= 0; i-- ){

  if(i % 2 ==  0 ){
    sum+=i;
  }
}
//console.log(sum);


// for (let i = 2; i <10; i++ ){
//   for( let j = 1; j < 10; j++){

//     console.log( `${i} X ${j} = ${i*j}`);
//   }
// }


function print_add(x ,y ){

  console.log(x + y);
}

print_add(); // x, y 변수를 넣지 않게되면 x, y에 둘다 undefined 값이 들어가서 NaN 값이 출력된다 

print_add(10); // x 만 넣어도 마찬가지로 y는 undefined 이기때문에 NaN 출력

print_add(10, 20); 

print_add(10, 20, 30); // x ,y 이외의 값을 넣어도 동작은 잘된다 30 은 무시됨



function print_add2(x ,y = 10 ){ // 기본값도 설정 가능 

  console.log(x + y);
}

print_add2(10); // 이렇게 y의 기본값이 없을 떄만 10이 작용 

print_add2(10, 20);  // 이렇게 넣어주면 지정한 20이 우선


//////// 다이나믹 파라미터 

function print_min(){ // 기본값도 설정 가능 

  console.log(arguments); // output { '0': 10, '1': 20 }
}

print_min(10, 20);  // 매개변수 설정하지 않아도 넣어서 사용할 수 있다 
// argument 
// 내가 넣어준 인덱스에 맞춰서 값이 넘어오게된다 


function solution(n) {
  let  answer = 0;
  
  let len = parseInt(n / 2)+1;
  
  let nums = new Array(len).fill().map((arr,i) => arr=i+1);
  
  answer = nums ; 
  return answer;
}

console.log(solution(15));