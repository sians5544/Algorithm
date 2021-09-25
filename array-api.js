'use strict';
// Q1. make a string out of an array
    {
        const fruits = ['apple', 'banana', 'orange'];
        console.log(fruits.toString());

        //배열에 있는 모든 아이템들을 string형 으로 전달해준다 구분자 넣어서 사용해도됨
        const result = fruits.join();
        console.log(result);
    }

  // Q2. make an array out of a string
    {
        const fruits = '🍎,🥝,🍌,🍒';
        
        const arr = fruits.split(','); 

       /* for(let fruit of fruits.split(',')){
            arr.push(fruit);      
        }*/

    console.log(arr);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    console.log(array.reverse())
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result  = array.slice(2);
    console.log(`Q4:${result}`);
    array.shift();
    array.shift();
    console.log(array);
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
  {
     for(let student of students){
         if(student.score === 90){
             //console.log(`find score 90:${student.name},${student.age},${student.enrolled},${student.score} `)
         }
     }

    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
    {
    
        const result = students.filter((student) => student.enrolled === true);

        console.log(result);

    }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]

  {
    const result = students.map((student) => student.score); //배열안의 모든 값들을 우리가 원하는 다른 방식의 데이터로 만들고 싶을 때 사용 
    // for(let student of students){     
    //     arr.push(student.score);       
    // }
    // console.log(arr);

    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    //이 조건 중 하나라도 있다면 true
    const result1 = students.some((student) =>student.score < 50);
    console.log(result1);

     //이 조건이 모두 해당한다면 
     const result2 = students.every((student) =>student.score >= 50);
     console.log(result2);
 

  }
  
  // Q9. compute students' average score
  {
    //   let average = 0;

    //   for(let student of students){
    //         average +=student.score; 
    //   }

    //   console.log(average / students.length);

    const result = students.reduce(function(previousValue,currentValue){
        return previousValue + currentValue.score;
    } ,0) /students.length; // 0부터 시작해서 순차적으로 출력 
    
    console.log(result); //reduceright 은 거꾸로 배열을 시작하는 것 
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students.map((student) => student.score).join();
    console.log(result);
    //console.log(arr.toString());
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
   
    const result = students.map((student) => student.score).sort((a,b) => a - b ).join();
    console.log(result);
  }