'use strict';

//1. 수열 축소 
function solution1(nums, m){

  let answer;

  let n = nums.length;
 
  for(let i = 0; i < m ; i++){ // m 번의 축소 작업 for문 
    for(let j = 0 ; j < n-i-1 ; j++){
      nums[j] = nums[j+1] - nums[j];
    }
  }

  answer = nums.slice(0,n-m);

  return answer;
}
console.log(solution1([5,3,7,9,-2], 1));


//문제 2. 제곱수 정렬 
// 문제에 이미 오름차순으로 정렬 되어있다는것은 O(n) 으로 풀어야 한다는 것이다.

function solution2(nums){

  let n = nums.length;
  let answer = new Array(nums.length).fill(0);

  let left = 0, right = n-1 ,tmp ;

  for( let i = n-1; i >=0; i--){
    if(Math.abs(nums[left]) < Math.abs(nums[right])){
      tmp = nums[right];
      right--;
    }
    else{
      tmp = nums[left];
      left++;
    }
    answer[i] = tmp * tmp;
  }

  return answer;
  }

  console.log(solution2([-4,-1,0,3,10]));


  //문제 3. 수열의 높이 조정
  // N의 길이 수열이 주어집니다. 수열의 높이 조정은 수열의 원소값 중 가장 큰 원소에서 1을 빼 가장 작은 원소에 더해주는 것을 말합니다.
  // 만약 수열이 [2,1,3,7,5] 라면 1호의 높이 조정을 거친다면 [2,2,3,6,5]

  // N길이의 수열이 주어지면 높이 조정을 m 회한 후 가장 큰 값과 가장 작은 값의 차를 출력
// 원소의 값은 1000 을 넘지않는다 

function solution3(nums,m){

  let answer = 0;

  let chArr = new Array(1000).fill(0);

  let maxH = Number.MIN_SAFE_INTEGER; // 안전한 최대 정수값 선언

  let minH = Number.MAX_SAFE_INTEGER; // 안전한 최소 정수값 선언


  // chArr 배열을 선언하여 갯수를 카운트 해주고 최대, 최소값 세팅
  for (let x of nums){
    chArr[x]=+1;
    if( x < minH) minH = x;
    if( x > maxH) maxH = x;
  }

  for(let i = 0; i<m ; i++){
      if(maxH === 1 && minH === 1) return 0;
      
      if(chArr[minH] ===1){
        chArr[minH]--;
        minH++;
        chArr[minH]++;
      }
      else{
        chArr[minH]--;
        chArr[minH+1]++;
      }
      if(chArr[maxH]===1){
        chArr[maxH]--;
        maxH--;
        chArr[maxH]++;
        
      }
      else{
        chArr[minH]--;
        chArr[minH-1]++;
      }

    }
      
    answer = maxH - minH;
  return answer;
}

console.log(solution3([2,1,3,7,5],2));


// 문제 7 . 거리두기 
// 현수가 영화관에 도착했는데 이미 앉아있는 사람들 중 가장 가까운 사람과 최대한 멀리 떨어져 앉을거리 
//  현수가 이미 앉은 사람과 최대한 멀리 앉을 수 있는 거리 (좌석 시작 부분과 가깝지만 사람과는 최대한 먼 자리 선택)


function solution7(nums){

  let answer = 0;


  let dist = new Array(100).fill(0);

  let d = 100;
  for(let i  = 0; i <nums.length; i++ ){

    if(nums[i] === 1){ //사람이 있다면 
      d = 0; // 거리는 0 
      dist[i] = d;
    }
    else{
      d++;
      dist[i] = d;
    }
  }

  d = 100;
  for(let i = nums.length -1  ; i >= 0 ; i-- ){
      if(nums[i] === 1){
        d = 0 ; 
      }
      else{
        d++;
        dist[i] = Math.min(dist[i],d);
      }
    }
    answer = Math.max(...dist); // 스프레드 연산자 
    return answer;
  }


console.log();
console.log(solution7([1,0,0,0,1,0,0,1,0,1]));
//문제 7. 가장 높은 증가 수열
//길이가 N인 수열이 주어지면 이 수열에서 연속된 부분 증가수열을 찾습니다.
// 각 부분 증가 수열은 높이가 있다 높이: 증가수열 첫 항과 마지막항의 차를 의미 
// 수열이 주어지면 여러 증가 수열 중 가장 높은 부분증가수열을 찾는 프로그램을 작성
//두 수가 같을경우 증가 수열로 보지않음 

// n과 n-1을 비교 n이 n-1보다 크면 증가 수열로 본다 그래서 높이를 height 에 저장 
// 그렇지 않은 경우에는 (다시 감소되는 부분을 만나면 ) answer 에 증가 부분 계산되었던걸 저장한다 


function solution7(nums){
  let answer = 0;
  let height = 0;

  for(let i = 1 ; i < nums.length ; i++){
    if( nums[i-1] < nums[i] ){ //증가수열이라면?
      height +=nums[i] - nums[i-1]; 
    }
    else{
      answer = Math.max(height,answer);
      height = 0;
    } //감소 하는 부분이라면 이전에 기록해주던 증가수열 값과 그 값을 백업해둔 answer 중 큰 값을 저장
  }

  //수열을 다 확인해서 봤다면 이전에 저장해둔 증가수열과, 다시 측정된 증가수열 부분 중 더 큰 값 리턴
  answer = Math.max(height,answer);
  return answer;

}

console.log("7번 정답 ");
console.log(solution7([5,2,4,7,7,3,9,10,11]));


// 문제 8
// 길이가 n 인 수열이 주어지면 이 수열에서 연속으로 증가 하거나 , 또는 연속적으로 작아지는 부분 수열 중 가장 길이가 긴 수열 찾기
// 연속으로 있는 것은 증가 감소로 보지않는다 

function solution5(nums){

  let answer = 0;
  let count = 0;

  let up =1, down =1 , maxup = 0, maxdown = 0;
  
  for(let i = 1; i< nums.length ; i++){

    if(nums[i-1] < nums[i]){// 상승 
      up++;
    }
    else{
      maxup = Math.max(up,maxup);
      up=1;
    }
    //감소로 전환
    if(nums[i-1] > nums[i]){
      down++;
    }
    else{
      maxdown=Math.max(down,maxdown);
      down=1;
    }
  }
    maxup = Math.max(up,maxup); //상승 타다가 하강 발견
    maxdown=Math.max(down,maxdown);
    answer = Math.max(maxup,maxdown);
    return answer;

}

console.log("5번 문제");
console.log(solution5([5,3,6,7,9,8,5,3,1,2]));

  // 문제 6. 바이토닉 수열 
  // 바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다 
  // 길이가 N인 수열이 주어지면 이 수열이 바이토닉 수열인지 판별하는 프로그램을 작성하세요 

  function solution6(nums){

    let answer ='YES';
    let i= 0;
    let n  = nums.length;

    while(i + 1 <n &&  nums[i] < nums[i+1]) i++;
    if(i===0 ||  i === n-1) return 'NO';
    while(i + 1 < n && nums[i] > nums[i+1]) i++;
    if(i !==n-1) return 'NO';

    return answer;
  }

  console.log(solution6([1,2,3,4,5]));
  // 문제 8. 빈도수 구하기 
  // 길이가 N인 수열 자연수 K가 주어지면 수열의 원소 중 빈도수가 가장 많은 것 
// 순으로 k 개를 찾아주는 프로그램을  작성하세요 
//  

function solution8(nums,k){

  let answer =[];

  let hashArray = new Map();

  for (let x of nums){

    hashArray.set(x,(hashArray.get(x) || 0) +1);
  }

  let tmp = [...hashArray].sort((a,b) => b[1] - a[1]);
 
  for(let i =0 ; i<k ; i++){
    answer.push(tmp[i][0]);
  }

  return answer;
}
console.log(solution8([3,3,3,5,1,1,1,7,2,2],3));

console.log("==========================");

// set 객체 생성 

const set1 = new Set([1,2,3]);  //array 값도 넣어줄수있다 

//add 사용해서 객체에 추가 해주기 

set1.add('졸려');

console.log(set1);
console.log(set1.size);

// chaning 으로 추가 가능하다

set1.add(10).add(20).add(30).add(40);
//{ 1, 2, 3, '졸려', 10, 20, 30, 40 } 저장된다 
console.log(set1);
console.log(set1.has(1));
console.log(set1.has(15));

//삭제하기 
console.log(set1.delete(1)); // 삭제되면 true 리턴됨 
console.log(set1);

//set 반복문

// collection 객체인 set이 가지고있는 iterator 속성을 이용하여 for...of구문을 통해 반복문 수행 가능

let str = new Set("Hello");

console.log(str);

for(let x of str){
  console.log(x);
}

for(let item of str.keys()){ //따로 지정된 key 가 없기 떄문에 위에와 그대로 출력
  console.log(item);
}


//웹과의 호환성을 위해 key-value 값을 지정해서 보여준다 
// [ 'H', 'H' ]
// [ 'e', 'e' ]
// [ 'l', 'l' ]
// [ 'o', 'o' ]

for(let item of str.entries()){
  console.log(item);
}
