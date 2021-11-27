// 한 유저를 여러번 신고할 수는 있지만, 유저에 대한 신고 횟수는 1회로 처리 
// k 번 이상 신고당한 유저는 즉시 게시판 이용이 정지, 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송

// 이용자의 ID 가 담긴 문자열 배열 
//let id_list = ["muzi","frodo","apeach","neo"];
// 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 
//let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo", "apeach muzi"] ;
// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아서 return 


function solution(id_list,report,k){
  let answer = [];
  let hash = new Map();
  let len = id_list.length;
  let stop_list = Array.from(Array(len),()=>Array(len).fill(0));
  let stop_count = Array(len).fill(0);

  // user 의 id 값을 hash 에 세팅 
  for(let i = 0; i < len; i++){
    hash.set(id_list[i],i);
  }


  // 신고된 내용을 기준으로 2차원 배열로 세팅 
  for(let repo of report){
    let tmp = repo.split(" ");

    let x = hash.get(tmp[0]);
    let y = hash.get(tmp[1]);

    stop_list[x][y] = 1;
  }

  // 신고된 횟수를 카운팅 하려면 x 축을 기준으로 카운트 

  for(let i = 0; i<len; i++){
    for(let j = 0; j<len; j++){
      if(stop_list[j][i] === 1) stop_count[i]+=1;
    }
  }
  

  for(let i = 0; i<len; i++){
    let cnt = 0;
    for(let j = 0; j<len; j++){
      if(stop_list[i][j] === 1 && stop_count[j] >= k) cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}

console.log(solution(["muzi","frodo","apeach","neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo", "apeach muzi"],2));

// console.log(solution(["con","ryan"],["ryan con" , "ryan con","ryan con","ryan con"],3));

/////////////////////////////////////////
