'use strict';
//1.Use strict
// added in ES 5
// use this for valina javascripts
// strict mode를 사용한다는 의미이며 코드를 엄격한 모드를 사용
//변수선언 없이 사용되거나 변수 오류를 잡아내는 모드이다 

'use strict';

//2.Variable , rw(read/write) 메모리의 값을 읽고 쓰기가 가능하다 
// let( added in ES6)
//  변수라고도 불리는데 자바 스크립트에서는 let 이라는 키워드를 이용한다 

//global 변수 
let globalName = 'global name';

{
    let name = 'sian';
    console.log(name);
    name = "hello";
    console.log(name);
}
console.log(name);
console.log(globalName);

//var는 왜 쓰면 안되는걸까? 
// 값을 할당 하기도 전에 변수를 사용할 수 있어서이다 
//hoisting 이란? 
// 호이스팅은 어디에 선언했냐에 상관없이 제일 위로 선언을 끌어주는 것이다 
//var는 블록을 철저히 무시한다 블럭 안에서 4을 선언해도 어디에서나 다 4로 보여진다 
{
 age = 4;
 var age;
}

console.log(age);

//3.Contants // 읽기만 가능하다 다시 다른 값으로 쓰는거 불가능 
// 변할만한 이유가 없다면 const로 선언하는게 좋다 
// 한번 할당하면 값이 변경되지 않는 것 
// 값을 선언함과 동시에 할당하고서는 절대로 변하지 않는다 
// Immutable data type 이다 
// 장점 1.보안성 2. 다양한 스레드들이 접근해서 값을 변경할수 있는데 그때 변경되지 않는다는 장점 3. 사람이 하는 실수 
const daysInWeek = 7;
const maxNumber = 5;


//Note!
//Immutable data types:  데이터 타입 자체를 변경할수 없다 한번 ellie를 정의하면 i를 빼고 l로 변경하거나 하는게 불가능

//Mutable data types : 변경이 가능한 데이터 타입 object 계속 스스로 변경이 가능하다 
//자바스크립트에서는 기본적으로 다 변경이 가능하다 


//4.Variable types
// 자바스크립트 타입 
//primitive ,single item (더이상 나눠질수 없는 한가지의 아이템을 말한다 ): number,string,boolean,null,undefiedn,symbol 얘네는 값 자체가 메모리에 저장
//object,box container : 이러한 싱글 아이템들을 묶어서 한 단위로, 박스로 관리할수있는 것 // 너무 커서 메모리에 한번에 올라갈수 없음 요 변수에는 레퍼런스가 담겨있음 
// function (first-class-function:이 언어에서는 함수도 변수처럼 데이터 할당 가능하고 함수의 파라미터 인자로 전달이 가능 한것)
//자바 스크립트에서는 숫자는 타입을 설정하지 않아도 된다 
//ex) let num = 2.3 이런식으로 쓸수 있다 

const count = 17;
const size = 17.1;

//백쿼트 `` 좋은점 : 따움표안에 $표시로 한번에 표현가능

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numberic values: infinity, -infinitym , Nan(숫자가 아닐때)
//infinity : 숫자를 0으로 나누면 양의 무한대수가 된다 
// negativeInfinity 마이너스 숫자를 0으로 나누면 음의 무한대수가 된다.
//NaN number 가 아닌 String 을 숫자로 나누게 되면 Not a Number 값이 나온다 


const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2 ;
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)


//binInt() 새로 업데이트된 int형 
const bigInt = 123456789012345678901234567890n; //요렇게 뒤에 n만 붙여주면된다 
console.log(`value:${bigInt}, type: ${typeof bigInt}`);


//String 
const char = 'c';
const brenand = 'brendan';
const greeting = 'hello' + brenand ; // 요렇게 타입이 붙여서 출력되기도함 
console.log(`value:${greeting}, type: ${typeof greeting}`)
const helloBob = `hi ${brenand}!` ; //template literals (string) $와 {} 을 연결해서 쓰면 붙여서 값을 백틱 이용 
// + 형태보다 훨씬 더 간편하게 string 을 만들수 있다 
console.log(`value:${helloBob}, type: ${typeof helloBob}`)


//boolean 
// false : 0,null,undefined,NaN, '' -> 요런 애들은 다 false로 간주된다 
// true: any other value 

const canRead = true;
const test = 3 < 1; //false 
console.log(`value:${canRead}, type: ${typeof canRead}`)
console.log(`value:${test}, type: ${typeof test}`)


//null
let nothing = null;
console.log(`value:${nothing}, type: ${typeof nothing}`)

//undefined - 선언은 되었지만 아무것도 값이 지정되지 않은 상태 
let x ;
console.log(`value:${x}, type: ${typeof x}`)

//symbol, create unique identifiers for objects
// 고유한 식별자가 필요한 애들, 우선순위를 주고 싶을 때 사용된다 
// 주어지는 string 에 상관없이 고유한 식별자를 만들 때 사용된다 

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2);

//동일한 심볼을 만들고 싶을 땐 

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');

console.log(gsymbol1 === gsymbol2); //true
// symbol은 그대로의 변수를 출력하면 에러가 나기 때문에 .description으 string 의 형태로 출력해줘야한다 
console.log(`value:${symbol1.description}, type: ${typeof symbol1.description}`);


//object , 일상생활에서 보는 물건과 물체의 박스형태 
const ellie = {name : 'ellie' ,age : 20};
//객체 안의 변수에는 접근해서 값을 변경할 수 있다 
ellie.age = 21;
console.log(`value:${ellie.age}, type: ${typeof ellie}`)
//5.Dynamic typing: 선언할 때 어떤 타입인지 선언하지 않고 할당된 값에 따라서 변경될 수 있다 
// 다수의 엔지니어들이 다이나믹 타이핑 때문에 고생하기도 한다 

let text = 'hello';
console.log(`value:${text}, type: ${typeof text}`)
text = '1';
console.log(`value:${text}, type: ${typeof text}`)
text = '7' + 5;
console.log(`value:${text}, type: ${typeof text}`)
text = '8' /'2';
console.log(`value:${text}, type: ${typeof text}`)