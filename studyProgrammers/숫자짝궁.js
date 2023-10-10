function checkMap(str){
    let obj = {};
    
    for(let i = 0; i < str.length; i++){
        
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = 1;
        }
    }
    
    return obj;
}

function solution(X, Y) {
    let answer = '';
    let flag = false;
    let pair = '';
    
    let xHash = checkMap(X);
    let yHash = checkMap(Y);
    
    
    for(let x in xHash){
       if(yHash[x]){
            flag = true;
            pair+= x.repeat(Math.min(yHash[x],xHash[x]));
       }
    }
    
    answer = flag ? BigInt([...pair].sort((a,b)=> b - a).join('')).toString()  : "-1";
    
    return answer;
}