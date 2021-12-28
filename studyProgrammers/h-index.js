function solution(citations) {
  var answer = 0;
  
  citations.sort((a,b) => b-a);

  let n = citations.length;
  // h-index 는 오름차순으로 정렬된 후 
  // 인덱스가 인용된 수와 같거나 커지면 h-index 가 된다 
  for(let i = 0; i < n; i++){
    if(i>=citations[i]){
        return  i;
    }
  }
  
  // 인용된 수가 같은 배열이 있는 경우를 위해서 길이를 리턴  
  return citations.length;
}