'use strict';


function solution(str){

  let answer = 'YES';
  let pan =  Array.from(Array(9), () => Array(30).fill(9));
  let nums= Array(10).fill(1).map((v, i) => i + 1);

  for(let i = 0; i< 9; i++){
    let bset1 = new Set();
    let bset2 = new Set();
    for(let j =0; j <9; j++){
      bset1.add(str[i][j]);
      bset2.add(str[j][i]);
    } 
    if(bset1.size!==9 || bset2.size !==9){
      return 'NO';
    }
  }

  for (let i = 0; i< 9; i++){
    for( let j =0; j< 9; j++){
      
      let rowindex = i/3 *3; 
      let colindex = j/3 *3;
      
      for(let i = 0; i<3; i++){ 
        let bset1 = new Set();
        let bset2 = new Set();

        for(let j =0 ; j<3; j++){
          bset1.add(str[rowindex+i][colindex+j]);
          bset2.add(str[colindex+j][rowindex+i]);
        }

        if(bset1.size!==9 || bset2.size !==9){
          return 'NO';
        }
        
      }
    
    }
  }
  return answer;
}

let str =[[1, 4 ,3 ,6 ,2, 8, 5, 7, 9],
[ 5 ,7 ,2 ,1 ,3 ,9, 4, 6 ,8],
[9 ,8, 6, 7, 5, 4 ,2 ,3, 1],
[3, 9, 1, 5, 4, 2, 7, 8, 6],
[4, 6, 8, 9, 1, 7, 3, 5, 2],
[7, 2, 5, 8, 6, 3, 9, 1, 4],
[2, 3, 7, 4, 8, 1, 6, 9, 5],
[6, 1, 9, 2, 7, 5, 8, 4, 3],
[8, 5, 4, 3, 9, 6, 1, 2, 7]]
console.log(solution(str));

