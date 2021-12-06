//XML : HTML 과 같이 태크들을 이용해서 나타내는 데이터를 나타내는 방법 
//JSON 
// 모바일에서 데이터를 주고 받을 때 
// 데이터를 주고 받을 때 쓸수 있는 가장 간단한 포맷
// 사람 눈으로 읽기도 편하고 
// object 처럼 key와 value로 이루어져 있음
// 직렬화하고 데이터를 전송할때
// 프로그램 언어와 플랫폼에 상관없이 오브젝트 변환하고 제이슨으로 변화한다 


//공부법! 
// 오브젝트를 어떻게 직렬화해서 제이슨으로 변환할지
// 직렬화된 제이슨을 어떻게 오브젝트로 다시 변환할건지를 공부하면된다!

//1.Object to JSON
let json = JSON.stringify(['apple','banana']); // 오브젝트를 제이슨으로 변환  
console.log(json); // 제이슨은 " " 더블쿼트로 들어가있는걸 확인할수 있음 

//제이쓴이라는 오브젝트를 이용하면됨
// Stringify(obj)


//토끼라는 오브젝트를 생성

const rabbit = {
    name :'tori',
    color:'white',
    size : null,
    birthDate : new Date(),
    //Symbol: Symbol("id"),
    jump: () =>{
        console.log(`${this.name} can jump`);
    }, //이 함수는 제이슨에 포함되지 않는다 오브젝트의 데이터가 아니기 때문에 제외됨
    //symbol 같은 자바스크립트에만 있는 언어도 제이슨에 포함되지 않는것을 확인할 수 있다 
};

json = JSON.stringify(rabbit);
console.log(json);

// 변환되는걸 통제하고 싶다면 
//원하는 프로폴티만 골라서 제이슨으로 변환가능
json = JSON.stringify(rabbit, ['name','color','size']);
console.log(json);
//replacer 사용 
json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key} , value: ${value}`);
    return key === 'name' ? 'ellie' : value;  // key가 name 이라면 ellie로 제이슨 변환 아니면 그냥 value로 변환 
});
console.log(json);

//2. JSON to Object
//parse(Json)

console.clear();

json = JSON.stringify(rabbit);
const obj = JSON.parse(json , (key,value) =>{
    console.log(`key: ${key} , value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//토끼라는 오브젝트를 제이쓴으로 변경할 때 jump 포함안되어있었기 때문에
// 이 제이쓴을 다시 오브젝트로 변경할 때도 포함이 안된다
//obj.jump(); -> 이거 불러오면 에러남 

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // 이 birthDate 는 string이 되어있기 떄문에  다시 오브젝트로 가져올때도 string으로 할당 

