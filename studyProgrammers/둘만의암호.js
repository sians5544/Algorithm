function solution(s, skip, index) {
    let answer = '';
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(let str of skip){
       alphabet = alphabet.replace(str,"");
    }
    
    for(let a of s){
         let num = alphabet.indexOf(a) + index;
        answer+= alphabet[num % alphabet.length];
    }
    
    return answer;
}