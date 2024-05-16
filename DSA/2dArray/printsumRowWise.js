// print sum Row Wise 
// time complexity M*N 
// spce complexity O(N) 
let myArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0],
    [8, 9, 10, 80]
    ];

for (let i = 0; i < myArray.length; i++) {
    let sum = 0
    for (let j = 0; j < myArray[i].length; j++) {
        sum = sum +myArray[i][j];
    }
    console.log(sum)
}