import { readFile, parseMatrixInput } from "./MatrixInputReader";
import Sudoku from "./Sudoku";


const input = parseMatrixInput(readFile('./matrix-input.txt'))

const sudoku = new Sudoku(input);

console.time();
//console.log('\n The Sudoku Problem');
//console.log();
//console.log('\n The Sudoku Solution');
//console.log();
Sudoku.solve(sudoku);
console.timeEnd();