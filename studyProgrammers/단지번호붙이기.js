



function solution1(n,nums){

  let dx = [-1,0,1,0];
  let dy = [0,-1,0,1];

  let answer = []; // 단지 수를 출력하기 위한 배열 
  let cnt = 0;

  for(let i = 0; i < nums.length; i++){
    for(let j = 0 ; j < nums.length; j++){
      let flag = true;
      for(let k = 0 ; k < 4; k++){

        let nx = i + dx[k];
        let ny = j + dy[k];

        if(nx <=0 && ny <=0 && nx >=n && ny >=n && nums[i][j] === 0 ){
          flag = false;
          break;
        }

        if(flag){
          cnt ++;
        }
      }
    }
  }
}

function solution(land) {
  let answer = 0,max = 0;
  let number;
  
  for(let i = 0; i < land.length; i++){
      
      for( let j = 0 ; j< 4 ; j++){

        if(max < land[i][j] && (number!==j && i !== 0)) {
          max = land[i][j];
          console.log(max);
          number= j ; 
        }
        
      }
      answer+= max;
  }
  return answer;
}



function solution2(land){
  let answer = 0;

  for ( let i = 1 ; i < land.length ; i++){

    land[i][0]
  }
}
console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));