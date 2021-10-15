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


let maxH = new maxHeap();

maxH.insert(2);
maxH.insert(3);
maxH.insert(4);


console.log(maxH);