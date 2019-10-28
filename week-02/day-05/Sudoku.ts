import Matrix from "./Matrix";

export default class Sudoku extends Matrix<number>{
	constructor(board: number[][]){
		super(9,9);
		this.val = [...board];
	}

	solve(board: number[][]): boolean{
		for(let i = 0; i < 9; i++){
			for(let j = 0; j < 9; j++){
				if(board[i][j] === 0){
					for(let c = 1; c <= 9; c++){
						if(this.isValid(this.val, i, j, c)){
							board[i][j] = c;
							if(this.solve(board))
								return true;
								else{
									this.val[i][j] = 0;
								}
						}
						return false;
					}
				}
			}
		}
		return true;
	}

	isValid(board: number[][], row: number, col: number, c: number): boolean{
		for(let i = 0; i < 9; i++){
			if(board[i][col] != 0 && board[i][col] === c) return false;
			if(board[row][i] != 0 && board[row][i] === c) return false;
			if(board[3*(row/3) + i / 3][3*(col/3) + i%3] != 0 && board[3*(row/3)+ i/3][3*(col/3)+i % 3] === c) return false;
		}
		return true;
	}
}