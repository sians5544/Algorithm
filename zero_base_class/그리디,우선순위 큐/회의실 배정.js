// 얘는 기준을 끝 시간을 잡아줘야한다 
// 한개가 시간을 다 차지해서 사용할수가 없는 사태가 발생 
// 제일 먼저 끝나는 회의부터 정렬하는 것이다 
//  et를 끝나는 시간으로 지정  
function solution (meeting){

  let answer = 0;

  meeting.sort((a,b) =>{
    if(a[1] ==b[1]) return a[0]-b[0]; // [1,3] [3,3] 이처럼 끝나느 시간과 끝시간이 같아질수 있기 때문에 이럴 때는 시작 시간으로 정렬 !  
    else return a[1]-b[1]}); // 끝시간으로 정렬  , 시작 시간으로 하게되면 시간을 오래 차지하는 부분에서 반례 

  let use_check = 0
  for( let x of meeting){
    if(x[0] >= use_check){ //끝나는 시간보다 시작 시간이 더 큰가?
      answer++; 
      use_check = x[1]; // 끝나는 시간으로 세팅 다음 시작 - 끝 시간 비교를 위해 
    }
  }
  
  return answer;
}

console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]));