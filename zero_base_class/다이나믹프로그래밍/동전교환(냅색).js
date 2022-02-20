// 거슬러줄 동전 금액 만큼 배열을 잡아준다  dy
// 각 배열에 해당 금액으로는 동전을 몇개 거슬러 줄지를 기록한다 


//dy[i] : i 금액을 거슬러 주는데 사용된 동전의 최소 동전의 개수 
// j = coin[i] ~ m : 2~15 원까지
// dy[j- coin[i]] + 1 -> 기존의 dy[j] 라는 값 보다 작으면 바꾼다 
// 기존값이 더 나으면 그대로 간다 
//  dy[j-coin[i]] +1 이람ㄴ j 가 10원이면 - 금액 빼준다 그 최소 금액에 +1  
function solution(coin,m){
  let answer = 0;
  let  dy = Array(m+1).fill(1000);
  
  dy [0] = 0;

  for(let i = 0; i<coin.length; i++){
    for( let j=coin[i]; j<=m ;j++){
      dy[j] = Math.min(dy[j], dy[j-coin[i]] +1);
    }
  }

  answer = dy[m];
  return answer;
}

console.log(solution([1,2,5],15));