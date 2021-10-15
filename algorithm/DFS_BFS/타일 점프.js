function  solution(nums){

  let answer = 0;
  let queue = [];
  
  let ch = Array(n.length).fill(0);

  function BFS(){
    queue.push(0);
    ch[0] = 1; // 현수가 0번 인덱스에 있음 

    while(queue.length){
      let len = queue.length;
      for(let i = 0; i<len; i++){
        let x = queue.shift();
        for( let j = 1 ; j<=nums[x]; j++){
          let nx = x+j;
          if( nx == n-1) return L +1;
          if(nx > 0 && nx<x && ch[nx]===0){
            ch[nx] = 1;
            queue.push(nx);
          }
        }
      }
      L++;
    }
  }

  BFS();
  if(answer== undefined) answer =-1;
  return answer;
}


console.log(solution([2,2,0,2,1,1]));