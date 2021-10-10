// 피보나치 수열은 An = A n-1 + A n-2 로 정의할 수 있다 
// 피보나치 수열 알고리즘의 시간 복잡도는 Q(N)이다
// 왜냐면 f(1)을 구한다음 그 값이 f(2)를 푸는데 사용되고 
// f(2)의 값이 f(3)을 푸는데 사용되는 방식으로 이어지기 때문이다. 
// 이처럼 재귀 함수를 사용하여 다이나믹 프로그래밍 소스 코드를 
// 작성하는 방법을, 큰 문제를 해결하기 위해 작은 문제를 호출한단다고하여 
// !!! 탑 다운 (top - down 방식)이라고 말한다 
// 반면에 단순히 반복문을 이용하여 소스 코드를 작성하는 경우는 작은 문제부터 
// 답을 도출한다고 하여 보텀업 (Bottom-up) 방식이라고 말한다. 



let result = []

function fibo(x){
  if (x === 1|| x === 2){
    return x;
  }

  return fibo(x-1) + fibo(x-2)
}

for(let i = 1; i < 6; i++ ){
  result.push(fibo(i))
  //console.log(result)
}



// 다이나믹 프로그래밍은 다음 조건을 만족할 때 사용할 수 있다 
// 1. 큰 문제를 작은 문제로 나눌 수 있다.
// 2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 동일하다.

// 메모이제이션(Memoization)
// 다이나믹 프로그래밍을 구현하는 방법 중 한 종류로 한번 구한 결과를 
// 메모리 공간에 메모해두고 같은 식을 다시 호출하면 메모한 결과를 그대로 가져오는 법을 의미 

let memoarray = Array(100);

function fibomemo(x){
  if (x ===1  || x===2){
    return x;
  }

  //이미 계산한적 있는 문제면 걔를 반환하고 
  if (memoarray[x] != undefined){
    console.log(memoarray[x])
    return memoarray[x];
  }
  else{
    memoarray[x] = fibomemo(x-1)+ fibomemo(x-2);
  }
  

  return fibomemo(x-1)+ fibomemo(x-2);

}

result2 = []

for(let i = 1; i < 7; i++ ){
  result2.push(fibomemo(i))
  console.log(result2)
}


console.log(memoarray)
