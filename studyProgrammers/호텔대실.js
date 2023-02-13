function solution(book_time) {
  let answer = 0;
  let min_times = [];
  let endTime = 0;
  let room = [];

  for (let book of book_time) {
    let [sMin, sSed] = book[0].split(':').map(Number);
    let [oMin, oSed] = book[1].split(':').map(Number);
    min_times.push([sMin * 60 + sSed, oMin * 60 + oSed + 10]);
  }

  min_times.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < min_times.length; i++) {
    let index = room.findIndex((r) => r <= min_times[i][0]);
    if (index === -1) room.push(min_times[i][1]);
    else room[index] = min_times[i][1];
  }

  return room.length;
}
