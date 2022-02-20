'use strict';

function solution(words){

  let answer = [];
  let hash = new Map();

  for(let x of words[0]){
    hash.set(x,(hash.get(x) || 0) +1);
  }

  for( let i = 1 ; i < words.length; i++){
    
    let hash2 = new Map();
    
    for(let x of words[i]){
      hash2.set(x , (hash2.get(x) || 0) +1);
    }
  }
  return answer;
}

console.log(solution(["steasue", "sasseysu", "kseseas"]));