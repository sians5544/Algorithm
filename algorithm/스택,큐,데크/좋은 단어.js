// function solution(s, m) {
//   let answer=0;
//   let queue=Array.from(Array(21), ()=>Array());  
//   for(let i=0; i<s.length; i++){
//       let len=s[i].length;
//       while(queue[len].length>0 && (i-queue[len][0])>m){ //(i-queue[len][0])>m  순위를 비교 
//           queue[len].shift(); 
//       }
//       answer+=queue[len].length;
//       queue[len].push(i); //뒤에 다른 단어들도 비교해야하니까 얘네도 push 한다 
//   }
//   return answer;
// }


function solution(s,m){

  let answer = 0;

  let stack = Array.from(Array(21),() => Array()); // 단어의 길이를 인덱스로 가진 20을 넘지 않은 스택 생성

  for(let i = 0; i< s.length; i++){

    let len = s[i].length;
    while(stack[len].length &&  i - stack[len][0] > m){ // m 보다 크므로 좋은 값이 아니다 

      stack[len].shift()// 맨 앞자리 가 제일 큰 값이다 ( queue 구조는  앞에서부터 채워지기 떄문)
      
    }
    answer += stack[len].length;
    stack[len].push(i);
  
  }
  return answer;
}













console.log(solution(["back", "seen", "big", "good", "size"], 2)); 
console.log(solution(["back", "seen", "good", "size"], 2)); 