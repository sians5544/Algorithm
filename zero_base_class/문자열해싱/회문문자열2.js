function solution(s){
  let answer = 'YES';

  let left = 0;

  let right = s.length-1;

  s = s.toLowerCase();

  while(left <=right){

    if(s[left] !== s[right]){
      let sub1 = s.substring(left,right);
      let sub2 = s.substring(left+1,right+1);
      if(sub1!==sub1.split('').reverse().join('') && sub2 !== sub2.split('').reverse().join('')) return "NO";
    }
    left++;
    right--;
  }
  return answer;
}

console.log(solution("abcbdcba"));