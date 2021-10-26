'use strict';

// function solution(s,t){
//   let answer = 0 ,left = 0;

//   let hash = new Map();

//   for(let x of t){
//     hash.set(x, (hash.get(x) || 0) -1);
//   }

//   let len = t.length-1;

//   for(let i = 0; i < len; i++){
//     hash.set(s[i], (hash.get(s[i]) || 0)+1);
//     if(hash.get(s[i]) === 0){
//       hash.delete(s[i]);
//     }
//   }

//   for( let right = len ; right < s.length ; right++){

//     hash.set(s[right],(hash.get(s[right]) || 0 ) +1);
//     console.log(hash);
//     if(hash.get(s[right]) === 0){ // s의 문자 중 t와 겹치는 부분이 있나?
//       hash.delete(s[right]); // 있다면 삭제 
//     }
//     if(hash.size ==0 ) answer++; //삭제된것들이 공통 문자열이기 떄문에 삭제 카운트 
//     hash.set(s[left], (hash.get(s[left]) || 0) -1); // left는 더이상 비교하지 않는 애들 -1 해준다 
//     if(hash.get(s[left]) === 0){ // 감소시킨 값이 0이되면 더 이상 키가 존재하지 않는 것 
//       hash.delete(s[left]);
//     }
//     left++;
//     console.log(hash);
//   }

//   return answer;
// }

function solution(s,t){
  let answer = 0,left = 0;
  let hash = new Map();
  let tlen = t.length;

  for(let x of t){
    hash.set(x,(hash.get(x)|| 0) -1);
  }

  for(let i = 0; i<t.length-1; i++){
    hash.set(s[i],(hash.get(s[i])|| 0 )+1);
    if(hash.get(s[i]) === 0) hash.delete(s[i]); // 검사 다했으니까 삭제해 
  }

  for(let right = tlen-1; right<s.length; right++ ){
    
    hash.set(s[right], (hash.get(s[right]) || 0 )+1);
    if(hash.get(s[right]) === 0)hash.delete(s[right]);
    if(hash.size=== 0) answer++;

    hash.set(s[left],(hash.get(s[left]) || 0) -1);
    if(hash.get(s[left]) === 0 ) hash.delete(s[left]);
    left++;

  }
  return answer;
}

console.log(solution("bacacbcba","abc"));