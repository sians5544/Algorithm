'use strict';

//Objects
// one of the javaScripts's data types.
// a collection of related data and /or functionality;
// Nearly all object in javaScript are instance of Obeject
// object = {key:value} ; 의 형태이다 
const name = 'ellie';
const age = 4;

// 1. Literals and properties

//(1).object literal syntax {}를 이용해서 만드는 오브젝트
const obj1 = {};
//(2).object constructor syntax 클래스를 이용하여 생성하기 
const obj2 = new Object();


function print(person){
    console.log(person.name);
    console.log(person.age);

};
// 이런식으로 생성하면 주소나 여타 다른 정보들을 저장할 때 따로 받아서 복잡하다 

// object 형으로 관리한다면 
const ellie =  {name: 'ellie', age:4}; // 클래스 없이도 바로 오브제트 생성 가능하다 
// 자바스크립트는 Runtime (): 프로그램이 동작하고 있을 때 ) 때 동작하는 언어로 
// 나중에 object에 일하는지의 여부도 추가하고 싶다 하면 가능하다 
ellie.hasjob = true;
console.log(ellie.hasjob);
print(ellie);

// 삭제도 바로 가능하다 

delete ellie.hasjob; 
console.log(ellie.hasjob);


// 2. Computed properties -> 계산된 프로펄티 
console.log(ellie.name);

console.log(ellie['name']); //Computed properties , object에 배열에서 받아오는거 처럼  스트링 형으로 접근이 가능하다 key는 스트링 형으로 불러야함
ellie['hasJob'] = true;
console.log(ellie.hasJob); // 코딩할때는 .을써서  출력하는게 맞고 실시간으로 원하는 키의 값을 가져오고 싶을 때 Computed properties을 쓰면된다 

function printValue(obj,key){
    console.log(obj[key]);
};

printValue(ellie,'name'); //동적으로 key의 value를 받아올때 유용하게 쓰인다 

// 3. Property value shorthand

const person1 = {name: 'bob',age: 2};
const person2 = {name: 'steve',age: 3};
const person3 = {name: 'dave',age: 4};
const person4 = makePerson('ellie',30);
console.log(person4);
// 위에서 처럼 계속 key 와 value 공통 사항을 적어서 만드는거 보다는 object를 리턴해주는 함수를 만드는것이 좋다 
function makePerson(name,age){ // 이전에 자바스크립트에 클래스가 없었을 때는 이런식으로 object를 만들어서 사용했다 
    return{
        name, //name : name, 
        age, //age : age, 이런 형태로 쓰지 않고 
    }; // shorthand 기능으로 키와 밸류의 이름이 동일하다면 생략이 가능하다 
};

//4. Constructor  Function 

function Person(name,age) { 
    //this = {}; // 새로운 오브젝트를 만들어서 
    this.name = name ;
    this.age = age; 
    // return this; //this를 리턴하겠다 
};

//5. in operator : 오브젝트에 해당 키 값이 있는지 확인하는것 (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
//정의하지 않는 key를 물어보게되면 undefined 가 출력된다 
console.log('random' in ellie);

// 6. for ..in vs for .. of
// for(key in obj)
//console.clear(); // 이전 로그들 다 지워줌 
console.clear();
for(let key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4];

for( let  value3 of array){
    console.log(value3);
}


// 7.Fun Cloning 오브젝트 복사하기 
//Object.assign(dest, [obj1, obj2, obj3...])

const user = {name: 'ellie', age: '20'};
const user2 = user;

console.log(user);

//old way 
// 텅텅 비어있는 오브젝트 만들어서 수동적으로 키 값 할당해주기 
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}

console.clear();
console.log(user3);

// assign 메서드 이용해서 복사하기 
const user4 = {};
Object.assign(user4,user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({},fruit1,fruit2); // 뒤에 나오는 애로 덮어씌워지게 된다 동일한 key값이 있을 시 
console.log(mixed.color);
console.log(mixed.size);
