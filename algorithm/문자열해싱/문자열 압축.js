function solution(s){

  let answer ="";

  let hash = new Map();

  for(let x of s){
    hash.set(x,(hash.get(x)||0) +1);
  }

  console.log(hash);

  for(let [key ,value] of hash){
    if(value > 1){
      answer+=key+value;
    }
    else{
      answer+=key;
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"));