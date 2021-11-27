//소수
// 약수로 1과 자기 자신으로만 나눠지는 수
// 약수는 정수 n을 0이 아닌 정수 d로 나누었을 때 나누어 떨어지는 경우,
// 즉 몫이 정수이고 나머지가 0인 경우 d를 n의 약수라함 

// 에라스토테네스의 접근
// 소수를 구하고자 하는 범위 2~n 이 있을 때
// 2~n의 제곱근에 해당하는 범위 안의 소수의 배수들을 제외하면 결국 소수만 남는다는 것

// 에라스토테네스 함수를 우선 구현해보자 

// 여기서 1은 소수라는 의미이다 
function solution(n){

  // 배열은 0부터 시작하므로 주어진 숫자에 + 1을 더해준다 
  let arr = Array(n+1).fill(1);

  // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화 
  // arr[i]가 소수일 겨우 , 반복문을 진행한다 
  for(let i = 2; i*i <= n ; i++){
    if(arr[i] === 1){
      for(let j = i*i ; j<=n ; j+=i){
          arr[j] = 0; // 얘네는 소수가 아니다 제곱근 이니까 
      }
    }

  }

  //0과 1은 소수가 아니므로 0 
  arr.splice(0,2,0,0);


  let result = arr.filter((value) => {
    return value === 1;
  });

  return result.length;
}


//console.log(solution(100));


function solution1(n){
  let answer = "True";

  let arr = Array(n+1).fill(true).fill(false,0,2);

  for(let i=2; i*i<=n; i++){
    if(arr[i]){
      for(let j = i*i ; j<=n; j+=i){
        arr[j] = false;
      }
    }
  }


  //console.log(arr);
  // // //0과 1은 소수가 아님 
  // arr.splice(0,2,false)

  // console.log(arr);

  return arr[n];
}
function isPrime(num) {
  if(num<=1) return false;
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  return true; 
}

function primeNumber(n){

  let answer = "True";

  let arr = Array(n+1).fill(true).fill(false,0,2);

  for(let i=2; i*i<=n; i++){
    if(arr[i]){
      for(let j = i*i ; j<=n; j+=i){
        arr[j] = false;
      }
    }
  }

  return arr[n];
}

//console.log(solution1(211));

function solution2(n,k){

  let answer = 0,left = 0;

  // 자바스크립트 진수 변환 toStirng(진수) 넣으면 된다

  let hex = String(n.toString(k)).split("0").map(Number);
  
  for(let i = 0; i <hex.length; i++){
    if(primeNumber(hex[i])) answer++;
  }

  return answer;
}

//console.log(solution2(437674,3));
//console.log(solution2(170110780190,10));
console.log(solution2(100000210002300021,10));
//console.log(solution2(110011,10));



function isPrime(num) {
  if(num<=1) return false;
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  return true; 
}

//////////////////////////////////////////////////
function solution2(n,k){

  let answer = 0,left = 0;

  // 자바스크립트 진수 변환 toStirng(진수) 넣으면 된다

  let hex = String(n.toString(k)).split("0").map(Number);
  
  for(let i = 0; i <hex.length; i++){
    if(isPrime(hex[i])) answer++;
  }

  return answer;
}

//console.log(solution2(437674,3));
//console.log(solution2(170110780190,10));
console.log(solution2(100000210002300021,10));
//console.log(solution2(110011,10));