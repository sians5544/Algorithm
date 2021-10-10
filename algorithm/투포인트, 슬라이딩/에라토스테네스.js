
// 소수의 개념
// 소수는 1과 자기 자신으로만 나누어지는 수
//  1은 소수가 아니다 
// 모든 자연수는 소수들의 곱으로 표현된다 


// 에라토스테네스의 체 
// 모든 자연수는 소수들의 곱으로 표현된다고 했다 
// 주어진 숫자 값의 범위 안에서 , 자기 자신을 제외한 배수 값을 지워나갔다 
// 그렇게되면 소수만 남게된다 

// 


function solution(n){

  let arr = [];
  let result = [];
  // 인뎃 번호가 주인 숫자 n과 대응하도록 빈배열을 생성 true로 표기
  // 여기서 true 는 소수라는 의미 

  let let =0 , sum= 0;

  for(let i = 2 ; i <= n+1 ; i++){
    arr.push(true);
  }

  //주어진 수의 제곱근 까지만 계산해서 불필요한 반복을 최소화한다
  // arr[i] 가 소수의 경우, 반복문을 진행 
  // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다 
  // 제곱근까지 반복한다 

  for(let i =2; i* i<=n; i++){
    if(arr[i]){
      for(let j = i * i ; j<=n ; j++){
        arr[j] = false;
      }
    }
  }


  for(let i = 2; i <=n; i++){
    if(arr[i] == true){
      result.push(i);
    }
  }
  // // 0과 1은 소수가 아니므로 false로 바꿔준다 

  // arr.splice(0,2,false,false);
 
  
  for(let right = 0; right < result.length ;right ++){
    sum+=sum[right];
    while ( )
  }
  

  return result;
}

console.log(solution(30));