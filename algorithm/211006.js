'use strict';

console.log('test');

let array = [6,7,8,23,31];
const result = array.filter((value) => value > 1 &&  value % 2 !== 0 );
console.log(result);

//소수 판별 문제 
// function isPrime(num) {
//   if(num === 2)
//   return true;

//   for(let i = 2; i<=num/2; i++){
//     if(num % i === 0){
//       return false;
//     }
//   }
//   return true;
// }

// function solution(nums){

//   let answer = nums.filter((val) => {

//     if(val === 2)
//     return true;

//     for( let i = 2; i<=val/2; i++){
//       if(val % i === 0 ){
//         return false;
//       }
//     }
//       return true;
//     });

//   return answer;
//   }

//console.log(solution([6,7,21,23,31]));


function solution1(num){


  for(let i = 0; i <num.length; i++){
    for(let j = 0; j < (num.length - i)-1 ; j++){
      nums[j] = nums[j+1] -nums[j];
    }
  }

  result nums(0,num.length-1);
}

console.log(solution1([5,3,7,9,-2]));





function solution(s, t){
  let answer=0;
  let sH = new Map();
  for(let x of t){
      sH.set(x, (sH.get(x) || 0)-1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      sH.set(s[i], (sH.get(s[i]) || 0)+1);
      if(sH.get(s[i])===0) sH.delete(s[i]);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
      if(sH.get(s[rt])===0) sH.delete(s[rt]);
      if(sH.size===0) answer++;
      sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "abc"));