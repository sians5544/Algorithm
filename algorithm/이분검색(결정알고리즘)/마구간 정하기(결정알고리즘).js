// 마구간들을 좌표를 가지고 있고 이게 중복되는 일은 없다 

// 제일 왼쪽 마구간에 말을 넣는것은 최고의 방법이다 

// 첫 좌표가 


// 두 말사이의 최소 간격 1 

// 마구간의 번호가 stable 가장 가까운 두 말의 최대거리  -> 최대한 듬성듬성 배치해봐라...^^ 



// 표간의 간격이니까 lt = 1 rt = 9 로 정해도됨 
// mid 값  가장 가까운 두 말의 거리  다른 말들을 배치할 때 mid보다는 크거나 같아야한다  // 아무리 많이 가까워도 얘보다는 가까우면 안된다 
// 말은 c마리 이상 넣어야 하는 것이다 


// function count(stable, dist){
//   let cnt=1, ep=stable[0]; // 첫번째 마구간에 한마리 넣고 
//   for(let i=1; i<stable.length; i++){
//       if(stable[i]-ep>=dist){ // 좌표 - 말 들어간 좌표 (마구간 거리 기준이 바뀐다 )
//           cnt++;
//           ep=stable[i];
//       }
//   }  
//   return cnt;
// }
// function solution(stables, c){
//    let answer;
//    stables.sort((a, b)=>a-b); // 정렬 해줘야한다 수직선상의 좌표처럼 
//    let lt=1;
//    let rt=stables[stables.length-1];
//    while(lt<=rt){
//        let mid=parseInt((lt+rt)/2); // 걔로부터 다음말까지의 거리   
//        if(count(stables, mid)>=c){ // 말 배치가 우리가 원하는 값보다 늘려가야한다 
//            answer=mid;
//            lt=mid+1;
//        }
//        else rt=mid-1;
//    } 
//    return answer;
// }




function solution(stables, c) {
    let answer = 0, left = 0;
    let right = stables[stables.length - 1];

    stables.sort((a, b) => a - b);

    //mid 거리로는 몇마리나 배치할 수 있는지를 카운트 하는 함수 
    function dist(mid) {

        let cnt = 1;

        //첫번째 좌표부터 비교 
        let check = stables[0];
        for (let i = 1; i < stables.length; i++) {
            if (stables[i] - check >= mid) {
                cnt++;
                check = stables[i];
            }
        }
        return cnt;
    }

    while (left <= right) {

        let mid = parseInt((left + right) / 2);

        if (dist(mid) >= c) {
            answer = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));