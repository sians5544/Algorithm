// 데이터 센터는 NxN 격자로 구분 각 격자마다 컴퓨터가 쌓여있다
// 냉방기에서 나온 차가운 공기가 바다에서부터 차례로 차오는데
// 1분마다 컴퓨터 한대의 높이만큼 데이터 센터를 차가운 공기를 채우면 올라간다
// 데이터 센터에 있는 컴퓨터가 절반이상 차가운 공기 영향 받아 작동 시키려면
// 최소 몇분을 기다려야 하는가? -> 이걸 mid 로 잡아라

//  left 1 ~ right 는 10,000,000 대까지   중간 딱 정해주고 겟수를 카운팅해주는 변수가 있어야한다

// 최악의 경우는 한 격자에만 컴퓨터가 쌓여있는 경우
//
// function solution(board){
//   let answer=0;
//   let n=board.length;
//   let lt=1, rt=0, sum=0;
//   board.forEach(e => { // 2차원 배열 보드를 탐색하면서 rt 는 보드 중에 가장 많이 쌓여져 있는곳 -> 그게 최대 분
//       rt=Math.max(rt, Math.max(...e));
//       sum+=e.reduce((a, b)=>a+b); // 총 대수를 알아야 하니까 다 더했다  총대수를 알아야 절반을 알 수 있음
//   });
//   function Count(m){ // m기다리는 보드
//       let cnt=0;
//       for(let i=0; i<n; i++){
//           for(let j=0; j<n; j++){
//               if(board[i][j]>=m) cnt+=m; // 격자에 있는 컴퓨터의 개수가 M보다 많으면
//               else cnt+=board[i][j]; // 7분을 기다렸는데 5대 만 있는것 그럼 그냥 5대 더한다
//           }
//       }
//       return cnt; /// 냉각되는 커뮤퓨터의 개수 리턴해준다
//   }
//   while(lt<=rt){
//       let m=parseInt((lt+rt)/2);
//       if(Count(m)>=(sum/2)){
//           answer=m;
//           rt=m-1; // 더 작은 분을 찾아서 내려간다
//       }
//       else{
//           lt=m+1;
//       }
//   }
//   return answer;
// }

// 조절해야하는 것은 시간 -> 최소 몇분인지

function solution(arr) {
  let answer = 0;
  let total = 0,
    left = 0;

  let right = 1e8;

  let len = arr.length;

  //컴퓨터의 총 대수 구하기
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      total += arr[i][j];
    }
  }

  // 냉방되는 컴퓨터 대수 구하는 함수
  function count(mid) {
    let computer = 0;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (arr[i][j] >= mid) computer += mid;
        else computer += arr[i][j];
      }
    }

    return computer;
  }

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (count(mid) >= Math.floor(total / 2)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

let arr = [
  [2, 3, 1, 5, 6],
  [3, 0, 7, 4, 3],
  [8, 5, 7, 5, 6],
  [9, 6, 1, 5, 5],
  [5, 5, 8, 5, 1],
];

console.log(solution(arr));
