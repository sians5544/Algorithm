// function solution(s, e){

//   let answer = [];

//   let ch = Array(100001).fill(0);

//   let queue = [];

//   function BFS(){
//     queue.push(s);
//     ch[s] = 1;
//     let L = 0; // 처음에는 0 레벨 

//     while(queue.length){
//       let len = queue.length; // q 안에 들어가는 개수만큼 for문을 돌기
//       for(let i = 0; i <len; i++){
//         let x = queue.shift();
//         for(let nx of [x-1, x+1, x+5]){
//           if(nx === e) return L+1; // 나오고 있는 node 의 자식들이기 때문에 +1
//           if(nx > 0 && nx <=10000 && ch[nx]===0){
//             ch[nx] = 1;
//             queue.push(nx);
//           }
//         }
//       }
//       L++;
//     }
//   }

//   answer = BFS();
//   return answer;
// }

// function solution(s,e){

//   let answer = 0;
//   let checkbox = Array(10001).fill(0); // queue의 중복을 방지하기 위한 메모리제이션을 하기 위한 배열 생성 

//   function BFS(){
//     let queue = [];
//     checkbox[s] = 1;
//     queue.push(s); // 현수의 시작 위치 queue에 넣음 
    
//     let L = 0; // 트리의 레벨을 나타내는 변수 

//     while(queue.length){
//       let len = queue.length;

//       for(let i = 0; i<len; i++){ //  queue  안에 들어가는 개수만큼 for문을 돌기
//         let node = queue.shift(); 
//         for(let child of [node+1, node-1, node+5]){ // 현수가  한번의 점프로  이동할 수 있는 거리값에 해당하는 하위 노드 생성 

//           // queue 에 넣기 전에 해당 자식 노드가 송아지의 위치와 같은지 확인 
//           if(e === child)  return L+1;  // 나오고 있는 node 의 자식들이기 때문에 +1 

//           if(child > 0 && child < 10001 && checkbox[child] ===0){ // 수직선 상의 좌표점 안에 해당되는지, 한번 queue에 들어가서 계산한 적이 있는 node라면 계산하지 않기 위해 checkbox 확인 
//             queue.push(child); // 중복값이 아니라면 queue에 추가  및 체크박스 1로 체크
//             checkbox[child] = 1;
//           }
//         }
//       }
//       L++; // 다음 레벨로 넘어간다 
//     }
//   }
//   answer = BFS();
//   return answer;
// }


function solution(s,e){

  let answer = 0;
  let check = Array(10001).fill(0);

  function BFS(){
    
    let queue = [];
    let level = 0;
    queue.push(s);
    check[s] = 1;

    while(queue.length){
      for(let i = 0; i<queue.length; i++){
        let x  = queue.shift();
        for(let vnum of [x-1,x+1,x+5]){
          if(vnum===e)return level+1;
          if(vnum > 0 && vnum <10001 && check[vnum] === 0){
                check[vnum] = 1;
                queue.push(vnum);
          }
        }
      }
      level++;
    }
  }

  answer = BFS();
  return answer;
}


console.log(solution(8,3));