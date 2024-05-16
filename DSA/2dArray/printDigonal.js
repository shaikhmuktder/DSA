// print diagonal of square matrix
// left to right and right to left
// square matrix = number of rows = number of columns
// Tc = O(N)
// SC = O(1)
let myArray = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 0, 0],
  [8, 9, 10, 80],
];

let i = 0;
let j = 0;
while (i < myArray.length && j < myArray.length) {
  console.log(myArray[i][j]);
  i++;
  j++;
}
i = 0;
j = myArray.length - 1;
while (i < myArray.length && j >= 0) {
  console.log(myArray[i][j]);
  i++;
  j--;
}
