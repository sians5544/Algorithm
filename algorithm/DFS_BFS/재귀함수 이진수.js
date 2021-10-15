function solution(n){
  let answer = [] , tmp = [];

  function binary(n){

    if(n == 0) return;
    else{
      binary(parseInt(n/2));
      tmp.push(n%2);
    }

  }

  binary(n);

  for(let i=0; i<tmp.length; i++){
    answer=answer*10+tmp[i];
}

  return answer;
}

console.log(solution(11));