//뒤에있는 기능이 먼저 개발될 수 있지만 앞에 있는 기능이 배포될 때 함께 배포
// 각 배포마다 몇 개의 기능이 배포 되는지를 return 
// progresses 는 각 기능의 작업 현황 
function solution(progresses, speeds) {
  var answer = [];
  
  let queue = [];
  
  let count = 1; // 배포되는 기능 카운트
  let value = 0;
  
  for(let i = 0; i<progresses.length; i++){
      let day = Math.ceil((100 - progresses[i]) / speeds[i]);
      queue[i] = day;
  }

  while(queue.length){
      
      let check = queue.shift();
      
      while(check >= queue[0]){
          count++;
          queue.shift();
      } // 앞에 있는 기능이 더 늦게 개발되는 경우를 count 

      answer.push(count);
      count=1;
  }
      
  
  return answer;
}