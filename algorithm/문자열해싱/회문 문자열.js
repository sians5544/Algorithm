function solution(s){
  s = s.toLowerCase();

  if(s.split("").reverse().join("") === s){
    return "YES";
  }
  else{
    return "NO";
  }

}

console.log(solution("abbc"));
