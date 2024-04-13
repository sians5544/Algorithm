const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let objTeam = {};
let objMember = {};

for (let i = 1; i < input.length; i++) {
  if (input[i] > 1) {
    let team = input[i - 1];
    objTeam[team] = [];
    for (let j = i + 1; j <= i + Number(input[i]); j++) {
      objTeam[team].push(input[j]);
      objMember[input[j]] = team;
    }

    objTeam[team] = objTeam[team].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  } else if (input[i] == 0) {
    console.log(objTeam[input[i - 1]].join("\n"));
  } else if (input[i] == 1) {
    console.log(objMember[input[i - 1]]);
  }
}
