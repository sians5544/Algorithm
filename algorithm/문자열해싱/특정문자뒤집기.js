function solution(s){
  s = s.split("");

  let regular = /[a-zA-Z]/;
  let left = 0;

  let right = s.length -1;

  while(left<=right){
    if(regular.test(s[left])){

      let backup = s[left];

      s[left] = s[right];
      s[right] = backup;
    }
    left++;
    right--;
  }

  s = s.join("");
  return s;
}

console.log(solution("a#b!GE*T@S"));