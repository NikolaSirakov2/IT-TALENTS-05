let array = [7, 2, 7, 2, 9, 3];
let itsZigZag = false;

for (let i = 1; i < array.length; i += 2) {
  if (array[i] < array[i - 1]) {
    if (array[i] < array[i - 1] && array[i] < array[i + 1]) {
      itsZigZag = true;
    } else {
      itsZigZag = false;
      break;
    }
  }
}

console.log(itsZigZag);
