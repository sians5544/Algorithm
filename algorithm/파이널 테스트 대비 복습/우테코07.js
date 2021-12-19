function solution(grid, clockwise) {
  let result = [];
  let n = grid.length;

  //   if(clock){
  //     rotated[i][j] = matrix[n-j-1][i];
  // }else{
  //     rotated[i][j] = matrix[j][n-i-1];
  // }

  if (clockwise) {
    for (let i = 0; i < n; i++) {
      let line = '';
      for (let j = 0; j <= i * 2; j++) {
        line += grid[n - 1 - parseInt(j / 2)][i * 2 - j];
      }
      result.push(line);
    }
  } else {
    for (let i = 0; i < n; i++) {
      let line = '';
      for (let j = 0; j <= i * 2; j++) {
        console.log(n - i + 1);
        // console.log(n - 1 - parseInt(j / 2));
        line += grid[n - i][n - 1 - parseInt(j / 2)];
      }
      result.push(line);
    }
  }

  // for (let i = n; i > 0; i--) {
  //   let line = '';
  //   for (let j = i * 2; j >= 0; j--) {
  //     // console.log(n - 1 - parseInt(j % 2));
  //     // console.log(n + 1 - parseInt(j / 2));
  //     //console.log(j);
  //     console.log(i);
  //     //console.log(j * 2 - j);
  //     line += grid[parseInt(j % 2) + 1][n + 1 - parseInt(j / 2)];
  //   }
  //   result.push(line);
  // }
  return result;
}

function rotate(grid, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i * 2; j++) {
      line += grid[n - 1 - parseInt(j / 2)][i * 2 - j];
    }
    result.push(line);
  }

  for (let i = 0; i < n; i++) {
    grid[i] = result[i];
  }

  return result;
}

function solution(grid, clockwise) {
  let newGrid = Array.from({ length: grid.length }, (_, i) => Array(i * 2 + 1).fill(''));

  let x, y;
  for (let i = 0; i < grid.length; i++) {
    const gridSize = grid[i].length;
    if (clockwise === true) {
      x = grid.length - i - 1;
      y = x * 2;
    }
    if (clockwise === false) {
      x = grid.length - 1;
      y = i * 2;
    }
    for (let j = 0; j < gridSize; j++) {
      newGrid[x][y] = grid[i][j];
      if (clockwise === true) {
        if (j === 0) {
          x++;
          y++;
          continue;
        }
        if (j % 2 === 1) y--;
        if (j % 2 === 0) {
          x++;
          y++;
        }
      }
      if (clockwise === false) {
        if (j % 2 === 1) x--;
        if (j % 2 === 0) y--;
      }
    }
  }
  const result = newGrid.map((value) => value.join(''));
  return result;
}

// console.log(rotate(['1', '234', '56789'], 3));
//console.log(rotate(['A', 'MAN', 'DRINK', 'WATER11'], 4));
console.log(solution(['1', '234', '56789'], true)); //["5", "762", "98431"]
// console.log(solution(['1', '234', '56789'], false)); //['9', '487', '13265']
// console.log(solution(['A', 'MAN', 'DRINK', 'WATER11'], false)); //['1', 'K1R', 'NNIET', 'AAMRDAW']
