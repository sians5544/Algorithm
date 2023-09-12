function solution(k, score) {
    let answer = [];
    let program = [];
    
    for(let i = 0; i < score.length; i++){
        if(i < k){
            program.push(score[i]);
            answer.push(program.reduce((acc,cur) => (acc > cur? cur:acc),1000001));
            continue;
        }
        
        program.sort((a,b)=> b - a);
        
        if(program[k-1] < score[i]){
            program.pop();
            program.push(score[i]);            
        }
        
        answer.push(program.reduce((acc,cur) => (acc > cur? cur:acc),1000001));
        
    }
    
    return answer;
}