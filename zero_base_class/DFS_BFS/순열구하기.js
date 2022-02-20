// // function solution(nums, m){
// //   let answer=[];
// //   n=nums.length;
// //   let ch=Array.from({length:n}, ()=>0);
// //   let tmp=[];
// //   function DFS(L){
// //       if(L===m){
// //           answer.push(tmp.slice());
// //       }
// //       else{
// //           for(let i=0; i<n; i++){
// //               if(ch[i]===0){
// //                   ch[i]=1;  // 체크 안된것만 사용하기 위해서 순열이라
// //                   tmp.push(nums[i]);
// //                   DFS(L+1);
// //                   ch[i]=0; // 체크를 풀어줘야함
// //                   tmp.pop();
// //               }
// //           }
// //       }
// //   }
// //   DFS(0);
// //   return answer;
// // }

// //console.log(solution([3, 6, 9], 2));

// function solution(nums, m) {
// 	let answer = [];
// 	let check = []; // 방문한 node를 저장하기 위한 배열
// 	let tmp = []; // 방문한 node를 저장하기 위한 배열

// 	// 방문한 곳을 check하기 위한 배열, 0으로 초기화 한다.
// 	for (let i = 0; i < nums.length; i++) {
// 		check[i] = 0;
// 	}

// 	// DFS 시작
// 	function DFS(L) {
// 		// slice() : 깊은 복사를 실행해주는 메소드. 그냥 tmp만 넣어버리면 아무 값도 들어가지 않음.
// 		//자바스크립트에 대한 이해도가 조금 필요한 부분이라 조금 어렵다.
// 		//아예 배열값에 tmp[i]로 입력을 해준 뒤, answer에 push하는 방법도 있음.

// 		// 만약 Level이 m이라면 재귀 끝내는 조건. (2개 입력이기 때문에 L = 0, 1 에서만 실행)
// 		if (L === m) {
// 			answer.push(tmp.slice());
// 			return;
// 		} else {
// 			// 이진 트리 부모노드에서 자식노드로 nums.length 만큼의 가지 수를 만들어준다. (3, 6, 9)
// 			for (let i = 0; i < nums.length; i++) {
// 				// check 배열을 탐색했을 때, 0인 경우는 탐색하지 않은 경우이다.
// 				if (check[i] === 0) {

// 					// tmp에 nums[i] 값을 저장한다.(answer 배열에 출력시키기 위함),
// 					// check 배열에 1을 입력.(중복된 값을 체크하기 위함)
// 					tmp.push(nums[i]);
// 					check[i] = 1;

// 					// 즉, test 케이스의 [3,6,9] 중 [3]을 방문처리하고, 또 다른 세가지의 가지수를 만들어 준다.
// 					DFS(L + 1);

// 					// DFS의 stack이 빠지고 난 이후에 실행 취소. 부모노드로 돌아간다.
// 					// 즉, DFS(L+1)이 return 되었을 때, DFS(L)로 되돌아간 뒤, 방문했던 값들을 되돌려준다.
// 					tmp.pop();
// 					check[i] = 0;
// 				}
// 			}
// 		}
// 	}

// 	// DFS 초기조건 0으로 시작
// 	DFS(0);
// 	return answer;
// }

// function solution(nums,m){

// 	let answer = [];

// 	let tmp = [] ; // 순열을 뽑아서 담을 변수
// 	let check = Array(nums.length).fill(0); // 체크 되는 부분을 확인 함 이미 쓰인 항목이라면 1, 아니라면 0 으로 세팅

// 	function DFS(L){

// 		if(L === m ){
// 			return answer.push(tmp.slice()); // 얕은 복사 처리
// 		}else{
// 			for(let i = 0; i<nums.length; i++){
// 				if(check[i] == 0){
// 					check[i]= 1;
// 					tmp.push(nums[i]);
// 					DFS(L+1);
// 					check[i]= 0;
// 					tmp.pop();
// 				}
// 			}
// 		}
// 	}

// 	DFS(0);
//   return answer;

// }

// 순열  : N 개의 항목에서 R개를 선택할 때 순서를 가지면서 나열하는 방법이다 (중복 x)
// 순서 체크를 위해서 check 배열이 필요함

//순열 : N개의 항목에서 R 개를 선택할 때 순서를 가지면서 나열하는 방법 , (중복 x)
// 중복이  안되기 떄문에 check 배열을 사용해야함

function solution(nums, m) {
  let answer = [];
  let tmp = [];
  let check = Array(nums.length).fill(0);

  function DFS(v) {
    if (v === m) {
      return answer.push(tmp.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (check[i] == 0) {
          check[i] = 1;
          tmp.push(nums[i]);
          DFS(v + 1);
          tmp.pop();
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);
  // return Math.abs(answer[answer.length - 1] - answer[answer.length - 2]);
  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]
