function solution(words){

 let answer = 0; 
 let i;

  for(i = 0; i<words[0].length; i++){
    let hash = new Map(); // 글자 늘어갈때마다 새로운 hash 세팅 여기에 word 애들 돌면서 그 글자 가지고 있는지 확인하기 위해 
    let flag = true;
    for(let j = 0; j<words.length; j++){

      let str = words[j].substring(0,i+1);

      if(hash.get(str)){
        flag = false; // 각 단어들이 공통의 문자를 가지고 있으면 접두사가 될수 없기 때문에 false 처리 
        break;
      }
      hash.set(str,1); // 확인 했단 의미의 1
    }
    if(flag) break // 공통의 문자열을 가지고 있지 않은 애들이 접두가가 될수 있음으로 해당 글자수로 자른게 true 라면 글자수 잘라서 보던거 멈춰 
  }
  answer = i+1; // i는 글자의 인덱스 번호이기 때문에 문자의 길이는 +1 해줘서 리턴해야함 

  return answer;
}


// function solution(words){  
//   let answer, i;
//   for(i=0; i<words[0].length; i++){
//       let sH=new Map();
//       let flag=true;
//       for(let j=0; j<words.length; j++){
//           let x=words[j].substring(0, i+1);
        
//           if(sH.has(x)){
//             console.log(x);
//               flag=false;
//               console.log(sH);
//               break;
//           }

//           sH.set(x, 1);
//           console.log(`이게 set 뒤에 hash`);
//           console.log(sH);
//       }
//       if(flag) break;
//   }
//   answer=i+1;
//   return answer;
// }
//console.log(solution(["ackky", "kabck", "yokkcs"]));
console.log(solution(["seeasue", "sesseysu", "semeas"]));
