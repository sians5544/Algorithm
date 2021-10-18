
// 이진트리 레벨 탐색( 넓이 우선 탐색 BFS)
//Queue 를 이용하여 코드를 다시 짜보자 최대한 이해한 바로 짜보도록


function solution(){

  let answer = "";

  function BFS(){
    let queue = [];
    queue.push(1);

    while(queue.length){

      let v = queue.shift();
      answer+= v+"";
      for( let nv of [v*2,v*2+1]){
        if(nv > 7) continue;
        queue.push(nv);
      }

    }
    
  }
  BFS();

  return answer;
}

console.log(solution());