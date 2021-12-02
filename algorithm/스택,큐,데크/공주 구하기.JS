// function solution(n,k){

//   let answer ; 

//   let queue = Array(n)
//     .fill(0)
//     .map((v, i) => i + 1);

//   while(queue.length){
//     for( let i = 0; i<k;i++){
//       queue.push(queue.shift());
//     }
//     queues.shift();
//     if(queue.length ===1){
//       answer = queue.shift();
//     }
//   }
//   return answer;
// }


// function solution(n,k){

//   let answer = 0;

//   let stack = Array(n).fill(1).map((v,i)=> i+1); // n 만큼의 왕자 배열 생성 후 번호 배정

//   while(stack.length){ // n 만큼 돌면서 순서대로 번호를 외친다 
//     for(let i = 0 ; i<k-1 ; i++){ 
//       stack.push(stack.shift()); // 1 번째 ~ k - 1 번째 까지 해당하는 번호이므로 제외 대상이 아니기에 스택의 제일 뒤로 보내준다 
//     }
//     stack.shift(); // 특정 숫자 k에 해당하는 왕자이므로 제외 
  
//   if(stack.length === 1) answer = stack.shift(); // 마지막까지 남은 왕자의 번호를 리턴 
//   }
//   return answer;
// }   



function solution(n,k){

  let queue = Array(n).fill().map((v,i) => v = i+1);

  let cnt = 1;


  while(queue.length > 1){
    if(cnt<k){
      queue.push(queue.shift());
      cnt++;
    }

    console.log(queue);

    if(cnt===k){
      queue.shift();
      cnt=1;
    }
  }
  
  return queue[0];
}

console.log(solution(8,3));