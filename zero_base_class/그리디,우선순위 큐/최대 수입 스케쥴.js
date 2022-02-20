
class maxHeap{

  constructor(){
    this.heap = [];
    this.heap.push(1e9); //10억 세팅 0번은 큰 값으로 생성해줘야한다 
  } //생성자로 배열 하나 생성 

  //노드 추가 
  insert(val){
    this.heap.push(val); // 끝 노드 하나 생성 
    this.upheap(this.heap.length-1); // 끝 노드의 인덱스를 알아야지 값 비교 가능  
  }
  upheap(pos){
    let tmp = this.heap[pos]; // 자기 자리를 찾아가려고 하는 값(위치를 위해서 ), 인서트에서 추가해준 값
    while(tmp > this.heap[parseInt(pos/2)]){ // parseInt(pos/2) temp의 부모노드이다 
      this.heap[pos] = this.heap[parseInt(pos/2)]; 
      pos = parseInt(pos/2) //pos 는 최종적인 위치를 찾는 애다 
    }
    this.heap[pos] = tmp; //upheap 
  }
  get(){
    if(this.heap.length===2) return this.heap.pop();
    let res = this.heap[1]; // 루트값 저장
    this.heap[1] = this.heap.pop(); // 맨 끝노드 하나 나와서 1번에 넣어준다 
    this.downheap(1, this.heap.length-1); //pos는 마지막 부모까지만 내려간다 그래서 마지막 노드의  /2 하면 마지막 부모를 찾을 수 있다 안그러면 인덱스 아웃오브 에러남 
    return res;
  }
  downheap(pos,len){
    let tmp = this.heap[pos],child;
    while(pos<=parseInt(len/2)){ //자기 자리 찾을 때 까지 계속 내려간다 마지막 부모까지 
      child = pos * 2;  //child 는 왼쪽 자식을 가리키고 있다  
      // 두 자식 중에서 큰걸 찾아야한다 
      if(child<len && this.heap[child] < this.heap[child+1]) child++; 
      if(tmp>=this.heap[child]) break; //자식보다 크거나 같으면 더이상 내려가면 안되므로 멈춰야한다 
      this.heap[pos] = this.heap[child];// 자식 값이 부모 위치로 옮겨간다 
      pos=child; // 얘네는 이제 포인트의 위치를 바꿔주는 것 
    }
    this.heap[pos] = tmp;
  }
  size(){
    return this.heap.length-1;  //heap 이 비어있냐 아닌가를 판단도 가능 
  }
}

// 들어오면 날짜를 기준으로 내림차순을 해라 
// 3 60  -> 3일 이내에 와서 해주면  60만원을 주겠다 
// 3 60 , 3 30 , 2 50, 2 40 , 순으로 
// 날짜별로 꺼꾸로 간다 3일에 할수 있는 강의는 제일 좋은건 60
// 2 일 날짜에 있는 것 중 가장 좋은거 찾으려면 2 다 넣다가 
// 1을 만나면 break;
// for max 날짜부터 1일 까지 돌면서 그 날짜 까지만 insert 
//끝아면 하나 잡아서 answer 에 누적 
// nums.sort((a, b)=>a[0]-b[0]);


function solution(nums){

  let answer = 0;

  nums.sort((a,b)=> b[1]-a[1]); // 강연 D 일이 큰 순서대로 정렬 

  let day = nums[0][1]; // 제일 큰 day 부터 돌기 
  let maxH = new maxHeap();

  let k = 0  //let k = 0 으로 for문 안에 선언해줬을 시에 3번 돌면서 계속 k = 0 으로 선언되어  nums.length * 3 을 자꾸 더 돌아주려 해서 밖으로 빼서 선언 
  for(let i = day; i > 0; i-- ){ 
    for( ; k<nums.length ; k++){  
      console.log(`${nums[k][1]} ${i}`);
      if (nums[k][1] < i){
        break;
      } 
      maxH.insert(nums[k][0]); // 강연 D일이 1이 아닌경우에만 높은 강연료들을 골라서 스케쥴 선정 가능    
      //console.log(maxH);  
  }

  
  if( maxH.size()>0){ // heap에 값이 존재할 때만 최상값을 가져와 누적 
    answer +=maxH.get();
  }

  }
  return answer; 
}

console.log(solution([[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]));
//console.log(solution([[50, 2], [40, 2], [20, 1], [10, 1]]));
//console.log(solution([[50, 1], [40, 2], [20, 3], [10, 1]]));


function solution(nums, m){
  let answer=0;
  nums.sort((a, b)=>b[1]-a[1]);
  let maxN=nums[0][1];
  let maxH=new maxHeap();
  let i=0;
  for(let day=maxN; day>=1; day--){
      for( ; i<nums.length; i++){
          if(nums[i][1]<day) break;
          maxH.insert(nums[i][0]);
      }
      if(maxH.size()>0){
          answer+=maxH.get();
      }
  }
  return answer;
}