// function solution(board){  
//   let answer=0;
//   let n=board.length;
//   let dx=[-1, 0, 1, 0];
//   let dy=[0, 1, 0, -1];
//   let dist=Array.from(Array(7), ()=>Array(7).fill(0));
//   function BFS(x, y){
//       let queue=[]; 
//       queue.push([x, y]);
    
//       board[x][y]=1; // 출발점 체크가 필요하다 
//       while(queue.length){
//           let curr=queue.shift();
//           console.log(`${curr} :${queue}`);
//           for(let j=0; j<4; j++){ // 4방향을 확인한다 
//               let nx=curr[0]+dx[j];
//               let ny=curr[1]+dy[j];
//               if(nx>=0 && nx<7 && ny>=0 && ny<7 && board[nx][ny]==0){ // 경계선 안쪽에 있어야하고 방문을 안했어야함 
//                   board[nx][ny]=1;
//                   dist[nx][ny]=dist[curr[0]][curr[1]]+1; // 현재지점에서 =  갈려고 하는 지점  
//                   queue.push([nx, ny]);
//               }
//           }   
//       }
//   }
//   BFS(0, 0);
//   //console.log(dist);
//   if(dist[6][6]===0) return -1; // 0으로 되어있다면 거기 지점을 못갔다는 표시이다 
//   else answer=dist[6][6];
//   return answer;
// }

// function solution(board){

//     let answer = 0;
//     let check = Array(7).fill(0);

//     for(let i = 0; i< 7; i++){
//         check[i] = Array(7).fill(0);
//     }

//     let dx = [-1,0,1,0];
//     let dy = [0,-1,0,1];

//     function BFS(){
//         let queue = [];
//         queue.push([0,0]);
//         board[0][0] = 1;


//         while(queue.length){

//             let space = queue.shift();

//             let len = queue.length;

//             let nx = space[0];
//             let ny = space[1];

//             console.log(nx,ny);

//                 for(let k = 0; k < 4; k++){
                    
//                     let xx = nx + dx[k];
//                     let yy = ny + dy[k];

//                     if(xx >=0  && yy <7 && xx <7 && yy >=0 && board[xx][yy] === 0 ){
//                         board[xx][yy] = 1;
//                         check[xx][yy] = check[nx][ny]+1;
//                         queue.push([xx,yy]);
//                     }
//                 }
            
            
//         }
// }


        
// BFS();

// console.log(check);

// if(board[6][6] === 0){
//     answer = -1;
// }
// else{
//     answer = check[6][6];
// }

// return answer;
// }

let arr=[[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 1], 
[1, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0, 0]];



function solution(arr){

    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];

    let answer = 0;
    
    let check = Array.from(Array(7), () => Array(7).fill(0));

    function BFS(){
        
        let queue = [];
        queue[0]=[0,0];   
        check[0][0] = 0;

        while(queue.length){

            for(let i = 0; i<queue.length; i++){
                
                let target = queue.shift();

                let x = target[0];
                let y = target[1];

                for(let k = 0; k<4; k++){
                    
                    let nx = x + dx[k];
                    let ny = y + dy[k];

                    if(nx >=0 && nx <7 && ny >=0 && ny < 7 && arr[nx][ny] === 0){
                        arr[nx][ny] = 1; // 이거 안하면 계속 돌아감 ㅅㅂ 계속 0인 애들 그대로니까~~~ 계속 탐색 존나함 
                        queue.push([nx,ny]);
                        check[nx][ny] = check[x][y]+1;
                    }
                }
            }
        }


    }

    
    BFS();

    console.log(check[6][6]);
    return answer;
}

console.log(solution(arr));