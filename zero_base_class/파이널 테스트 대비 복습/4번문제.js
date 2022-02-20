function solution(s) {
  var answer = 0;

  let cnt = 0;
  let checkbox = Array(100).fill(0);
  let copyArr = s.split("");
  
  function BFS(){
      
      let queue = new Set();
      checkbox[0] = 1;
      queue.add(copyArr[0]);
      
      while(queue.size){
          
          let len = queue.size;
          for(let i = 1; i< s.length; i++){
              if(queue.has(copyArr[i])){
                  cnt++;
              }
              else{
                  queue.add(copyArr[i]);
              }
              
          }
          break;
      }  
  }
  
  BFS();
  answer =  cnt ;
  return answer;
}

console.log(solution("()(()()"));