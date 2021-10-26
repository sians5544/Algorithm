function solution(s){
  let answer = "";
  let hash = new Map();

  for(let x of s){
    hash.set(x,(hash.get(x)|| 0) + 1);
  }

  let maxV = 0;  

  
  for( let [key,value] of hash){
    if(maxV < value){
      maxV = value;
      answer = key;
    }
  }

  return answer ;
}

console.log(solution("BACBACCACCBDEDE"));