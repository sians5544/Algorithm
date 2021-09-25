'use strict';

// Array 

// 1.배열 선언 
const arr1 = new Array();
const arr2 = [1,2];

//2.Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length -1 ]); //마지막 인덱스 받아오기

// 3. looping over an array
console.clear();

for (let fruit of fruits){
    console.log(fruit);
}

//forEach

fruits.forEach(fruit  => console.log(fruit));

//4.Addition, deletion,copy
console.clear();
//push : add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits)
//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits)

//unshift: add an item to the beninning 앞에서 부터 데이터 넣기 
fruits.unshift('딸기','레몬');
console.log(fruits)

//shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift , unshift are slower than pop,push
//한 공간에 넣다 뺏다가 진행되는 pop,push 와는 다르게 shift 는 앞ㅇㅔ 비워주고 나머지 애들 뒤로 밀어주고 이런일이 일어나기 때문에
// 아이템을 지정된 포지션에서 지우는것은 가능하다 
// splice : remove an item by index position 

fruits.push('딸기','복숭아','레몬');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1 , '청사과','수박'); //첫번째 인덱스부터 1개만 지우고 나서 그 자리에 사과랑 수박을 넣어달라 
console.log(fruits);

//combin two arrays
const fruits2 = ['배','낑깡'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.searching 검사 
//find the index
// 해당하는 값이 없다면 -1 이 출력된다 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
//배열에 해당하는 과일이 있는지 확인해주는 함수 
//includes
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛')); //없어서 false 출력

//LastIndexof
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));
