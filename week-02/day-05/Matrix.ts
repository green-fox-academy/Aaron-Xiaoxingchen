export default class Matrix<T>{
    row: number;
    col: number;
    val: T[][] ;

    constructor(row: number, col: number, init: T = null){
			this.row = row;
			this.col = col;
			for(let i = 0; i < row; i++){
				this.val = [];
				for(let j = 0; j < col; j++){
					this.val[i][j] = init;
				}
			}
    }
} 