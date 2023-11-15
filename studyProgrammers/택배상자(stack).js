function solution(order) {
    var answer = 0;
    let cnt = 0;
    let stack = [];
    
    for(let i = 0; i< order.length; i++){
        let realCon = i + 1;
        
        if(realCon === order[cnt]){
            cnt++;
        }else{
            stack.push(realCon);
        }
        
        while(stack.length && stack[stack.length-1] === order[cnt]){
            stack.pop();
            cnt++;
        }
    }
    
    return cnt;
}