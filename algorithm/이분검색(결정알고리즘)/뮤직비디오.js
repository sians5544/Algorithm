// 1번 노래와 5번 노래를 같은 dvd에 녹화하기 위해서는 1~5번 사이 모든 노래도 같은 DVD에 녹화 
// ㄴ> 순서를 그대로 유지하기 위함 , 쪼개기 불가능

// DVD의 크기 즉 녹화 가능한 길이를 최소로 하면서 모든 동영상을 녹화 하기로함 
// M개의 DVD는 제조 원가가 적게 들기 때문에 꼭 같은 크기여야함 


// songs에 노래의 길이가 분단위로 주어짐 
// m 에 제조되는 DVD의 개수 (모두 같은 크기)
// m = 3 이라면 DVD 3개가 나오도록 하는데, 하나의 DVD의 최소 용량 

// left right 가 index 를 조정하는 것 같다 

//dvd 가 용량이 9보다 작으면 용량 쪼개야한다 -> 제일 큰 노래 보다는 dvd가 커야한다 

// 이 노래들을 다 밤아내려면 몇장이 필요할까? 
// m보다 작거나 같을 때 

// function solution(songs ,capacity){

//   let left = Math.max(...songs);
//   let right = 1e10;


//   function count(mid){
//     let cnt = 1; // 어차피 한장은 사용하기 때문에 1로 초기화 
//     let sum = 0;

//     for(let x of songs){
//       if(sum+x>capacity){ // 더해보고 용량보다 크면 새로운 한장이 필요하다 
//         cnt++;
//         sum = x; // 이 곡은 새로운 장에 들어간 것 
//       }
//       else{
//         sum+=x;
//       }
//     }
//     return cnt;
//   }

//   while(left <= right){
//     if(mid > )
//   }
// }

// DVD 의 용량을 mid 값의 기준으로 잡는다 
function solution(songs, m) {
  let answer = 0;
  let left = 0;
  let right = 1e7;


  function count(mid) {

    let count = 1;
    let sum = 0;

    for (let i = 0; i < songs.length; i++) {
      if (sum + songs[i] > mid) {
        count++;
        sum = songs[i];
      }
      else {
        sum += songs[i];
      }
    }

    return count;
  }

  while (left <= right) {

    let mid = parseInt((left + right) / 2);

    if (count(mid) <= m) {
      answer = mid;
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }


  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));