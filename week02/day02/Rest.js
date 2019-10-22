function matrix(row, col, ...matrix){
  if (row < 1 || col < 1 || row != matrix.length) {
    return null;
  }
  let res = [];
  for (let rowVal of matrix) {
  let curRow = [];
  for (let i = 0; i < col; i++) {
    curRow.push(rowVal);
  }
  res.push(curRow);
  }

  return res;
}