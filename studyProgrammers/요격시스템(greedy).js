function solution(targets) {
    let answer = 0;
    targets.sort((a,b) => a[1] === b[1] ? a[0]-b[0] : a[1]-b[1]);
    
    let endValue = Number.MIN_SAFE_INTEGER;
    
   for(let target of targets){
       
       if(target[0] >= endValue){
           answer++;
           endValue = target[1];
       }
   }
    
    return answer;
}