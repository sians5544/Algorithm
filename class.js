'use strict';
// 클래스란 
// 연관있는 데이터들과 함수를 묶어논 것(fields와 methods를 묶어놓은 것 )
// 붕어빵을 만들수 있는 틀
// class: template(틀) 
// object : instance of a class
// 이 틀 클래스를 이용해서 데이터를 넣어서 만드는것이 바로 object 이다 
//  SE6 부터 시작됐고, 기존에 존재하던 프로토타입이 추가된 것이다 


//1.class declarations

class Person{

    //constructor
    constructor(name,age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
console.log(ellie.speak());

//2.Getter and Setters

class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; // this.age 는 getter age를  age는 setter을 호출하는 것이다.
    }

    get age(){
        return this._age;
    }

    set age(value){

        // if( value < 0 ){
        //     throw Error("age can not be negative");
        // } 이렇게 공격적으로 써도 되지만 

        this._age = value < 0 ? 0 : value;
    }   
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age);

// 3. Fields (public, private)

class Experiment{
    publivField = 2; // 생성자를 쓰지 않고 필드를 정의할수 있는데 이렇게 쓰면 public 
    #privateField = 0; // 클래스 내부에서만 값이 보여지고 변경이 가능하지만 외부에서는 그럴수 없다는 의미 

}

const expeiment = new Experiment();
console.log(expeiment.publivField);
console.log(expeiment.privateField); // log 에서 undefined로 출력되는것을 확인할 수 있다 


//4.Static poperties and methods
// 클래스가 가지고 있는 고유의 값과 반복적으로 사용할수 있는 애들에 static을 붙이면
// 클래스 자체에 붙여있는 애들이다 

class Article{
    static publisher = 'Dream Coding';

    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }

}

const article1 = new Article();
const article2 = new Article();

console.log(Article.publisher); //static 변수에 접근하려면 클래스명.변수명 으로 지정해야됨
Article.printPublisher()// static 메서드도 마찬가지로 클래스자체로 접근한다 
//object에 상관없이 클래스에서 공통적으로 쓸수 있는거라면 이걸 쓰는게 좋다 
// 그러면 메모리 자체에도 효율적으로 쓸수 있음!

//5. 상속 다양성 
// Inheritance 
// a way for one class to extends another calss


class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;

    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{

    draw(){
        super.draw();
        console.log('ㅅ');
    }
    //overrding 
    getArea(){
        return (this.width * this.height) /2 ; 
    }
}

const rectangle  = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle  = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceof 
// 왼쪽에 있는 오브젝트가 오른쪽에 있는  클래스의 오브젝트인지
// 오르쪽 클래스에 의해서 만들어진 아이인지 아닌지 true, false로 출력됨 
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);



