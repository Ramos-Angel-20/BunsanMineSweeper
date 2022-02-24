const { readFileSync } = require('fs');

class Solution {
    // m = filas, n = columnas
    constructor(matrix, m, n) {
        this.m = m;
        this.n = n;
        this.matrix = matrix;
    }

    zeroConvertion() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === '.') this.matrix[i][j] = 0;
            }
        }
    }

    modifyAroundValues(matrix, i, j) {

        // modificar sector de arriba (si este existe)
        if (i !== 0) {
            if (matrix[i - 1][j] !== undefined) {
    
                // Parte central de arriba 
                if (matrix[i - 1][j] !== '*') {
                    matrix[i - 1][j] += 1;
                }
    
                // Parte izquierda de arriba
                if (matrix[i - 1][j - 1] !== undefined && matrix[i - 1][j - 1] !== '*') {
                    matrix[i - 1][j - 1] += 1;
                }
    
                // Parte derecha de arriba 
                if (matrix[i - 1][j + 1] !== undefined && matrix[i - 1][j + 1] !== '*') {
                    matrix[i - 1][j + 1] += 1;
                }
            }
        }
    
    
        // Parte derecha central
        if (matrix[i][j + 1] !== '*' && matrix[i][j + 1] !== undefined) {
            matrix[i][j + 1] += 1;
        }
    
        //Parte izquierda central
        if (matrix[i][j - 1] !== '*' && matrix[i][j - 1] !== undefined) {
            matrix[i][j - 1] += 1;
        }
    
        // Sección de abajo
        if (matrix[i + 1]) { // Metemos esta condicion para manejar minas en los bordes (para que no se desborden)
    
            if (matrix[i + 1][j] !== undefined) {
    
                // seccion central de abajo
                if (matrix[i + 1][j] !== '*') {
                    matrix[i + 1][j] += 1;
                }
    
                // seccion izquierda de abajo 
                if (matrix[i + 1][j - 1] !== undefined && matrix[i + 1][j - 1] !== '*') {
                    matrix[i + 1][j - 1] += 1;
                }
    
                //seccion derecha de abajo
                if (matrix[i + 1][j + 1] !== undefined && matrix[i + 1][j + 1] !== '*') {
                    matrix[i + 1][j + 1] += 1;
                }
            }
        }
    }

    mineSweeper() {
        this.zeroConvertion();
        
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.matrix[i][j] === '*') {
                    this.modifyAroundValues(this.matrix, i, j);
                }
            }
        }
    }
}


const readTxtMatrix = () => {
    
    return new Promise((resolve, reject) => {
        const matrix = [];
        const data = readFileSync('./file3.txt', 'utf-8');
        const lines = data.split(/\r\n|\n/);
        const sizes = lines.shift().split(' ');

        lines.forEach(item => {
            const elements = item.split('');
            matrix.push(elements);
        });
        
        const solution = new Solution(matrix, sizes[0], sizes[1]);
        solution.mineSweeper();
        resolve(matrix);
    });
}

module.exports = {
    readTxtMatrix
};