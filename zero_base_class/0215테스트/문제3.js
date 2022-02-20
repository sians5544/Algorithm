function solution(enter, leave) {
  let answer = {};
  let room = {};

  enter.forEach((person) => {
    room[person] = 0;
    const roomSize = Object.keys(room).length;

    if (roomSize !== 1) {
      for (const key in room) {
        room[key] === 0 ? (room[key] = roomSize - 1) : room[key]++;
      }
    }

    while (room.hasOwnProperty(leave[0])) {
      answer[leave[0]] = room[leave[0]];
      delete room[leave[0]];
      leave.shift();
    }
  });

  return Object.values(answer);
}
