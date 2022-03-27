// 'use strict';

// function solution(nums){
//   let answer  = false;
//   let len = nums.length;

//   if(len ===1) return true;

//   let check = Array(len+1).fill(0);

//   function BFS(){
      
//     let queue = [];

//     queue.push(0);
//     check[0] = 1;

//     while(queue.length){

//     let nx = queue.shift();
//     console.log(nx);
//     for(let j=1; j<=nums[nx];j++){

//       let move = nx + j;

//       if(move === len-1) return true;

//       if(move > 0 && move <len && check[move] === 0){
//               queue.push(move);
//               check[move] = 1;
//         }

//     }
//   }
      
//   }
    
//     answer = BFS();
//     if(answer === undefined){
//       return false;
//     }
//     return answer;
// }


function solution(nums){

  let answer ;
    
  let len = nums.length;
  
  let check = Array(len+1).fill(0);
  
  let queue = [];
  

  function BFS(){
      
    let level = 0;
      
      queue.push(0);
      check[0] = 1;
      
      while(queue.length){
          
          let nx = queue.shift();
          
          for(let j =0; j<nums.length;j++){
          for(let i = nums[nx]; i<=nums[nx]; i++){
          
              let move = nx + i;
              
              if(check[move] === 0 && move<len && move>0){
                  check[move]=1;
                  queue.push(move);
              }
              if (move === len-1) return  level;

              console.log(`${queue} : ${level}` );
          }
      }
      level++;
    }
  }
  
  
  answer = BFS();
  
  return answer;
}
console.log(solution([2,3,1,1,4]));
//console.log(solution([3,2,1,0,4]));
console.log(solution([1,2,1,1,1]));
//console.log(solution([3,0,8,2,0,0,1]));
