'use strict';
//1. String concatenation
//백쿼트 `` 
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals:
''''
 
1 + 2 = ${1+2}`);

console.log("ellie's \n book")


//숫자들 연산자 
//2.Numeric operators

console.log(1 + 1);//add
console.log(1 - 1);//substract
console.log(1 / 1);//divide
console.log(1 * 1);//multiply
console.log(5 % 2);//remainder
console.log(2 ** 3);//exponentiation

//3.Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
increment = counter++;
console.log(`increment: ${increment}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y =6;

x += y;
x -=y;
x *=y;
x /=y;


//logical operators: || (or) , &&(and) , !(not)

// || (or) 은 처음에 true가 나오게되면 뒤에는 상관없이 true가 출력됨 
// simple한 value 애들을 두고 마지막에 마지못해 호출하는 애들을 뒤에다가 배치하는게 효율적인 연산자이다 

const value1 = true;

const value2 = 4 < 2;


console.log(`or:${value1 || value2 ||check()}` );

function check(){
    for( let i = 0 ; i <10 ; i++){
        console.log('^^');
    }

    return true;
}

// &&(and) , and 또한 제일 헤비한 연산자일수록 뒤에다가 배치하는것이 좋다 


console.log(`and:${value1 && value2 && check()}` );

function check(){
    for( let i = 0 ; i <10 ; i++){
        console.log('^^*');
    }

    return true;
}


//and 는 간단하게 null 체크 할 때 자주 사용한다 

//!(not)
console.log(!value1)

// 7. Equality 

const stringFive = '5';
const numberFive = 5;

// === loose equlity , with type conversion 
// 두개의 == 타입을 변경해서  문자열이여도 안에 들어있는 애들이 똑같다 
console.log(stringFive == numberFive );
console.log(stringFive != numberFive );

//=== loose equlity , no type conversion
// 타입을 신경써서 타입이 다르면 다른 애들로 판단한다 
// 웬만하면 ==== 을 사용해라 
console.log(stringFive === numberFive );
console.log(stringFive !== numberFive );

//object equality by reference 

const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3= ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie1); 
console.log(ellie1 === ellie3); 


//equality - puzzler
console.log('equality - puzzler');
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false) //false
console.log(null == undefined); //true
console.log(null === undefined); //false 둘은 다른 타입이다 


//8.Conditional operators: if
// if, else if, else

const name2 = 'ellie';
if(name2 === 'ellie'){
    console.log('Welcome, Ellie!');
} else if(name2 === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkwnon');
}

// 9.Ternary operator: ?
// condition ? value 1: value2;
// 간단한 애들일 때만 사용하기 
console.log(name2 === 'ellie' ?'yes':'no');

// 10. Switch statement
//use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS(타입스크립트)

// else if 가 반복될 때 사용하면 유용
const browser = 'IE';

switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;

}

//11.Loops
// while loop, while the condition is truthy,
// body code is executed/

let i =3;
while(i > 0 ){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.

do{
    console.log(`while: ${i}`);
    i--;
}while(i > 0);

//for loop, for(begin; condition; step)

for(i = 3; i> 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`for: ${i}`);
}

//nested 
//중첩 for 문
for( let i = 0; i < 10; i++){
    for(let j = 0 ; j < 10; j++){
        console.log(`i: ${i} , j:${j}`);
    }
}


//break, continue
// break - loop를 완전히 끝내는것
//continue - 지금껏만 끝내고 다음 스탭으로 넘어가는것 

//Q1. 숫자 1~10 짝수인 애들만 프린트하는것 ( continue 사용)

for(let i = 1 ; i < 11 ; i++){
    if( i % 2 === 0){
        console.log(`Q1: ${i}`);
    }
    else continue;
}

// Q2 0~10 까지 출력하되 8을 만나면 그만하기 (break 사용)


for(let i = 0 ; i < 10 ; i++){
    if( i > 8){
      break;
    }
    else{
        console.log(`Q2: ${i}`);
    }
}