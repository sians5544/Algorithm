'use strict';


// function solution(n){

//   let answer = [];
//   let number = n;
//   n = n+"";

//   n = n.split('');

//   let ch=[];
//   let tmp=[];

//   for (let i = 0; i < n.length; i++) {
// 		ch[i] = 0;
// 	}

//   function DFS(L){
    
//       if(L===n.length){
//           let num = Number(tmp.slice().join(''));
//           answer.push(num); 

//       }
//       else{
//           for(let i=0; i<n.length; i++){
//               if(ch[i]===0){
//                   ch[i]=1; 
//                   tmp.push(Number(n[i]));
//                   DFS(L+1);
//                   ch[i]=0; 
//                   tmp.pop();
//               }
//           }
//       }
//   }
//   DFS(0);

//   answer.sort();

//   for( let i = 0 ; i< answer.length; i++){
//     if(answer[i]==number){
//       if(answer[i]> answer[i+1]) return -1;
//       else return answer[i+1];
//     }
//   }

//   return answer;
// }




function solution(n){

  let answer = Number.MAX_SAFE_INTEGER;
  let tmp = [];
  let ntos = String(n).split("").map(Number);
  let len = ntos.length;
  let check = Array(len).fill(0);

  function DFS(v){
    if(v === len){
      let num = Number(tmp.join(""));
      if(num > n){
        answer = Math.min(answer,num);
      }
    }else{
      for(let i = 0; i<len; i++){
        if(check[i] === 0){
          check[i] = 1;
          tmp.push(ntos[i]);
          DFS(v+1);
          tmp.pop();
          check[i] = 0;
        }
      }
    } 
  }

  DFS(0);

  if(answer === Number.MAX_SAFE_INTEGER){
    return -1;
  }
  return answer;
}

console.log(solution(123));
console.log(solution(156)); //165
console.log(solution(330)); //-1
console.log(solution(27711)); //71127
console.log(solution(54312)); //54321
console.log(solution(765423)); //765432
console.log(solution(33051)); //33105
console.log(solution(6543721)); //6547123
console.log(solution(3902830)); //3903028
console.log(solution(54321)); //-1
console.log(solution(54300)); //-1
