// function  solution(nums){

//   let answer = 0;
//   let queue = [];
  
//   let ch = Array(n.length).fill(0);

//   function BFS(){
//     queue.push(0);
//     ch[0] = 1; // 현수가 0번 인덱스에 있음 

//     while(queue.length){
//       let len = queue.length;
//       for(let i = 0; i<len; i++){
//         let x = queue.shift();
//         for( let j = 1 ; j<=nums[x]; j++){
//           let nx = x+j;
//           if( nx == n-1) return L +1;
//           if(nx > 0 && nx<x && ch[nx]===0){
//             ch[nx] = 1;
//             queue.push(nx);
//           }
//         }
//       }
//       L++;
//     }
//   }

//   BFS();
//   if(answer== undefined) answer =-1;
//   return answer;
// }


// 배열의 첫번째 타일이 현수의 집
// 배열의 맨 끝 오른쪽이 상점이다 


function solution(nums){

  let answer = 0;
  let queue = [];

  let checkbox = Array(nums.length).fill(0); 

  function BFS(){
  
     // 현수가 서있는 위치
    queue.push(0);
    checkbox[0] = 1;

    let level = 0;

    while(queue.length){
    
      let len = queue.length;
      
      for(let i =0; i<len; i++){
        
        let nx = queue.shift();
        //console.log(nx);

        for(let j = 1; j <=nums[nx]; j++){

          let move = nx + j;
          console.log(`${move} : ${nums[nx]}`);
          if(move === nums.length-1) return level +1;

          if(move > 0 && move <nums.length && checkbox[move] === 0){
            queue.push(move);
            checkbox[move] = 1;
          }
        }
        
        console.log(`${nx} : ${queue}`);

      }

      level++;
    }

  }

  answer = BFS();

  if(answer === undefined){
    return -1;
  }

  return answer;
}


console.log(solution([2,2,0,2,1,1]));
console.log(solution([1,0,1,1,3,1,2,1]));