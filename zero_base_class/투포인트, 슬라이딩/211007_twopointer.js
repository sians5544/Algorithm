'use strict';

// 슬라이딩 윈도우(Sliding window) 알고리즘은 배열이나 리스트의 요소의 
// 일정 범위의 값을 비교할 때 사용하면 유용한 알고리즘

// 매번 중복된 요소를 버리지 않고 재사용함으로써 낭비되는 계산을 하지 않는 것 

// 최대 매출 구하기 
function soltution1 (nums , k){

  let sum = 0; // 매출의 합계를 구하는 변수 
  let answer = 0; // 최대값을 담아서 return 할 변수 

  let over_index = 0; // 범위 벗어날 인덱스  


  for(let i = 0; i<nums.length; i++){

      sum += nums[i]; // 합계 구하기 

      if(i > k-1){
        sum-=nums[over_index];
        answer = Math.max(answer,sum);
        over_index++;
      }
    }

  return answer;

}

console.log(soltution1 ([12,15,11,20,25,10,20,19,13,15] ,3));

function solution1_1(nums, k){
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=nums[i];
  answer=sum;
  for(let i=k; i<nums.length; i++){
      sum+=(nums[i]-nums[i-k]);
      answer=Math.max(answer, sum);
  }                    
  return answer;
}



function solution2(nums,k){

  let setCategoy = new Map(); // 매출액의 종류를 담아줄 set 

  let over_index = 0;
  
  let answer = [];

  let arraycopy = [];

  for(let i =0; i < nums.length ; i++){

    setCategoy.set(nums[i],(setCategoy.get(nums[i]) || 1));
    if(i >= k-1){
      answer.push(setCategoy.size); 
    }
    
  }

  return answer;
}


function solution2_1(nums, k){
  let answer=[];
  let nH = new Map();
  let len=nums.length;
  for(let i=0; i<k-1; i++){
      nH.set(nums[i], (nH.get(nums[i]) || 0) +1);
  }
  let lt=0;
  for(let rt=k-1; rt<len; rt++){
      nH.set(nums[rt], (nH.get(nums[rt]) || 0)+1);
      answer.push(nH.size);
      nH.set(nums[lt], nH.get(nums[lt])-1); // push 했으면 lt 가르키는 키를   -- 시켜준다 
      if(nH.get(nums[lt])===0) nH.delete(nums[lt]);
      lt++; //delete 하고 나서 증가시켜라 
  }           
  return answer;                              
}
//console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution2_1([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));

  


console.log("문제 2번");
console.log(solution2([20,12,20,10,23,17,10],4));


// 문제 3
// 투 포인터(two pointer)
// 리스트에 접근해야할 때 두개의 점 위치를 기록하면서 처리하는 알고리즘

// 1.시작점과 끝점이 첫번 째 원소를 가리키도록한다 
// 2. 현재 부분 합이 M과 같다면 카운트한다 
// 3. 현재 부분합이 M 보다 작다면 end 를 증가 시킨다 
// 4. 현재 부분 합이 M보다 크거나 같다면 start 를 증가 시킨다 

function solution3_1(nums,m){

  let left = 0  ,sum = 0 ,count = 0;  

  for(let right = 0; right < nums.length ; right ++){
    sum += nums[right];
    while (sum > m ){ // nums의 길이만큼만 돈다 
      sum-=nums[left++];` `
    } 
    if(sum === m )count++;
  }

  return count;

}

console.log("문제 3-1");
console.log(solution3_1([1,2,1,3,1,1,1,2],6))
// 연속 부분수열 1

// N 개의 수로 이루어진 수열 
// 이 수열에서 연속부분수열의 합이 특정 숫자 M 이되는 경우 


function solution4(nums , m){

  let answer;
  let sum = 0;
  let hash = new Map();

  for(let i = 0 ; i < nums.length ; i++){

    sum +=nums[i]; 
    if(sum === m ) answer ++;//처음 인덱스부터 누적된 3이라는 값을 확인한다 
    if(hash.has(sum-m)) answer+=hash.get(sum - m); //sum - m 빼 봤는데 해쉬의 key 값에 있더라 누적된 값이 있더라... 그래서 그 구간이 m 니까 answer ++ 
    hash.set(num, (hash.get(sum) || 0) +1);
  }
  return answer;
}

/// 음수와 0도 있는 값이기 때문에 
//  
console.log("문제 4번");
console.log(solution4([-1,0,1]) ,0);


//rt-lt+1  count 이다 
function solution5(nums,m){

  let answer = 0;
  let sum = 0;
  let left = 0;

  for(let right = 0; right < nums.length; right++){
    sum+=nums[right];
    while(sum > m) sum-=nums[left++];
    answer +=right-left +1;
    if(sum === m )answer++;

  }
  return answer;
}

console.log("문제 5");
console.log(solution5([1,3,1,2,3],5));

function solution6(n){

  let len = parseInt(n/2) + 1; 
  let left = 0;
  let sum = 0;
  let answer = 0;
  let nums = new Array(len).fill(len).map((v,i) => i+1);
  

  for(let right = 0 ; right < nums.length ; right++ ){
    sum[right]+= nums[right];

    while(sum > n ){
      sum-=nums[left++];
    }
    if(sum === n) answer++;
  }

  return answer;
}

console.log("문제 6");
console.log(solution6(15));


function solution7(s,t){

  let answer = 0;
  let left = 0;
  
  let hash = new Map();

  // t 문자열로 hash를 세팅해준다 
  // 사이즈가 0가되면 아나그램이 되기 때문이다 

  // count 0 이면  
  for (let x of t){
    hash.set(x, (hash.get(x) || 0 ) -1);
  }

  let len = t.length - 1;

  for(let right = 0; )

}


function solution4(nums, m){
  let answer=0, lt=0, sum=0;
  for(let rt=0; rt<nums.length; rt++){
      sum+=nums[rt];
      while(sum>m){
          sum-=nums[lt++];     
      }
      if(sum===m) answer++;
  }        
  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); //3


function solution(nums, m){
  let answer=0, sum=0;
  let nH=new Map();
  for(let i=0; i<nums.length; i++){
      sum+=nums[i];
      if(sum===m) answer++;
      if(nH.has(sum-m)) answer+=nH.get(sum-m);
      nH.set(sum, nH.get(sum)+1 || 1);
  }
  return answer;
}
console.log(solution([1, 2, 3, -3, 1, 2], 3));
//console.log(solution([3, 1, 1, 1, 3], 3));
//console.log(solution([1], 0));
//console.log(solution([-1, 0, 1], 0));
//console.log(solution([-1, -1, -1, 1], 0));

function solution(nums, m){
  let answer=0, sum=0, lt=0;
  for(let rt=0; rt<nums.length; rt++){
      sum+=nums[rt];
      while(sum>m){
          sum-=nums[lt++];
      }
      answer+=(rt-lt+1);
  }               
  return answer;
}
console.log(solution([1, 1, 1, 1, 1, 1], 3));


function solution(s, t){
    let answer=0;
    let sH = new Map();
    for(let x of t){
        sH.set(x, (sH.get(x) || 0)-1);
    }

    ///////////////// rt 를  s[3] 부터 시작할거라   
    // 나머지 s[0]~s[2] 값들을 hash에서 값이 있는지를 체크해주는 for문 

    let len=t.length-1;
    for(let i=0; i<len; i++){
        sH.set(s[i], (sH.get(s[i]) || 0)+1);
        if(sH.get(s[i])===0) sH.delete(s[i]);
    }
    
    let lt=0;
    for(let rt=len; rt<s.length; rt++){
        sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
        if(sH.get(s[rt])===0) sH.delete(s[rt]);
        if(sH.size===0) answer++;
        sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
        if(sH.get(s[lt])===0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}
console.log(solution("bacacbcba", "abc"));


// function solution1_10(words){

//   let setNum = new Set();
//   for (let i = 0; i < words[0].length; i++ ){
//     for(let j = 0 ; i< words.length; j++){
//       setNum.add(words[j].substring(0,i+1));
//       if(setNum.size !==1){
//         return i+1;
//       }
//     }
//   }
// }

// console.log(solution1_10(["seeasue", "sesseysu", "semeas"]));

