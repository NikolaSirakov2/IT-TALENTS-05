// function a() {
//   b();
// }

// function b() {
//   a();
// }

// a();

// function one(a, b, c) {
//   return function (a, b, c) {
//     return a + b + c;
//   };
// }

// one(1, 2, 3);

// let a = 0;
// let b = [];

// console.log(++a && !!"false" && b);

// let arr = [1, 2];

// arr[0] = arr;

// console.log(arr);

// let text = "Maika mu!";
// text = text.split("mu").join(" ");
// console.log(text);

// console.log(undefined == false);

// function a() {
//   function b() {
//     console.log(c);
//   }
//   var c = "`Maika mu";

//   return function () {
//     return b;
//   };
// }

// console.log(a()()());

let matr = [
  [1, 2, 3, 4],
  [3, 5, 6, 3],
];

let newMatr = [];

for (let i = 0; i < matr.length; i++) {
  newMatr[i] = matr[i].slice(0, matr[i].length);
}

newMatr[0][0] = 2;
console.log(matr[0]);
console.log(newMatr[0]);
