function solution(arr,start){

  let answer;
    
  let checkqueue = Array(arr.length+1).fill(0);
  
  let queue = [];
  
  let len = arr.length;
  
  function BFS(){
      
      queue.push(start);
      checkqueue[start] = 1;
      
      while(queue.length){
          
          let nx = queue.shift();
          
        for(let i = 1; i <=arr[nx]; i++){

          let right = nx + i;

          if (arr[right] === 0) return true;
          
          if(right <=len-1 && checkqueue[right]===0){
              queue.push(right);
              checkqueue[right] = 1;
          }
          else{
              
              let left = right - len;

              console.log(left);

              if(arr[left] === 0 ) return true;

              if(left >=0 && checkqueue[left]===0){
                  queue.push(left);
                  checkqueue[left] = 1;
              
              }
          } 
        }           
      }
  }
  
  answer = BFS();
  if(answer === undefined){
      answer = false;
  }
  
  return answer;
}

console.log(solution([0,1],1));
console.log(solution([4,2,3,0,3,1,2],5));
console.log(solution([4,2,3,0,3,1,2],0));