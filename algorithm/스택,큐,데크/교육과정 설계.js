// function solution(need, plan){

//   let answer = 'YES';

//   let queue = need.split('');
  
//   for( let x of plan){
// // 
//     if (queue.includes(x)){
//       if(queue.shift() !==x){
//         return 'NO';
//       }
//       else continue;
//     }
//   }

//   return answer;
// }


function solution(need,plan){

  let answer = 'YES';  

  let queue = need.split(''); //   //선입 선출 방법으로 queue 로 선언  need을 배열로 변환하여 세팅 


  for(let p of plan ){
    if(queue.includes(p)){ // queue 에 p 과목이 있다면
      if(p !== queue.shift()){
        return 'NO';
      }  // p 에 존재하지만 queue에 들어가있는 순서와 맞지 않는 다면 NO 출력 
      else continue; // 존재도하고 순서도 같다면 다음을 진행! 
    }
    
  }

  if(queue.length!==0){ //  // 교육 일정을 다 돌았는데도 스택에 과목이 남아있다면 'NO'로 출력 
    return 'NO';
  }
  return answer;
}




console.log(solution("CBA","CBDAGE")); // yes
console.log(solution("CBA","CBDBAGE")); // yes
console.log(solution("CBA","CGEADB")); //no
console.log(solution("ABC","ABDEFG")); //NO