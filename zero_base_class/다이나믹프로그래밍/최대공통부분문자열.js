// 이거 면접에서 칠판에 설명하라고 한적 있다 

//LCS2 백준 문제 길이뿐만 아니라 문자열 뽑아 내는거 까지 해봐라 
function solution(s1,s2){

  let answer = 0;

  let len1= s1.length;
  let len2= s2.length;

  let dy = Array(10001);

  for(let i = 0; i<len2; i++){
    dy[i] = Array(10001);
  }

  for(let i = 1; i<len1; i++ ){
    for( let j =1; j<=len2; j++){
      
    }
  }

  return answer;
}


console.log(solution("acbehf","abefc"));