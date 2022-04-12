function solution(numbers, hand) {
  let answer = '';

  let index = 1;
  let keypad = Array.from(Array(3), () => Array.from(Array(3), () => index++));
  keypad.push(['*', 0, '#']);
  let hash = new Map();

  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < 3; j++) {
      hash.set(keypad[i][j], [i, j]);
    }
  }

  console.log(hash);

  let left = hash.get('*');
  let right = hash.get('#');

  for (let num of numbers) {
    let [x, y] = hash.get(num);

    if (num === 1 || num === 4 || num === 7) {
      left = [x, y];
      answer += 'L';
    } else if (num === 3 || num === 6 || num === 9) {
      right = [x, y];
      answer += 'R';
    } else {
      let dleft = Math.abs(x - left[0]) + Math.abs(y - left[1]);
      let dright = Math.abs(x - right[0]) + Math.abs(y - right[1]);

      if (dleft > dright) {
        right = [x, y];
        answer += 'R';
      } else if (dleft < dright) {
        left = [x, y];
        answer += 'L';
      } else {
        if (hand === 'right') {
          answer += 'R';
          right = [x, y];
        } else {
          answer += 'L';
          left = [x, y];
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
