let sortArray = [0, 1, 0, 1, 1, 0, 0, 1];

for (let i = 1; i < sortArray.length; i++) {
  if (sortArray[i - 1] === 0) {
    sortArray.unshift(sortArray[i]);
  } else if (sortArray[i - 1] === 1) {
    sortArray.push(sortArray[i]);
  }
}

console.log(sortArray);
