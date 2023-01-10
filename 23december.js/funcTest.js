// function a() {
//   b();
// }

// function b() {
//   a();
// }

// a();

function one(a, b, c) {
  return function (a, b, c) {
    return a + b + c;
  };
}

one(1, 2, 3);
