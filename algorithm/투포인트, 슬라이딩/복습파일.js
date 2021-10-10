

'use strict';

// 슬라이딩 윈도우(Sliding window) 알고리즘은 배열이나 리스트의 요소의 
// 일정 범위의 값을 비교할 때 사용하면 유용한 알고리즘

// 매번 중복된 요소를 버리지 않고 재사용함으로써 낭비되는 계산을 하지 않는 것 


// 투포인터 
// 일정 범위에 값을 비교할 때 사용하면 좋음 


// 최대 매출 구하기 

function solution1(nums,k){

  let sum = 0;
  let answer = 0; 

  for(let i = 0 ; i< k ; i++) sum +=nums[i];
  answer = sum;
  for(let i = k; i < nums.length; i++ ){
    sum+=(nums[i]-nums[i-k]);
    answer = Math.max(sum,answer);
  }
  return answer;  
}


console.log(solution1([12,15,11,20,25,10,20,19,13,15],3));

// 매출액의 종류 
function solution4(nums,k){
  let answer = [];
  let hash = new Map();

  for( let i = 0 ; i<k-1  ; i++){
    hash.set(nums[i],(hash.get(nums[i]) || 0)+1);
  }

  let lt = 0;
  for(let i = k-1; i <nums.length; i++){
    hash.set(nums[i],(hash.get(nums[i]) ||0 )+1);
    answer.push(hash.size);
    hash.set(nums[lt], (hash.get(nums[lt])-1));
    if(hash.get(nums[lt])===0)hash.delete(nums[lt]);
    lt++;
  }

  return answer;
}

console.log("문제 2");
console.log(solution4([20, 12, 20, 10, 23, 17, 10],4));
// 연속 부분 수열 3


function solution3(nums, m){

  let sum = 0 , left = 0, answer = 0;

  for(let right = 0; right < nums.length; right++){

    sum+=nums[right];
    while(sum > m ) sum-=nums[left++];
    answer+= (right-left+1);
  }

  return answer;
}

console.log(" 문제 3번 ");
console.log(solution3([1, 3, 1, 2, 3], 5));


// 연속된 자연수의 합으로 정수 N을 표현하는 방법

function solution6(n){

  let len = parseInt(n /2) +1 ;
  let answer = 0;
  
  let nums=Array.from({length:len}, (v, i)=>i+1);;
  console.log(nums);

  let left = 0, sum = 0 ;

  for(let right = 0; right < len; right++){
    sum+=nums[right];
    while(sum > n) sum-=nums[left++];
    if(sum === n){
answer++ ;
    } 
  }
  return answer;
}

console.log(solution6(15));

function solution7(s,t){


  let hash  = new Map();

  for( let h of t ){
    hash.set(h, (hash.get(h)|| 0)-1);
  }

  for( let i = 0; i< t.length-1; i++){
    hash.set( s[i], (hash.get(s[i])|| 0) +1)
    if(hash.get(s[i]) === 0) hash.delete(s[i]);
  }

  let lt = 0;

  for( let i = t.length ; i<s.length; i++){
    hash.set(s[i], (hash.get(s[i]) || 0)+1);
    if()
    if( hash.has(s[i]) && hash.get(s[i]) !==0) 
    
  }
}