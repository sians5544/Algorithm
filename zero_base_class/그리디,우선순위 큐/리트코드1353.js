/**
 * @param {number[][]} events
 * @return {number}
 */

 class minHeap{

  constructor(){
    this.heap = [];
    this.heap.push(Number.MIN_SAFE_INTEGER);
  }

  //노드 추가 
  insert(val){
    this.heap.push(val);
    this.upheap(this.heap.length - 1);// 일단 제일 하단에 삽입한다 
  }

  upheap(pos){
    let tmp = this.heap[pos]; // pos -> length - 1
    // 자신의 값이 부모의 값보다 작을 때 까지 반복 
    while(tmp < this.heap[parseInt(pos/2)]){
      this.heap[pos] = this.heap[parseInt(pos/2)];
      pos = parseInt(pos/2); // 부모의 위치 인덱스 값을 세팅 
    }
    this.heap[pos] = tmp; // 부모의 인덱스로 추가한 노드를 세팅
  }

  //최소힙에서 최솟값 꺼내오기 
  get(){
    if(this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1]; // 제일 최소값이 루트 값 저장 
    //루트의 값이 비었으니 맨 마지막 노드를 가져온다 
    this.heap[1] = this.heap.pop();
    //다시 정렬이 흐트러지게 되었으니 일를 루트에서 하나씩 비교하면서 내려가는 메소드 실행
    this.downheap(1,this.heap.length-1);
    return res;
  }

  downheap(pos,len){
    let tmp = this.heap[pos],child;
    while(pos <= parseInt(len/2)){
      child = pos * 2 ;
      if(child < len && this.heap[child] > this.heap[child+1])child++; // 오른쪽 애가 더 작으면 작은 쪽으로 가서 자리 바꾸려고 child++
      if(tmp <= this.heap[child]) break; // 자식이 나보다 크면 이제 그만 내려간다 
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size(){
    return this.heap.length-1; 
  }
}


function solution(events) {
    
    let answer = 0;
    
    events.sort((a, b) => {
      if (a[0] == b[0]) return a[1] - b[1];
      return a[0] - b[0];
    });
    
    for( let day = 1; day<=31; day++){

      if(events[day][i]  `day)
    }
    console.log(events);
    let maxH = new minHeap();
    
    
    
    for(let event of events){
        
        
        // if(event[0]>=check){
        //     check = event[1];
        //     answer++
        // }
    }
    
    return answer; 
    
};

console.log(solution([[1,4],[4,4],[2,2],[3,4],[1,1]]));