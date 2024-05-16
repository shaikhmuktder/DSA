let myArray = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 0, 0],
    [8, 9, 10, 80],
  ];

  console.table(myArray);
  /// make rows to columns and columns to rows

  for(let i = 0; i < myArray.length; i++)
  {
    for(let j = i+1; j < myArray[i].length; j++)
    {
    let temp = myArray[i][j]
      myArray[i][j] = myArray[j][i]
      myArray[j][i] = temp
    }
}
console.table(myArray)