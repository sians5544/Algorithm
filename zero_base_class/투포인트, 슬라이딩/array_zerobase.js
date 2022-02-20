let num = 123.456; 

let str = "here i am";
let fruits = ["apple","banana","melon"];


console.log(Array.isArray(num)); //output: false
console.log(Array.isArray(str)); //output: false
console.log(Array.isArray(fruits)); //output : true


console.log(fruits.length);
delete fruits[1];
console.log(fruits); // output : [ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length); //output :  3



fruits.push("watermelon");
console.log(fruits);
let ret = fruits.pop();
console.log(fruits);
console.log(ret); // output :watermelon   pop() 된 배열의 요소를 반환한다 


fruits.unshift("watermelon");
console.log(fruits); //output : [ 'watermelon', 'apple', 'banana', 'melon' ]
fruits.shift();
console.log(fruits); // output : [ 'apple', 'banana', 'melon' ]


console.log(fruits.splice(1)); // output : [ 'banana', 'melon' ] 배열 잘라서 리턴

fruits = [ 'apple', 'orange','banana', 'melon' ];

ret = fruits.splice(1,1); // 앞에서 두번째 (인덱스 :1) 만 삭제 

console.log(fruits);

//splice 는 삭제와 동시에 데이터 넣기 가능

// banana삭제하고 망고랑 키위를 넣겠다 
ret = fruits.splice(1,1,"mango","kiwi");
console.log(ret);
console.log(fruits); // output : [ 'apple', 'mango', 'kiwi', 'melon' ]


console.log();
console.log(); 


console.log(fruits.slice(1)); // output :[ 'mango', 'kiwi', 'melon' ]
console.log(fruits); // output : [ 'apple', 'mango', 'kiwi', 'melon' ]

console.log(fruits.slice(1,2)); //output : [ 'mango' ]
console.log(fruits.slice(-2)); //output: [ 'kiwi', 'melon' ]


// 한번에 여러가지를 병합 가능
// 원본 데이터는 건들이지 않고 병합된 데이터를 따로 저장 가능
let fruits_add = ["cherry","banana"];
console.log(fruits.concat(fruits_add)); //output : [ 'apple', 'mango', 'kiwi', 'melon', 'cherry', 'banana' ]
console.log(fruits); // output : [ 'apple', 'mango', 'kiwi', 'melon' ]


let fruits2 = ["apple","orange","banana","orange","melon"];

console.log(fruits2.indexOf("orange"));
console.log(fruits2.indexOf("Orange")); // 대문자 오렌지는 없으므로 output: -1

console.log(fruits2.indexOf("orange",2)); // 인덱스 2 이후로 의 오렌지 output : 3
console.log(fruits2.lastIndexOf("orange"));

console.log(fruits2.lastIndexOf("orange",-3)); // output : 1 


// 실제 있는지 없는지를 판단해서 true,false 

console.log(fruits2.includes("orange")); //output : true
console.log(fruits2.includes("watermelon")); //output : false
