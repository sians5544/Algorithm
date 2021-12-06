
// Q1. make a string out of an array , 배열을 하나의 스트링으로 묶어내라 
{
  // join은 설정한 구분자로 배열을 합쳐준다 
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits);
  const result= fruits.join('^');
  console.log(`Q1 :${result}`);
}

// Q2. make an array out of a string
// 문자열들을 배열로 생성하는 방법  , 구분자를 반드시 주저야함 
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 배열 값 자체를 변경 
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const result = array.slice(2); // splice는 배열 자체에서 삭제 , sclice는 기존 배열에 영향을 주지않음 
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// 내가 콜백 함수를 만들어서 전달해야한다 
// find 는 첫번째로 찾아진 요소를 리턴한다 -> true , 해당하는 요소가 true 애를 발견하면 그 요소를 리턴해준다 
// 배열의 있는 요소들이 하나씩 순차적으로 호출이되는데


{

  const result = students.find(function(student){

    return student.score === 90; // 학생의 점수가 90인지 아닌지를 리턴 
  });
  // const result = students.filter((student) => student.score >=90 );
  console.log(result)
}

// Q6. make an array of enrolled students
// enrolled 가 true인 학생들의 배열을 만들어서 return 
{
  const result = students.filter(function(student){
    return student.enrolled === true;
  });

  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 점수만 뽑아와서 배열로 만들기 
// map () : 배열안에 들어있는 요소 한가지 한가지들을 다른 애들도 변경해주는 것이다 
// 콜백 함수를 거쳐서  가공되어진 다른 값으로  새로운 배열을 생성 시키는 것이다 
{
  const result = students.map(function(student){
    return student.score;
  });

  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 학생들 중에 점수가 50점 보다 낮은 학생이 있는지 없는지를 확인하라
//  some -> 배열의 요소 중에 콜백 함수의 값이 true 가 되는 애들이 있는지 없는지를 확인하는 것 
// 하나라도 조건에 만족하면 true 
// every() -> 배열에 있는 요소들이 모두 조건에 만족해야지 true 를 리턴 시킨다 
{
  const result  = students.some((student) => student.score <50);
  console.log(result);
  const result2  = !students.every((student) => student.score >=50);
  console.log(result2);
}

// Q9. compute students' average score
// 학생들의 평균 점수를 구하는 것 
// reduce()는 배열의 요소들을 모두 함께 누적하고 모아 놓을 때 사용 
//    prev -> 이전의 콜백함수에 전달되어졌던 값이 넘어오고 curr 배열의 아이템을 순차적으로 전달 받는다.
// 배열 하나하나가 curr에 전달이 되는데 return 하는 값들이 순차적으로 prev로 가는 것이다 
//reduceRight 은 배열의 맨 뒤에서 부터 검사 
{
  
const result  = students.reduce((prev, curr) =>{
  console.log('------------');
  console.log(prev);
  console.log(curr);
  return prev + curr.score;
},0);

console.log(result / students.length);
}

// Q10. make a string containing all the scores
// 학생들의 모든 점수를 스트링으로 변환해서 만든다 

// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();

  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// 학생들의 점수를 정렬해서 낮은순서 (즉 오름차순으로 )정렬해서 스트링으로 정렬 
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score).sort((a,b) =>b - a).join();
  console.log(result);
}
c