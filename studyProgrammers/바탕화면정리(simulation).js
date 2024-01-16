function solution(wallpaper) {
  let maxX = 0;
  let maxY = 0;

  let minX = wallpaper.length - 1;
  let minY = wallpaper[0].length - 1;

  for (let i = 0; i< wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        maxX = Math.max(maxX, i);
        maxY = Math.max(maxY, j);
        minX = Math.min(minX, i);
        minY = Math.min(minY, j);
      }
    }
  }

  return [minX, minY, maxX + 1, maxY + 1];
}