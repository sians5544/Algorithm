function solution(s) {
    let answer = 0;
    let str = s;
    let left = 0;
    let X = str[left];
    let rightCnt = 0;
    let leftCnt = 1;
      
  
    for(let right = 1; right < str.length; right++){
        
        if(X !== str[right]){
            rightCnt++;
        }else{
            leftCnt++;
        }
        
        if(rightCnt === leftCnt){
            leftCnt = 1; 
            rightCnt = 0;
            left = right + 1;
            right++;
            X = str[left];
            answer++;
        }
    }
    
      
    if(X) answer++;
      
    return answer;
  }