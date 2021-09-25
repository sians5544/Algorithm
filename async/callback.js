'use strict';

//javaScripts is synchronous,
// 즉 자바 스크립트는 동기적인 아이이다 
// 우리가 작성한 순서에 맞춰서 하나하나씩 실행된다 
// hoisting : var, function declartion 등이 제일 위로 올라가는 것 
// callback:로 일정 시간이 지나면 우리가 지정한 함수를 불러주는것 
console.log('1');
setTimeout(() => console.log('2'),1000);   //  브라우저에서 제공되는 api 1초뒤에 이 콜백을 전달해줘 라고 브라우저에 요청 

console.log('3'); //////////이것이 비동기적인 실행 방법이다 

//Synchronus callback 콜백을 불러서 바로 실행  동기콜백
function printImmediately(print){
    print();
} // 얘를 hoisting 처리 맨 앞으로 올라간다고 볼수 있다 

printImmediately(() => console.log('hello'));
//Asynchronous callback  비동기 콜백
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}

printWithDelay(() => console.log('async callback') ,2000);


//Callback Hell example

class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password ==='dream') ||
                (id == 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{ 
                onError(new Error('not found')); // Error 오브젝트 만들어서 not found 

            }
        },2000);
    }

    getRoles(user,onSuccess,onError){
        setTimeout(() =>{
            if(user === 'ellie'){
                onSuccess({name:'ellie',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

//1. 사용자에게 id, passward 입력 받고 
//2. 로그인을 한다 
// 3. 받아온 아이디를 이용해서 역할을 받아올것
///4 . 역할이 잘 받아진다면 이것을  받아온당 

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your passward');

userStorage.loginUser(
    id,
    password,
    user =>{
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} roll`);
            },
            error =>{
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);