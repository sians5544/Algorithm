'use strict';

function solution(str){
  let answer = "";

  let hash = new Map();

  for(let x of str){
    hash.set(x,(hash.get(x) || 0)+1);
  }
        // 빈도수가 같으면  대문자 먼저 정렬 
  // let result =[...hash].sort((a,b) => b[1] - a[1]);

  //let result = [...hash].sort((a, b) =>  a[1] !== b[1] ? b[1] - b[1] : a[0].charCodeAt(0) - b[0].charCodeAt(0) );
  let result=[...hash].sort(function(a, b) { 
    return (a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0)||
    (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0) ; 
  });
  // let result = [...hash].sort((a,b) =>{
  //   if(a[1] !==b[1]) return b[1]-a[1] });


  //const myMap = new Map(); myMap.set("a", 1); myMap.set("c", 4); myMap.set("A", 1); myMap.set("d", 2);  // 
  // value값 기준 내림차순 정렬, 같으면 대문자앞으로 const mapSort2 = new Map(   [...myMap.entries()].sort((a, b) =>     a[1] !== b[1] ? a[1] - b[1] : a[0].charCodeAt(0) - b[0].charCodeAt(0)   ) ); console.log(mapSort2);
    console.log(result);

  // if(a[1] ==b[1]) return a[0]-b[0]; // [1,3] [3,3] 이처럼 끝나느 시간과 끝시간이 같아질수 있기 때문에 이럴 때는 시작 시간으로 정렬 !  
  // else return a[1]-b[1]});
  
  for(let [key, value] of result){
    answer+= key.repeat(value);
  }

  return answer;
}


console.log(solution("aaAAcccbbbBB"));