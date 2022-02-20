
'use strict';


//3중 포문 써야됨 
// 1학년부터 5학년까지 지내오면서 한번이라도 같은반이었던 사람이 가장 많은 사람을 임시반장


function solution3(students){

  let cnt = 0 ,max = 0 , answer =0;
  
  for(let i = 0; i<students.length; i++ ){
  for( let j = 0;  j < students.length; j++){
    for( let k = 0; k < 5 ; k++){ //자기가 자기 자신 돌려도 된다 신경쓰지마라  ,학년을 제일 안쪽으로 돌려라 

      console.log(students[i][k] , students[j][k]);
      if(students[i][k] === students[j][k]){
        cnt++;
        break;
      }

    }
  }
    if(max < cnt){
      max = cnt;
      answer = i;
    }
  }

  return answer;
}


console.log(solution3([[2, 3, 1, 7, 3], [4, 1, 9, 6, 8], [5, 5, 2, 4, 4], [6, 5, 2, 6, 7], [8, 4, 2, 2, 2]]));