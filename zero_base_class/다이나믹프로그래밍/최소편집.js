function solution(s1, s2){  
  let answer=0;
  let len1=s1.length;
  let len2=s2.length;
  let dy=Array.from(Array(1001), ()=>Array(1001).fill(0));
  for(let i=1; i<=len1; i++) dy[i][0]=i;
  for(let i=1; i<=len2; i++) dy[0][i]=i;
  for(let i=1; i<=len1; i++){
      for(let j=1; j<=len2; j++){
          if(s1[i-1]===s2[j-1]){
              dy[i][j]=dy[i-1][j-1];
          }
          else{
              dy[i][j]=Math.min(dy[i-1][j], dy[i][j-1], dy[i-1][j-1])+1; // 작은 것에다 +1  편집을 하겠다는 의미 
          }
      }
  }
  answer=dy[len1][len2]
  return answer;
}
console.log(solution("BAOBAB", "BACBA"));