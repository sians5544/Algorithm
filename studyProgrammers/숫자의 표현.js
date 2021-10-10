// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
// 입력 : 15  출력 : 4


function solution(n) {
  let  answer = 0 , left = 0, sum = 0;
    
  let len = parseInt(n / 2)+1;
    
  let nums = new Array(len).fill().map((arr,i) => arr=i+1);

  nums.push(n);
    
  for(let right = 0; right < nums.length ; right ++){
      
      sum+= nums[right]; 
      
      while(sum > n){
          sum-= nums[left++];
      }
      
      if(sum == n){
          answer++;
      }
  }
  return answer;
}


function solution2(gems) {
  let  answer = [];
  
  let hash = new Map();
  let left = 0;
  
  for(let right = 0; right < gems.length ; right++){
      hash.set(gems[right], (hash.get(gems[right]) +1 || 0));
      console.log(hash);

      if(hash.get(gems[right]) !==0){
          hash.delete(gems[right]);
          answer.push([left+1, right]);
      }
      else{
      hash.set(gems[left], (hash.get(gems[left]) || 0) -1);
      if( hash.get(gems[left]) == 0) hash.delete(gems[left]);
      left++;
      }
    }
  
  
  //answer = answer.splice(0,2);
  return answer;
}

console.log(solution2(["AA", "AB", "AC", "AA", "AC"]));

console.log(solution2(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));
