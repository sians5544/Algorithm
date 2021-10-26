//상근이는 나무 M 미터가 필요하다  절단기 높이 H 를 지정해야한다
// H 보다 큰 나무는 H 위의 부분이 잘릴 것, 낮으면 안잘림 
//  {20, 15, 10, 17} -> 나무의 높이 배열 
// 필요한 만큼만  나무를 M 미터를 집으로 가져가려고 한다 -> 절단기 설정할 수 있는 높이의 최대값 구하기 

// left 와 right 의 기준이 되는 것은 절단기의 높이 
// 나무의 수 N 과 (배열의 개수 ) , 상근이가 집으로 가져가려고 하는 나무의 길이 M 

function solution(nums,m){
  
  let answer = 0;

  function count(mid){
    let len = 0;
    for(let x of nums){
      if(x > mid){
        len+= x - mid;  // 절단기보다 높이가 높은 애들만 잘라서 집에 가져갈수있음 
      }
    }
    return len;
  }

  let left = 0;
  let right = 1e11;

  while(left<=right){
    
    let mid = parseInt((left+right)/2);

    if(count(mid)>=m){ // 가져 가려는 개수가 m 보다 크다는건 절단기 높이가 더 낮다는 것을 의미함 
      answer = mid;
      left = mid + 1; //그래서 절단기 높이를 올려줘야댐 
    }
    else{
      right = mid - 1; // 가져 가려는 개수보다 작다면 ? 너무 높이를 크게 해주고 잘리고 있는 것으로 높이를 줄여줘야함 
    }
  }
  return answer;
}


console.log(solution([20,15,10,17],7));
console.log(solution([4, 42, 40, 26, 46],20));