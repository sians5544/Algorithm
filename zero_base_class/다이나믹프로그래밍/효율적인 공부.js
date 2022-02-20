// 구간이 끝나는 시간으로 정렬


// function solution(times,r){

//   let answer = 0;
//   let m  = times.length;

//   let dy = Array(m).fill(0);

//   times.sort((a,b) => a[1]-b[1]);

//   for(let i = 0; i<m; i++){
//     for( let j = i-1; j<=i; j--){
//       if(times[j][1] +r <= times[i][0] && dy[j] + times[i][2] > dy[i]){
//         dy[i] = dy[j] + times[i][2];
//       }
//     }
//     answer = Math.max(answer,dy[i]);
//   }
//   return answer;
// }






function solution(times,r){

  let answer = 0;

  
  times.sort((a,b) => a[1] - b[1]); // 공부 시간은 끝나는 시간으로 정렬 해야된다 

  let dy = Array(times.length).fill(0); // 정렬시 i번째 구간을 마지막으로 공부했을 때 최대 효율값 

  for(let i = 0; i<times.length; i++){
    dy[i] = times[i][2]; // 앞에 값이 없다면 자기 자신으로 초기화 
    for(let j = i-1; j>=0; j--){
      if(times[j][1] + r <= times[i][0] && dy[i] < dy[j] + times[i][2]){ //  j의 끝나는 시간 + 쉬는 시간 값이 i의 시작 값보다 작고 ,i 보다 앞에 있는 j중에서  더 큰수만 안고 가겠다 ! 
        dy[i] = dy[j] + times[i][2]; // i번째 의 효율성 = j의 효율성 + 현재 times의 i번째 효율 
      }
    }
    answer = Math.max(answer,dy[i]); // 가장 큰 효율값을 반환한다 
    }
  return answer;
  }

console.log(solution([[3, 5, 20], [4, 7, 16], [1, 2, 5], [11, 13, 7], [9, 10, 6]],2));

// 최대부분 증가수열 앞에서 훅 뒤에서 훅 증가수열...?ㅎ 
