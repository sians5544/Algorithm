
'use strict';
function solution(board, nums){
  let answer=0, sum=0, num, s1, s2, s3, s4;
  let pos=Array.from(Array(2), ()=>Array(30).fill(0)); 
  let ch=Array.from(Array(5), ()=>Array(5).fill(0));
  for(let i=0; i<5; i++){
      for(let j=0; j<5; j++){
          num=board[i][j];
          pos[0][num]=i;
          pos[1][num]=j;
      } //  판의 좌표를 한번에 기록해서 사용해야지 for문 돌면서 값을 안 찾을 수 있다 
  }
  for(let j=0; j<nums.length; j++){

      let x = nums[j];
      ch[pos[0][x]][pos[1][x]]=1; 
      s1=s2=s3=s4=1;

      if(pos[0][x]===pos[1][x]){
          for(let i=0; i<5; i++){
              if(ch[i][i]===0) s1=0; // 대각선
              break;
          }
      }
      else s1=0; // 대각선 빙고 아니면  0 만들겠다 

      if(pos[0][x]+pos[1][x]===4){ // 대각선 
          for(let i=0; i<5; i++){
              if(ch[i][4-i]===0) s2=0;
          }
      }
      else s2=0;

      for(let i=0; i<5; i++){
          if(ch[pos[0][x]][i]===0) s3=0;//행
          if(ch[i][pos[1][x]]===0) s4=0;//렬
      }
      sum+=(s1+s2+s3+s4); //(1로 체크한 애들 )
      if(sum>=3){  // ==3 으로 넣으면 동시에 대각선들 빙고하면 먹지를 않음 
          answer=j+1;
          break;
      }

  }
  return answer;
}
//console.log(solution([[11, 12, 2, 24, 10], [16, 1, 13, 3, 25], [6, 20, 5, 21, 17], [19, 4, 8, 14, 9], [22, 15, 7, 23, 18]], [5, 10, 7, 16, 2, 4, 22, 8, 17, 13, 3, 18, 1, 6, 25, 12, 19, 23, 14, 21, 11, 24, 9, 20, 15])); //15


// 내가 다시 만들어 보기 

//1. 빙고 판의 좌표를 배열을 만들어서 한번 더
// 기록해야지 for문을 돌면서 값을 안 찾을 수 있음!
// ch 에서 1의 상태는 사회자가 호출한 번호 , 그렇지 않으면 0 의 상태 


function solution2(board, nums){


    let answer = 0 , sum = 0;  
    let s1,s2,s3,s4 ; //  대각선 \ ,/ , 행, 열 각각의 빙고 체크 변수 
    
    

    let pan =  Array.from(Array(2), () => Array(30).fill(0)); //  board의 각각 행과 열의 값들을 인덱스로 기록하기 위한 2차원 배열
    let binggo = Array.from(Array(5),() => Array(5).fill(0)); // 사회자가 부르는 nums 의 값들이 board 에 있는지 체크해주는 2차원 배열


    for(let i = 0; i < 5 ; i++){
        for(let j = 0; j < 5; j++){

            let value = board[i][j]; //
            pan[0][value] = i; // value를 인덱스를 가진 배열에  x 축 값 선언
            pan[1][value] = j;// value를 인덱스를 가진 배열에  y 축 값 선언

        }
    }

    for(let i = 0; i < nums.length ; i++){

        let value = nums[i]; 
        binggo[pan[0][value]][pan[1][value]] = 1; // 사회자가 부른 값의 좌표 값을 가져와 1로 체크 
        s1=s2=s3=s4=1; // 빙고 체크의 기본값을 1로 세팅 (1 : 빙고 ,0: x )

        // \ 대각선 판별 
        if(pan[0][value] === pan[1][value]){ // (0,0) ,(1,1),(2,2) 이 대각선들의 위치이기때문
            for(let i = 0; i < 5; i++){
                if(binggo[i][i] === 0){ // 한개라도 0이라면 반복문 중단 
                    s1= 0;
                }
            }
        }
        else{
            s1 = 0; // 사회자가 부른 값이 대각선 방향이 아니므로 x 표시 
        }
        
        
        if(pan[0][value] + pan[1][value] === 4){ // '/' 대각선은 (0,4) , (4,0) 
            for(let i = 0 ; i < 5; i++){
                if(binggo[i][4-i]=== 0){ // 한개라도 0이라면 반복문 중단 
                    s2 = 0;
                }
            }
        }
        else{
            s2 = 0; // 사회자가 부른 값이 대각선 방향이 아니다 
        }

        for(let i = 0 ; i < 5 ; i++){
            if(binggo[pan[0][value]][i]===0){ // 행 중에서 한개라도 0이 발견되면 빙고 x
                s3 = 0;
            }
            if(binggo[i][pan[1][value]]===0){ // 열 중에서 한개라도 0이 발견되면 빙고 x
                s4 = 0;
            }
        }
        
        sum += s1+s2+s3+s4 ; // 빙고의 총 합계 

        if( sum >=3 ){
            answer = i+1;
            break;
        }
        
    }
    return answer;
}


console.log(solution2([[11, 12, 2, 24, 10], [16, 1, 13, 3, 25], [6, 20, 5, 21, 17], [19, 4, 8, 14, 9], [22, 15, 7, 23, 18]], [5, 10, 7, 16, 2, 4, 22, 8, 17, 13, 3, 18, 1, 6, 25, 12, 19, 23, 14, 21, 11, 24, 9, 20, 15])); //15
