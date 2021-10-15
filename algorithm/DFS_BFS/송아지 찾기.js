function solution(s, e){

  let answer = [];

  let ch = Array(100001).fill(0);

  let queue = [];

  function BFS(){
    queue.push(s);
    ch[s] = 1;
    let L = 0; // 처음에는 0 레벨 

    while(queue.length){
      let len = queue.length; // q 안에 들어가는 개수만큼 for문을 돌기
      for(let i = 0; i <len; i++){
        let x = queue.shift();
        for(let nx of [x-1, x+1, x+5]){
          if(nx === e) return L+1; // 나오고 있는 node 의 자식들이기 때문에 +1
          if(nx > 0 && nx <=10000 && ch[nx]===0){
            ch[nx] = 1;
            queue.push(nx);
          }
        }
      }
      L++;
    }
  }

  answer = BFS();
  return answer;
}


console.log(solution(5,14));