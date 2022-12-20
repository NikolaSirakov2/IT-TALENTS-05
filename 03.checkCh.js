let arr = ["arr", "arr", "cha", "arr"];
let have = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "ch") {
    have = true;
    console.log(i);
    break;
  }
}

if (have === false) {
  console.log(-1);
}
