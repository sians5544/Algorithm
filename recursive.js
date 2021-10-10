'use strict';


function recurcive(num){
  if(num == 0) return 0;
  return num +  recurcive(num -1);
}

// 3  + (2 + (1 + 0)) => 6 
console.log(recurcive(3));


function factorial (num){
  if(num == 0) return 1;
  return num  *  factorial(num -1);
}

// 4 * 3 * 2 * 1 * 0 => 24
console.log(recurcive(4));


// 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오 

function MAX(x,y){

  let answer = 0; 
  if(x > y){

    answer = x ; 
  }
  else{
    answer = y;
  }
  return answer;
}


function MAX2(x,y){

  return x > y ? x : y ;  //  삼항 연산자 x 가 y보다 크면 x 출력 그렇지 않으면 y 출력 
}


console.log();
console.log(MAX2(0,3));
console.log(MAX2 (-1,5)); 
console.log(MAX2(100,7)); 


console.log(MAX(0,3));
console.log(MAX (-1,5)); 
console.log(MAX(100,7));

console.log();
console.log();

// 1.함수 선언식 
function add_1(x,y){
  return x+y; 
}

// 2. 함수 표현식 
// 이름없는 함수를 생성하고 그 함수의 주소 값을 변수에 저장하는 형태 

const add_2 = function(x,y){
  return x + y;
}

// 3.화살표 함수 
// 얘도 동일하게 주소값이 저장된다 

const add_3 = (x,y) => x + y ; 

// 대입 연산자를 통해서 확인 
const add_4 = add_1;

console.log(add_4(1,3));
console.log();
console.log();

let user = {name : "john"};

let admin  = {name : "admin"};

function hello_func(){
  console.log("Hello " + this.name);
}

user.func = hello_func;
admin.func = hello_func;

user.func();
admin.func();

console.log();
console.log();

let us = 1e-6;

console.log(us.toString());
console.log(typeof(us.toString())); //output : string
console.log(typeof(us + ""));


console.log();
console.log();

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(3)); //소수 3번째 자리까지
console.log((num_1 - num_2).toPrecision(3)); // 얘는 정수 자리 까지 포함한 3자리  output: 1.54

console.log();
console.log();


console.log(Number.isNaN(0.123)); //  output : false 매개 변수 자체가 nan 인지 판단 

console.log(!Number.isNaN(0.123)); // output : true

console.log(Number.isNaN(123 / "hello")); // output: true 숫자로 표현할수 없는 것 
console.log(Number.isNaN(122)); //output: false 

console.log();
console.log(Number.isFinite(Infinity)); // 유한의 수 x -> false
console.log(Number.isFinite(123)); //output : true

console.log(Number.parseInt("123px")) //output : 123
console.log(Number.parseInt(123.123))//output : 123

console.log(Number.parseFloat("1.24em")); // output: 1.24
console.log(typeof parseFloat("1.24em")); // output: number

