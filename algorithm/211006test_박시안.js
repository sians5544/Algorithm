
// 'use strict';

function solution(str){
  let answer = "";
  let x;
  let backuphash = new Map();
  
  str = str.sort();
 
  for(let i = 0; i <str.length; i++){
    
    let hashs = new Map();
    
     for(let x of str[i]){
         hashs.set(x,(hashs.get(x) || 0) +1);
         backuphash.set(x,(backuphash.get(x) || 0) +1);
       }
      
      if(backuphash.has(x) && backuphash.get(x) > hashs.get(x)){
           backuphash.set(x , hashs.get(x));
         }
         else{
          backuphash.set(x,(hashs.get(x) || 0) +1);
     }
  }
  

  for( let key of backuphash){
    answer = key;
  }
  return answer;
}

console.log(solution(["ackky", "kabck", "yokkcs"]));

console.log(3)

