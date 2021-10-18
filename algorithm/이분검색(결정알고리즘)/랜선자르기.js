// 답으로 유효성이 있는지 확인하는 작업이 중요하다 
// 나중에 발견되는 답일수록 좋은 답이다 
// 최대 길이의 랜선 11개를 만드는 것이다 
// minimum 으로 잡아버리면 얘 보다 더 긴 애들로 개수를 만들 수 있다 
// 그러므로 가장 긴 선을 기준으로 잡아라 
// log n 이기 때문에 그냥 큰 숫자를 잡고 해도 시간복잡도의 영향 안 준다 
// 만약 14개가 나왔다 그러면 11개는 당연히 된다고 생각하고 거리를 좁혀서 더좋은 답을 향해서 간다 

// 내일 퀴즈 이거 복사 붙여넣기 해라...^^ 
// function solution(nums,n){

//   let answer = 0;


// function count(mid){  // 유효성 검사하는 함수 
//   let cnt = 0;
//   for(let x of nums){  //
//     cnt+= Math.floor(x/mid); //floor 나머지는 버려버림  
//   }

//   return cnt;
// }

//   let left = 1;

//   let right = Math.max(...nums);

//   while(left <= right){
//     let mid = parseInt((left+right)/2);
//     if(count(mid) >=n){
//       answer = mid;
//       left= mid+1;
//     }
//     else{
//       right=mid-1;
//     }
//   }

//   return answer;
// }

// K 개의 랜선을 가지고 있음 {802,743,457,539} -> 이것들이 각각의 길이를 가진 랜선들  , 매개변수 n -> 만들고 싶어하는 랜선의 개수이다 
//  11개를 만들고 싶은데 랜선의 최대 길이를 얼마로 지정해야지 되는걸까?!

// 우리는 count 카운트라는 배열을 사용해서 len  의 길이로 랜선을 잘라서 나온 몫이 랜선의 개수이다! 
// 이때 랜선은 항상 센티미터 정수 단위 길이만큼 자른다 -> Math.floor(x) 가 지정된 숫자보다 작거나 같은 가장 큰 정수를 반환하는 메서드 이다 

// ** Math.floor(): 소수점 이하 버림 정수만 가쟈감
// ** Math.ceil() : 소수점 이하를 올림
// ** Math.round(): 소수점 이하를 반올림 


// N 개보다 많이 만드는 것도 N개를 만드는 것에 포함된다 !








// function solution(nums, k) { //nums : 랜선의 길이들이 담긴 배열, k : 랜선의 개수
//   let answer;
//   function count(len) {
//     let cnt = 0; // len길이로 랜선을 잘라 나온 랜선의 개수
//     for (let x of nums) { //nums배열에 들어있는 랜선의 길이 하나하나를 x에 담음
//       cnt += Math.floor(x / len); // len:자를려는 길이, x라는 랜선을 len으로 나눈 몫이 그 단위로 나눠진 랜선의 개수이다.
//     }
//     return cnt; // nums배열에 있는 랜선의 길이를 다 len이라는 길이로 나눠 나온 랜선의 개수를 return
//   }
//   let left = 1; // left는 1로 선언. 랜선의 길이가 0일 순 없으니까..(근데 0으로 해줘도 상관은 x)
//   let right = Math.max(...nums); // nums 배열 중 가장 큰수를 right로 해줌, 배열에 가장 작은 수로 하면 그것보다 큰수가 들어오게되면 반례가 생김.
 
//   // left가 right보다 커지면 while문 종료(이분검색은 left,right로 배열의 범위를 정하고 mid를 구해 배열의 반토막씩 줄여나가면서 구하는 알고리즘이라 left가 right를 넘어가면 끝임)
//   while (left <= right) {
//     let mid = parseInt((left + right) / 2); // 배열의 양쪽 끝지점을 더해 나누기 2한 몫이 그 배열의 중앙값임
//     // 만약, 현재 정한 자를려는 단위로 랜선들을 잘랐을때 나온 랜선의 개수가 k보다 크거나 같으면 문제의 조건에 충족한거임
// 		if (count(mid) >= k) {
//       answer = mid; // 그래서 자를려는 길이를 answer에 담아두고 계속 최적의 길이를 찾기
//       left = mid + 1; // 위의 자를려는 길이가 충족하니 길이를 더 늘려보기 위해 left의 위치를 현 mid+1으로 재위치시킴.
//     } 
// 		else right = mid - 1; // 현재 정한 자를려는 단위가 너무 커 랜선의 개수가 조건보단 적은상태. 자를려는 단위를 줄이기위해, right를 mid-1로 재위치시킴.
//   }
//   return answer;
// }

//11개 이상이면 일단 답으로 해놓고 길이를 늘려서 되면 계속 답을 교체! 더 좋은 답을 찾기 위해 
//랜선 자르기 다시 풀어보자 
//N 개를 만들 수 있는 랜선의 최대 길이를 센티미터 단위 정수로 반환
// 


function solution(nums,n){

  let answer ;

  function count(len){
    let cnt = 0 ; // 랜선의 개수를 카운트 
    for(let x of nums){
    cnt+= Math.floor(x/len); //나눈 정수 값만 랜선으로 치겠다 , 각각의 랜선의 길이를 돌면서 해당 len - 해당 길이로는 nums의 랜선들을 잘랐을 때 총 몇개 나오는지 카운트 
    }
    return cnt;
  }

  // 우리가 반환 할 애들은 최대 길이 이기에 left와 right 도 랜선길이에 초점을 맞춘다 
  let left = 0;

  let right = Math.max(...nums);// 랜선의 길이는 가장 큰 값으로 잡아주겠다  


  while(left<=right){

    let mid = parseInt((left+right)/2);

    // n개보다 많이 만들어주는 값도 n개로 포함되므로 일단 더 크면 값을 반환하는 형태로 선언한다
    // 어차피 계속 mid 값이 구해지면서 answer 의 값도 바뀌기 때문에 
    // 일단 최대한 크게 자르고 점점 줄여가면서 최대치로 값을 찾아보자 
    if(count(mid)>=n){
      answer = mid;
      left = mid + 1 ; //  나오는 랜선의 개수가 n 보다 크다면 우리가 랜선을 짧게 잡고 있다는 ㄷ뜻...! 길이를 길게 해줘야지 랜선의 개수가 줄어든다  
    }
    else{
      right = mid -1 ; // n 보다 값이 작다면 랜선의 길이를 너무 길게 해주고 있는 것이다 자르는  범위를 줄여보자 
    }

  }

  return answer;
  
}

console.log(solution([802, 743, 457, 539], 11));