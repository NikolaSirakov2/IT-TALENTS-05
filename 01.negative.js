let array = [1, 3, 1, 3];
let allPositive = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    allPositive = false;
    break;
  }
}

console.log(allPositive);
