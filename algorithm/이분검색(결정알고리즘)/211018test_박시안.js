'use strict';

function solution(nums){
  let N = nums.length;
  const check = new Array(N).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, K) {
    if (L === N/2) { // 스타트팀에 N/2 명이 뽑혔다면
      const sTeam = [];
      const lTeam = [];
      let sSum ,lSum = 0 ;
      for (let i = 0; i < N; i++) {
        if (check[i]) sTeam.push(i); // 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
        else lTeam.push(i);
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) { // (i,j), (j,i) 쌍을 계속 더해준다.
          sSum = sSum + nums[sTeam[i]][sTeam[j]] + nums[sTeam[j]][sTeam[i]];
          lSum = lSum + nums[lTeam[i]][lTeam[j]] + nums[lTeam[j]][lTeam[i]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
      return;
    }

    for (let i = K; i < N; i++) { // 체크 배열을 스타트 팀 구성에 사용한다.
      check[i] = 1;
      dfs(L + 1, i + 1);
      check[i] = 0;
    }
  }
  dfs(0, 0);
  return min;
}
  // let answer = 0;
  // let team = [];
  // let tmp = [];
  // let n  = nums.length;
  // let len =  parseInt(n/2);
  // let check = Array(nums.length+1).fill(0);

  // function DFS(L,K){
  //   if(L ===len){
  //     team.push(tmp.slice());
  //   }else{
  //     for (let i = K; i < n; i++) { 
  //       check[i] = 1;
  //       tmp.push(nums[i]);
  //       DFS(L + 1, i + 1);
  //       check[i] = 0;
  //       tmp.pop();
  //     }
  //   }
  // }

  // DFS(0,0);

  // let min = Number.MAX_SAFE_INTEGER;
  // let bt = 0;
  // let wi = 0;

  // for(let i = 0 ; i<team.length; i++){
  //   for(let [a,b] of team[i]){
  //     bt+=a;
  //     wi+=b;
  //   }
  //   min = Math.min(min,Math.abs(wi-bt));
  //   bt = 0;
  //   wi = 0;
  // }

  // answer = min;

  // return answer;


//console.log(solution([[87, 84], [66, 78], [94, 94], [93, 87], [72, 92], [78, 63]]));
console.log(solution([[15291, 16507], [18181, 3446], [8872, 13937], [8750, 14365], [16111, 8710], [30345, 16793], [16266, 25736], [206, 13167]])); //86
console.log(solution([[11220, 11404], [26537, 28469], [7129, 16964], [10090, 5749], [14028, 29330], [31060, 17792], [21391, 21976], [32011, 8954], [11657, 27641], [23742, 29411]])); //191
console.log(solution([[9210, 13615], [11731, 8848], [15885, 32108], [19707, 11195], [989, 18498], [22245, 4348]])); //553
console.log(solution([[9210, 13615], [11731, 8848], [15885, 32108], [19707, 11195], [989, 18498], [22245, 4348], [123, 154], [2345, 1234]])); //516
//console.log(solution([[9210, 13615], [11731, 8848], [15885, 32108], [19707, 11195], [989, 18498], [22245, 4348], [1123, 2585], [19048, 408], [28252, 16646], [20055, 26092], [12866, 24303], [781, 15025], [122, 7920], [4681, 12670], [30671, 18942], [28989, 14990]])); //3
