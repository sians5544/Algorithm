function solution(N, stages) {
    let answer = [];
    let hash = new Map();
    let resultHash = {};
    let len = stages.length; 
    
    
    for (let stage of stages) {
    hash.set(stage, (hash.get(stage) || 0) + 1);
    }
    
    for(let i = 1; i < N + 1; i++){
        
        if(hash.has(i)){
            resultHash[i] = +hash.get(i) / len;
            len = len - hash.get(i);
        }else{
            resultHash[i] = 0; 
        }
    }
    
    let resultSort = [...Object.entries(resultHash)].sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0));
    
    for(let [key,index] of resultSort){
        answer.push(+key);
    }
    
    return answer;
}