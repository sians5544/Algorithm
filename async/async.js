'use Strict';
//async & await
//깔끔하게 프로미스를 사용하는 방법 

//1.async
// 아래처럼 번거롭게 프로미스 쓰지 않아도 
// 함수 앞에 async 만 붙여주면 된다 

// function fetchUser(){
//     //do network request in 10 secs...
//     return new Promise((resolve,reject) => {
//         resolve('ellie');
//     });
// }
async function fetchUser(){
    //do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


//2.await
// await 라는 함수는 async 붙은 곳 안에서만 쓸수 있다 

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(2000);  //3초를 기다려주고 사과를 리턴
    return '🍎';
}


async function getBanana(){
    await delay(1000); // 3초 뒤에 바나나를 리턴
    return '🍌';
}

async function pickFruits(){
    const applePromise = getApple(); // 사과의 프로미스 생성
    const bananaPromise = getBanana(); // 바나나의 프로미스 생성 
    ///////////이처럼 프로미스들을 미리 생성하고 await를 실행 하면 1초만에 두개가 다 실행됨
    // 사과랑 바나나가 서로 연관이 없이 때문에  병렬적으로 실행이 된다 
    const apple = await getApple();
    const banana  = await getBanana();
    return `${apple} + ${banana}`;
    // return getApple()
    // .then(apple => {
    //     return getBanana().then(banana => `${apple} + ${banana}`);
    // }); //그런데 이렇게 프로미스도 중첩으로 사용하게되면 callback hell 이랑 비슷해짐 
}

pickFruits().then(console.log);


// 3. useful Promise APIS

// 모든 프로미스들이 병렬적으로 다 받을 때 까지 기다려주는 것 
function pickALlFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+')); //과일의 배열이 전달받아진다 
}

pickALlFruits().then(console.log);

//어떤 것이든 따지지 않고 첫번째 꺼만 받아오고 싶다 
// 바나나가 1초 걸리므로 바나나가 출력된다 
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}


pickOnlyOne().then(console.log);