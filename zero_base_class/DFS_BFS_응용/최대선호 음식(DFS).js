// 선생님이 사용할수 있는 재료 종류 : K
// 재료의 번호 1~D까지 정수 
// nums 에서 [] 은 아무거나 먹겠다는 의미 
//  최대 몇 명의 학생에게 음식을 만들어 줄수 있겠는가? 
// 조건 최대 만족인원을 반환


function solution(nums,d,k){

  let answer = Number.MIN_SAFE_INTEGER;

  n = nums.length;
  
  let pow =Array(d+1).fill(0);

  let st = Array(n+1).fill(0);

  pow[1] = 1;
  //재료의 번호를 이진수로 세팅 
  for( let i = 2; i<=d; i++){
    pow[i] = pow[i-1] * 2;
  }

  for(let i = 0; i<n; i++){ // 학생 번호  
    for(let j = 0; j<nums[i].length;j++){ // 그 학생의 선호하는 음식 재료 
      st[i]+=pow[nums[i][j]];  // ex) 1번 학생은 [2,3] 을 선호하는데 st[i] 에는 그럼 6이 들어간다 (가중치화)
    }
  }

  function DFS(L,s,bit){
    if(L === k){
      let cnt = 0;
      for(let j = 0; j<n; j++){
        if((bit & st[j]) 
      }
    }
  }

  

  return answer;
}




console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3));