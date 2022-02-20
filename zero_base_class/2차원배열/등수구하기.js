
function solution(n , num){
  
  // let student = num.split('');
  let answer  = new Array(num.length).fill(1); 

  for(let i = 0; i < num.length; i++){
    for( let j = 0; j < num.length; j++){

      if( num[i] < num[j]){
        answer[i]++;
      }
    }
  }
  return answer; 
}

console.log(solution(5,[87, 89, 92, 100, 76]));



function solution2(arr1, arr2) {
  let answer = Array.from(Array(arr1.length),() => Array(arr1[0].length).fill(0));
  
  for(let i = 0 ; i < arr1.length ; i++ ){
      for( let j =  0 ; j < arr1[1].length; j++){
          answer[i][j]= arr1[i][j] + arr2[i][j]
      }
  }
  return answer;
}

console.log(solution2([[1],[2]], [[3],[4]]));