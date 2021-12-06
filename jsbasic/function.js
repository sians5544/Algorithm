'use strict';
//Function
// 프로그램을 구성하는 가장 작은 단위
//서브 프로그램이라고도 불리며 여러번 재사용이 가능하다
// 대체적으로 한가지의 업무나 계산을 위해서 사용된다 

//1.Function declaration 
// function name(param1, param2) {body .... return;}
// 한가지 함수는 한가지 일만 하도록 만들어야한다 
// naming: 무언가를 동작하는 것이기 때문에, 동사형태로 이름 지정해야한다 
// 자바 스크립트에서 function은 object이다  

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234); //다행이 숫자가 문자열로 변환되어서 출력되긴한다 


// 2. Parameters -전달되는 타입들
// premitive parameters: passed by value  //premitive 는 메모리에 value 가 그대로 저장되어있어서 그게 전달 
// object parameters:  passed by reference 메모리에  reference가 저장된다 

function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name: 'ellie'}; //ellie 라는 오브젝트를 만들면 메모리에는 오브젝트의 레퍼런스를 가리키고있는 주소를 가지고 있다고 생각하자 
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// from 은 정의되지 않으면 원하는 default 값을 적어주기만 하면된다 
function showMessage(message,from = 'unKnown'){

    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 4. Rest parameters (added is ES6)
// ... 으로 표현되면 Rest parameters 라는 표시  , 배열 형태로 전달이 된다 
function printAll(...args){
    for(let i = 0 ; i < args.length; i++){
        console.log(args[i]);
    }

    //배열 출력하는 간단한 출력 방법
    for( const arg of args){
        console.log(arg);
    }

    //배열의 forEach  형태로 출력하는 방법 
    args.forEach((arg) => console.log(arg));
}
// 3개의 형태로 배열이 전달된다 
printAll('dream','coding','ellie');


// 5. Local scope 
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼수 있다 
let globalMessage = 'global' ; //
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    //중첩된 함수에서는 부모 함수의 변수를 접근 가능하다 
    function printAnother(){
        console.log(message);
        let childMessage = 'Hello2';

    }

   // console.log(childMessage); // 하지만 이렇게 부모에서 자식의 변수를 접근할수는 없음
}

printMessage()


// 6. Return a value

function sum(a,b){
    return  a + b; 
}

const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit;

// bad 인 경우 
function upgradeUser(user){
    if (user.point > 10 ){
        //long upgrade logic 10번의 로직을 거치는 과정이 진행됨
    }
}

//good 
function upgradeUser(user){
    if (user.point <=10){
        return;
    }
    //이런식으로 아닌 경우는 빨리 그 로직을 끝낼수 있게 하는게 좋다 
}

// 1. Function expression 
// 함수가 선언되기 이전에 호출히 가능하다는 것 -> 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문이다 
// function에 아무리이름이 없이 그냥 필요한 부붐만 
// 변수를 선언하는 것 동시에 함수를 선언하는 경우 
// anonymouse function 익명함수 
const print = function(){
    console.log('print');
};

print();

//다시 다른 변수에 할당 printAgain 은 print와 같은 레퍼런스를 가르키고 있음 
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


//2. Callback function using function exprssion 
// 정답 answer ,정답이 맞으면 호출될 함수 printYes , 정답이 틀리면 호출될 함수 printNo 을 전달 
// 상황에 맞으면 전달될 함수를 불러라 하는데 callback 이라고 한다 
function randomQuiz(answer, printYes, printNo){
    if( answer === 'I love you'){
        printYes();
    }
    else{
        printNo();
    }
};

//anonymouse function
const printYes = function(){
    console.log('yes!');
};

//named function
//better debuggging in deugger's stack traces 디버깅을 할 때 스택 트레이스에 함수 이름 나오게 하려고 
// recursions  // 또는 함수 안에서 자신을 또 호출하게 재귀함수 
const printNo = function print(){
    console.log('no!');
};

randomQuiz('Wrong',printYes,printNo);
randomQuiz('I love you',printYes,printNo);

//Arrow function 함수를 너무 간결하게 만들어주는 놈
// 항상 익명함수이다 

//우리가 원래 익명함수는 

const simplePrint = function () {
    console.log('simplePrint!');  
};

//arrow는 이렇게만 선언하면된다 
const simplePrint2 = () => console.log('simplePrint!');  
//const add = (a,b) => a +b ; 

// 함수 안에서 한줄 이상의 블락이 필요하다면 블록 넣어서 쓰면되고 return 을 적으면됨 

const simpleMultiply = (a,b) =>{
    //do something more
    return a * b;
};

//IIFE : Immediately Invoked Function Expression 
(function hello(){
    console.log('IIFE');
})(); //요렇게 () 해주고 괄호 넣어주면 즉시 호출이 가능하다 
//원래는 hello() 로 부르지만 

//Quiz 
//function calculate(command, a, b) 를 선언해서 
// Command : add,substract , divide, multiply, remainder 

function calculate(command,a,b){

    switch(command){
        
        case 'add':
            const add = (a,b) => a + b; 
            console.log(add(a,b));
        break;
        case 'substract':
            const substract = (a,b) => a - b; 
            console.log(substract(a,b));
        break;
        case 'divide':
            const divide = (a,b) => a / b; 
            console.log(divide(a,b));
        break;
        case 'multiply':
            const multiply = (a,b) => a ** b; 
            console.log(multiply(a,b));
        break;
        case 'remainder':
            const remainder = (a,b) => a % b; 
            console.log(remainder(a,b));
        break;
        default:
            console.log('command가 잘못되었다.');
            break;
    }
};

calculate('add',1,1);
calculate('substract',1,1);
calculate('divide',4,2);
calculate('multiply',2,3);
calculate('remainder',3,2);
calculate('sian',2,3);

// 자바스크립트 5까지 듣고 과제 완료 