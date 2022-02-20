function solution(words){
  let answer = [];

  let hash = new Map();
  
  for(let x of words[0]){ // 배열 중 가장 앞에 있는 것부터 기준으로 잡고 비교 
    hash.set(x,(hash.get(x) || 0) + 1);
  }

  for(let i = 1; i<words.length; i++){
    let hashd = new Map();
    for(let s of words[i]){
      console.log(hash.get(s));
      
    if(hash.get(s)){ // hash.get 을 쓰면 value 값이 0일 때 카운트 하지 않기 위함,  has 를 쓰면 -1 카운트된 애들도 계속 가져옴,  hashd을 기준으로 들어가게 되면서 출력값이 달라진다 
        hash.set(s,hash.get(s)-1); // hash 가 기준이므로 기준을 --처리 
        hashd.set(s,(hashd.get(s) || 0) +1);  // hash을 기준으로 문자열이 카운트 된다 
      }
    }
    hash = hashd; //  2번째 문자열로 hash을 갱신 그래야지 3번째 하고도 비교할 수 있다 
  }

  let str = "";
  for(let [key, val] of hash){
    str+=key.repeat(val);
  }

  answer = str.split("");

  return answer;
}


console.log(solution(["ackky", "kaback", "yokkcs"]));