const zeroConvertion = (matrix) => {
    
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === '.') {
                matrix[i][j] = 0;
            }
        }
    }
}

const modifyAroundValues = (matrix, i, j) => {

    // modificar sector de arriba (si este existe)
    if (i !== 0) { //METIMOS ESTA CONDICION PARA MANEJAR MINAS EN LOS BORDES
        if (matrix[i - 1][j] !== undefined) {

            // Parte central de arriba 
            if (matrix[i - 1][j] !== '*') { // Si hacia arriba no hay nada o tenemos otra mina
                if (isNaN(matrix[i - 1][j])) {
                    matrix[i - 1][j] = '0';
                    matrix[i - 1][j] = parseInt(matrix[i - 1][j]);
                    matrix[i - 1][j] = 1;
                } else {
                    matrix[i - 1][j] += 1;
                }
            }

            // Parte izquierda de arriba
            if (matrix[i - 1][j - 1] !== undefined && matrix[i - 1][j - 1] !== '*') {
                if (isNaN(matrix[i - 1][j - 1])) {
                    matrix[i - 1][j - 1] = '0';
                    matrix[i - 1][j - 1] = parseInt(matrix[i - 1][j - 1]);
                    matrix[i - 1][j - 1] = 1;
                } else {
                    matrix[i - 1][j - 1] += 1;
                }
            }

            // Parte derecha de arriba 
            if (matrix[i - 1][j + 1] !== undefined && matrix[i - 1][j + 1] !== '*') {
                if (isNaN(matrix[i - 1][j + 1])) {
                    matrix[i - 1][j + 1] = '0';
                    matrix[i - 1][j + 1] = parseInt(matrix[i - 1][j + 1]);
                    matrix[i - 1][j + 1] = 1;
                } else {
                    matrix[i - 1][j + 1] += 1;
                }
            }
        }
    }


    // Parte derecha central
    if (matrix[i][j + 1] !== '*' && matrix[i][j + 1] !== undefined) {
        if (isNaN(matrix[i][j + 1])) {
            matrix[i][j + 1] = '0';
            matrix[i][j + 1] = parseInt(matrix[i][j + 1]);
            matrix[i][j + 1] = 1;
        } else {
            matrix[i][j + 1] += 1;
        }
    }

    //Parte izquierda central
    if (matrix[i][j - 1] !== '*' && matrix[i][j - 1] !== undefined) {
        if (isNaN(matrix[i][j - 1])) {
            matrix[i][j - 1] = '0';
            matrix[i][j - 1] = parseInt(matrix[i][j - 1]);
            matrix[i][j - 1] = 1;
        } else {
            matrix[i][j - 1] += 1;
        }
    }

    // Sección de abajo
    if (matrix[i + 1]) { // Metemos esta condicion para manejar minas en los bordes (para que no se desborden)


        if (matrix[i + 1][j] !== undefined) {

            // seccion central de abajo
            if (matrix[i + 1][j] !== '*') {
                if (isNaN(matrix[i + 1][j])) {
                    matrix[i + 1][j] = '0';
                    matrix[i + 1][j] = parseInt(matrix[i + 1][j]);
                    matrix[i + 1][j] = 1;
                } else {
                    matrix[i + 1][j] += 1;
                }
            }

            // seccion izquierda de abajo 
            if (matrix[i + 1][j - 1] !== undefined && matrix[i + 1][j - 1] !== '*') {
                if (isNaN(matrix[i + 1][j - 1])) {
                    matrix[i + 1][j - 1] = '0';
                    matrix[i + 1][j - 1] = parseInt(matrix[i + 1][j - 1]);
                    matrix[i + 1][j - 1] = 1;
                } else {
                    matrix[i + 1][j - 1] += 1;
                }
            }

            //seccion derecha de abajo
            if (matrix[i + 1][j + 1] !== undefined && matrix[i + 1][j + 1] !== '*') {
                if (isNaN(matrix[i + 1][j + 1])) {
                    matrix[i + 1][j + 1] = '0';
                    matrix[i + 1][j + 1] = parseInt(matrix[i + 1][j + 1]);
                    matrix[i + 1][j + 1] = 1;
                } else {
                    matrix[i + 1][j + 1] += 1;
                }
            }
        }
    }

    zeroConvertion(matrix);
}

const mineSweeper = (matrix) => {

    // i = profundidad
    // j = ancho

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === '*') {
                modifyAroundValues(matrix, i, j);
            }
        }
    }
}

const matrix = [
    ['*', '*', '*', '*', '*'],
    ['*', '.', '.', '.', '*'],
    ['*', '.', '.', '.', '*'],
    ['*', '.', '.', '.', '*'],
    ['*', '*', '*', '*', '*']
];

console.log(matrix);
mineSweeper(matrix);
console.log(matrix);

const matrix2 = [
    ['*', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '*', '.', '.'],
    ['.', '.', '.', '.']
];
console.log(matrix2);
mineSweeper(matrix2);
console.log(matrix2);