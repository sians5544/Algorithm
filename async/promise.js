'use strict';
//promise is a javascript object for asynchronous operation 
//state (프로미스 성공 실패 여부 )
// 상태의 종류
// pending  :  프로미스가 만들어져서  우리가 지정한 오퍼레이션이 사용중일 때 
// fulfilled : pending 이 성공적으로 완료될 때
// rejected : 파일을 찾을 수 없거나 문제가 생기면
// Producer: 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어냄
// Consumer: 우리가 원하는 데이터를 소비하는 것

//1. Producer - promise 생성
// 새로운 프로미스가 만들어 질때는 우리가 전달한 executor 라는 함수가 바로 실행이된다 
const promise = new Promise((resolve, reject) => {
    //doing some heavy work() 
    // 우리가 네트워크에서 데이터 받아오거나 파일에서 데이터 읽어오는건 시간이 걸리는데
    //이런건 동기적 으로 처리하면 그 다음 라인의 코드가 실행되지 않아서 시간이 걸리는 읽은
    //프로미스를 만들어서 비동기적으로 처리하는 것이 좋다 
    // 비동기적으로 처리하고 싶은 것들을 여기에 넣어주면된다
    console.log('doing something...');
    setTimeout(() =>{
        //우리가 성공적으로 했다면 resolve  callback 함수 호출
        //resolve('ellie');
        //실패 했을 시에는 reject를 호출 얘는 오브젝트 Error를 통해서 값을 전달한다 
        reject(new Error('no network'));
    },2000);
});

//2. Consumers: then, catch, fianlly을 이용해서 값을 받아올 수 있다 

//값이 정상적으로 수행된다면 내가 값을 받아올거야 value 의 값을 받아와서 
//우리가 원하는 기능을 수행하는 콜백함수를 전달해주면된다
//아래에는 resolve가 수행된 ellie 라는 값이 들어온다 
promise//
.then((value) =>{ //성공했을 때 처리결과 
    console.log(value);
})
.catch(error =>{
    console.log(error);
}) //에러가 잡혔을 떄의 처리 결과
/// then은 리턴값이 promise 이기 떄문에 그 리턴된 promise의 catch를 호출할수 있는 것이다. 
.finally(() =>{
    console.log('finally');
});
//finally 는 성공 ,실패 유무와 상관없이 무조건 마지막에 호출되어지는 것

//3.promise 연결하기 

const fetchNumber = new Promise((resolve,reject) =>{
    setTimeout(() => resolve(1),1000); //1초정도 있다가 값을 전달해주는 애를 생성 
})

//then은 값을 바로 전달할수있고 또 다른 비동기인 프로미스를 전달해도된다.
fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num)); ///then-then 묶어서 다른 비동기 처리도 가능하다 

const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('🐔'), 1000);
    }); //1초있다가 치킨을 리턴
const getEgg = hen =>
    new Promise((resolve, reject) =>{
        setTimeout(() => reject (new Error(`error! ${hen} =>🥚`) ,1000));
        //resolve(`${hen} => 🥚`), 1000);
        
    }); //치킨을 받아서 그것으로부터 달걀을 얻어오는 프로미스
const cook = egg =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`${egg} =>🐣`), 1000);
    }); //달걀을 받아와서 프라이드 에그를 만드는 프로미스 

getHen()
//.then(hen => getEgg(hen)) //이렇게 받아오는 value 다른 함수로 바로 호출하는 경우에는 
.then(getEgg) // 생략이 가능하다 자동적으로 then에서 받아오는 밸류를 getEgg에 전달해서 받아진다 
.catch(error =>{
    return '🥐';
}) //전달되어진 error 를 빵으로 잘 대체해서 계란에 받아오는것에 문제가 생겨도 문제 없도록 빵꾸처리
//이처럼 해당 then에 문제가 생겼을 바로바로 처리해서 다음 체인에 문제가 없도록 해주면됨
//.then(egg =>cook(egg))
.then(cook)
//.then(meal => console.log(meal));
.then(console.log)
.catch(console.log); //에러가 제일 밑으로 전달되면서 catch가 잡힌다 
