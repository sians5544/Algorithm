function solution(phone_book) {
    let answer = true;
    let hashObj = {};
    
    for(let phone of phone_book){
        hashObj[phone] = true;    
    }
    
    for(let book of phone_book){
        for(let i = 1; i < book.length; i++){
            if(hashObj[book.slice(0,i)]) return false;
        }
    }
    
    return answer;
}