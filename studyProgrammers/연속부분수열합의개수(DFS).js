function solution(elements) {
  let len = elements.length;
  let copyElements = [...elements, elements[0]];
  let check = [];
  let sumSet = new Set();
  let tmp = [];

  const DFS = (v, len) => {
    if (tmp.length === len) {
      sumSet.add(tmp.reduce((acc, cur) => acc + cur));
    } else {
      for (let i = 0; i < copyElements.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp.push(copyElements[i]);
          DFS(v + 1, len);
          tmp.shift();
        }
      }
    }
  };

  for (let i = 1; i <= len; i++) {
    check = Array(copyElements.length).fill(0);
    copyElements = [...elements, ...elements.slice(0, i)];
    tmp = [];
    DFS(0, i);
  }

  return sumSet.size;
}
