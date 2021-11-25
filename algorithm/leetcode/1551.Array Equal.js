// 두가지 값을 선택할 수 있다 x, y
// x는 0보다 크거나 같고, y는 n 보다 작다
// arr[x] -=1 , arr[y] +=1 이 연산을 통해서 배열의 원소들을 같게 만들어 준다
// 배열의 모든 원소를 같에 해주는 최소 횟수를 반환하라

// i가 0이라면 arr[0] = (2*0) + 1 = 1!!
//[1,3,5]
// x,y 를 뽑고 1번째 시도
// x가 2 라면 arr[2] -=1  -> arr[2] = 4
// y가 0 라면 arr[0] +=1 -> arr[0] = 2
// [2,3,4]
// 두번째 시도
// arr[2] -1 = arr[2] = 3;
// arr[0] +1  = arr[0] = 3;
// [3,3,3] 으로  모든 원소가 동일해졌다!
// 그래서 답이 2가 되는 것

// n 보다 작은 원소들은 n - arr[i] 해주고 그 값을 누적한다
function solution(n) {
  let answer = 0;
  let arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = 2 * i + 1;
  }

  for (let i = 0; i < n; i++) {
    if (n > arr[i]) {
      answer += n - arr[i];
    } else break;
  }

  return answer;
}

console.log(solution(6));
console.log(solution(3));
