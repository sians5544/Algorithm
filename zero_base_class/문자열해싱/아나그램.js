function solution(s1,s2){

  let answer = "YES";

  let hash = new Map();

  for( let s of s1){
    hash.set(s,(hash.get(s) || 0)+1);
  }

  for(let x of s2){
    if(hash.has(x) && hash.get(x) !==0){
      hash.set(x, hash.get(x)-1);
    }
    else return "NO";


  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));