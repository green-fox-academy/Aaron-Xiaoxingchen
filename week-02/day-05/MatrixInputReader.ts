import {readFileSync} from 'fs';

export function readFile(filename: string): string{
  try{
    const fileContent = readFileSync(filename, 'UTF-8');
    return fileContent;
  }catch(err){
    return '';
  }
}

export function parseMatrixInput(matrix : string): number[][]{
  return matrix
    .split('\n')
    .map(line => line.split(' ')
    .map(val => parseInt(val) ? parseInt(val) : 0));
}