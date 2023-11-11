function solution(topping) {
    let answer = 0;
    let set = new Set(topping);
    let hash = new Map();
    
    let cul = new Set();
    let bro = set.size;
    
    for(let t of topping){
        hash.set(t,(hash.get(t) || 0) + 1);
    }
    
    for(let top of topping){
        cul.add(top);
        if(hash.get(top) > 0 && set.has(top)){
            hash.set(top,hash.get(top)-1);
        }
        
        if(hash.get(top) < 1){
            hash.delete(top);
            set.delete(top);
        }
        
        if(cul.size === set.size) answer++;
    }
    
    return answer;
}