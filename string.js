
//문자 접근

let str = "Hello world";

console.log(str.charAt(1)); //output : e
console.log(str.charCodeAt(1)); //output: 101 -> 아스키코드값
console.log(str[0]); // output: H

//문자열 검색

let text = "hello, world";

console.log(text.indexOf('l')); // output: 2

console.log(text.indexOf('l',3)); // 3번째부터 있는 l output: 3

console.log(text.lastIndexOf('l'));// output: 10

//문자열 있는 대상이 있는지 없는지만 판단

console.log(text.includes("hello")); // output:true

console.log(text.includes("helLo")); // output:false -> 대소문자 구분한다 

console.log(text.startsWith("ello")); // output: false ->얘는 무조건 첫번째 부터 찾아서 false리턴
console.log(text.startsWith("ello",1)); //text[1] 번째부터 찾아라 output : true


console.log(text.endsWith("world")); // world 로 끝나는지 확인 output: true

//문자열에대한 대소문자 

let text2 = "HelLo";

//모두 대문자로 만들어라 
console.log(text2.toUpperCase());
//모두 소문자로 만들어라 
console.log(text2.toLowerCase());


//문자열 치환

let text3 = "hello, world!!!!";

let changed_text = "";

changed_text = text3.replace("world","earth");

console.log(changed_text); // output: hello, earth!!!!


// 특정 문자열 아니고 전체 다 변경하고 싶을 때 
console.log(text3.replace(/l/g,"i")); //output:heiio, worid!!!!

// 문자열 추출
// 원본 텍스트에 영향 x
console.log(text3.slice(0,5));//output: hello
console.log(text3.slice(4));//output: o, world!!!!
console.log(text3.slice(-4));//output: !!!! , 뒤에부터 출력됨

console.log(text3.substring(2,6)); //output: llo,

// slice 와 substring 의 차이점 
// slice 는 start 인덱스가 
console.log(text3.slice(6,2)); // false로 판단 
console.log(text3.substring(6,2)); // 내부적으로 순서를 바꿔서 출력

// 시작점에서 특정 길이만큼 출려하고 싶을 때 
console.log(text3.substr(2,6)); //output : llo, w
console.log(text3.substr(-5,3)); //output : d!!

// 문자열 분할

let fruits = "apple banana melon";

let result = fruits.split(" ");

console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

//문자 하나하나를 쪼개고 싶다면

console.log(text3.split("")); // output: [ 'h', 'e', 'l', 'l','o', ',', ' ', 'w','o', 'r', 'l', 'd','!', '!', '!', '!']

// 특정 인덱스 개수 만큼만 자르기도 가능
console.log(text3.split("",3)); //output: [ 'h', 'e', 'l' ]
