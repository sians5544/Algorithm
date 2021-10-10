'use strict';
//알파벡 대문자로 이루어진 문자열 입력 받아 같은 문자가 연속으로 반복되는 경우 
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법 

// 반복횟수가 1인 경우 생략 



//1. n 과 n +1 로 해서 검색한다 

// function solution(s){

//   let answer = "";

//   let count = 1;


//   s = s.split('');

//   for(let i = 0 ; i < s.length; i++){

//     if(s[i] === s[i+1]){
//       count++;
//     }
//     else{
//       answer = s[i] + count;  
//       count = 0;
//     }

//   }

//   return answer;
// }

// console.log(answer);


/*
* 👋 Welcome to RunJS 🚀
*
* To get started, try typing some code into this editor.
*
* The result will then be shown on the right. 🤯 Mind blowing!
*
* Activate your copy of RunJS to do even more amazing things,
* including:
* - installing NPM packages
* - opening multiple tabs
* - type checking
* - autocomplete
* - and supporting development 😀
*
* Enjoy! 💫
*/

// let test = "KKHSSSSSSSSE";

// console.log(test.substr(0,1));
// function stringZip(s) {
  
//   let differ = s.substr(0,1);
  
//   s.foreach(element =>)
            
  
// }
  
// funtion suloution(s){
  
//   let answer = [];
  
//   for(let i =0; i<s.length; i ++){
//     answer.push(s.substring(i,s.length));
    
//   }
//   answer.sort();
//   return answer;
// }


// consol.log(solution('kseaedu'));

















// function solution(s){
  
//   let answer = [];
//   str = str.toLowerCase();
  
//   let len = str.length
//   for (let i =0 ; i< Math.floor(len/2); i++){
//         if(str[i]  !== str[length-1]){
//           return "NO"
//         }
//   }
// }
// 	var pattern_num = /[0-9]/;	// 숫자 

//   var pattern_eng = /[a-zA-Z]/;	// 문자 

//   var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

//   var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크


// function solution(s){
  
//   let answer = "";
  
//   //배열화 시켜야한다 자바스크립트의 스크립트는 갑변경이 아닌다 
//   //배열 요소로 하나하나 배열화하고 시작
//   s = s.split('');
  
//   const isAlpha = /[a-zA-z]/;

//   let lt =  0;
//   let rt = s.length - 1 ;
  
//   while(lt > rt){
//       if(!isAlpha.test(s[lt])) lt++;
//       else if(!isAlpha.test(s[lt])) rt++;
//       else{
//         let tmp = s[lt]
//         s[lt] = s[rt];
//         s[rt] = tmp;
//         lt++;
//         rt--;
//       }
//   }
//    return s.join('');
// }

// console.log(solution('a#b!GE*T@S'))


// //소문자만 되는걸로 

// function solution2(s){
//   let answer ='YES';
//   s = s.split('');
  
//   let lt = 0, rt= s.length -1 ;
  
//   while(lt> rt){
//     if (s[lt] !== s[rt]){
//        let sub1 = s.substr(lt,rt)
//        let sub2 = s.substr(lt+1, rt+1);
      
//       if(sub1 !== sub1.split('').reverse().join('') && 
//          sub2 !== sub2.split('').reverse().join('')){
//            answer = "NO";
//          }
//       break;
//     }
//     else{
//       lt ++;
//       rt --;
//     }
    
//   }
//   return answer;
// }

// console.log(solution2('abcbdcba'));

// //이중 포문의 완전 탐색 
// function solution3(words){
  
//     let answer = 0;
    
    
    
//     for(let i = 0 ; i < parseInt(words).length-1; i++){
//         for( let j = i+1 ; j < parseInt(words).length-1 ;j++){
            
//             let sub1 = words[i].split('')
//             let sub2 = words[j].split('')
            
//             if(sub1.match(sub2)){
//                 answer += (sub1.length * sub2.length);
//               }
//             else{
//               continue;
//             }
            
//         }
//     }
//      return answer;
// }
// // console.log(solution3(["abcw","baz","foo","bar","xtfn","abcdef"]));


// function solution4(s){
  
//   //해쉬생성
//   let sh = new Map(); 
//   let answer = "";
//   for(let x of s){
//     sh.set(x, (sh.get(x) || 0) +1); //x 라는 키 값이  값을 지정  0 retrun 한다 
//    }
    
//     let max = Number.MIN_SAFE_INTEGER;
//     //max 값에 가장 작은 값 세팅 
  
//     let min = 1e9; 
  
  
//     for(let [key,val] of sh){
//       if( val > max){
//          max = val;
//          answer = key;
//       }
//     } 
  
//   return answer;  
// }
// console.log(solution4('BACVACCACCBDEDE'))

// function solution5(s) {
//     let answer = 0;
    
//     let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
//     for( let i = 0; i<=9; i++){
//         let tmp = s.split(numbers[i]);
        
//         s = tmp.join(i);
        
//     }
//     answer = parseInt(s);
//     return answer;
// }

// console.log(  solution5("one4seveneight"));




////////////////////////////////



// 1.복습하기 

// 풀이보고 다시 혼자 수정 

function solution(s){

  let answer = [];
  let count = 1;


  s = s.split('');

  for(let i = 0 ; i < s.length; i++){

    if(s[i] === s[i+1]){
      count++;
    }
    else{
     
      if(count !== 1){
        answer.push(s[i]);
        answer.push(count);
      }
      else{
        answer.push(s[i]);
      }
       count = 1;
    }

  }
  answer =  answer.join('');
  return answer;
}



function solution2(s){

  let answer = " ";
  let count = 1 ; 

  s = s.split('');
  
  for(let i = 0 ; i < s.length; i++){

    if(s[i] === s[i+1]){
      count++;
    }
    else{
     
      answer += s[i];
      
      if(count !== 1){
        answer+= string(count);
        }
      
      count = 1;
    }
  }
  return answer;
}


console.log(solution('KKHSSSSSSSE'));

///////////////////////문제 2번 :

function solution3(s){
  
  let answer = "";
 
  for(let x of s){
    if(!isNaN(x)){
      answer +=x;
    }
  }
    return  parseInt(answer);
}
 


console.log(solution3("g0en2T0s8eSoft"));




function solution4(s){
  
  let answer = "";
  let isvaildStr = /[a-zA-Z]/gi;
  for ( let x of s){
    
    if(!x.match(isvaildStr)){
      answer+=x;
    }
    else continue;
  }
  answer = parseInt(answer);
  return answer; 
  }


console.log(solution4("g0en2T0s8eSoft"));



function solution5(s){
  
  let answer = s.replace(/[^0-9]/gi,"");
  answer = parseInt(answer);
  return answer;
}

console.log(solution5("g0en2T0s8eSoft"));

//   let checkid = "check check id  chek id";
//   let checkRegeX = /check/gi;
//   let result = checkid.match(checkRegX);
// console.log(result);

// let checkbg = "Beware of bugs in th above code; l have only proved it correact, not tired it";
// let checkRegeX = /b[aui]g/gi;
// let result = checkbg.match(checkRegeX);

// console.log(result);


// let checkAtZstr = "check your phone number 123456789";
// let checkAtZ = /[a-zA-Z]/gi ; 
// let result = checkAtZstr.match(checkAtZ);

// console.log(result);


/////////////////////////문제 3번 

function solution6(s){
  
  let answer = new Array();
  let number = s.length;
  for (let i = 0; i <number; i++){
    answer[i] = s.slice(i,number);
  }
  
 answer.sort();
  
  return answer ;
}
console.log(solution6("kseaedu"));


function solution7(s){
  
  
  s = s.toLowerCase();
  
  let answer = "YES";
  
  let left_num = 0;
  let right_num = s.length-1;
  
  console.log(s);
  
  while(left_num < right_num){
    
    if(s[left_num] === s[right_num]){
        left_num++;
        right_num--;
    }
    else return "NO";
  }
  
  return answer ; 
  
}

console.log(solution7("abcd"));



function solution8(s){
  
  let answer = 'YES';
  s = s.toLowerCase();
  if( s.split('').reverse().join('') !==s){
    return 'NO';
  }
  
  return answer;
}
console.log(solution8("gooG"));



// function solution9(s){
  
//   let answer = 'YES';
  
//   s = s.toLowerCase();
  
//   let left_num = 0;
//   let right_num = s.length-1;

//   while ( left_num < right_num){
    
//     if( s[left_num] !== s[right_num]){
//       let sub1 = s.substring(left_num,right_num);
//       let sub2 = s.substring(left_num+1 ,right_num+1)
//       if(sub1!==sub1.split('').reverse().join('') && sub2 !== sub2.split('').reverse().join('')){
//         return 'NO';
//       }
//       break;
//     }
//   else{
//       left_num ++;
//       right_num --;
//     }
//   }
//   return answer;
// }
  
  
//   console.log(solution9("abcbdcba"));



function solution10(s){
  
  let answer = "";
  let left_num = 0;
  let right_num = s.length -1;
  let validEng = /[a-zA-Z]/; 
  s = s.split('');
 
  
  while(left_num < right_num){
    if (!validEng.test(s[left_num])) left_num ++ ;
    else if(!validEng.test(s[right_num])) right_num--;
    else{
      let swap = s[left_num];
      s[left_num] =  s[right_num];
      s[right_num] = swap;
      left_num ++;
      right_num--;
    }
  }

  return answer;
}

console.log(solution10("a#b!GE*T@S"));


// const map = new Map();

// map.set('key1','value1');

// map.set('key2','value2');

// for(let [key,value] of map){
// 	console.log(`${key} = ${value}`);
// }


function solution12(s){
  
  let answer = "";
  let hashClass = new Map();
  
  let max = Number.MIN_SAFE_INTEGER;
  
  for( let x of s){
    hashClass.set(x,(hashClass.get(x) || 0)+1);  
  }
  
  for(let [key, value] of hashClass){
    if(value > max){
      max = value;
      answer = key;
    }
  }
  return answer;
}
console.log(solution12("BACBCCACCBDEDE"));


/// 아나그램 짜보기

function solution13(s1, s2){

  let hashAna1 = new Map();
  let count = 0;
  for(let x of s1){
      hashAna1.set(x, (hashAna1.get(x) || 0) +1);
    }
  
  console.log(hashAna1);
  
  for( let y of s2){
    if( ! hashAna1.has(y) && hashAna1.get(y)!==0){
    return "NO";
    }
    else  hashAna1.set(y,(hashAna1.get(y)-1));
  }
  return 'YES';
}
console.log(solution13('AbaAeCe','baeeACA'));  

function solution(words){  
  let answer, i;
  for(i=0; i<words[0].length; i++){
      let sH=new Map();
      let flag=true;
      for(let j=0; j<words.length; j++){
          let x=words[j].substring(0, i+1);
          if(sH.has(x)){
              flag=false;
              break;
          }
          sH.set(x, 1);
      }
      if(flag) break;
  }
  answer=i+1;
  return answer;
}
console.log(solution(["ackky", "kabck", "yokkcs"]));