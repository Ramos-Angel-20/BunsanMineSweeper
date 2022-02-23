const { createInterface } = require('readline');
const { createReadStream } = require('fs');

const mineSweeperRows = () => {

    return new Promise((resolve, reject) => {

        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Introduzca la cantidad de filas de su matriz (valor numerico): ', (value) => {
            readline.close();
            resolve(parseInt(value));
        });
    });
};

const mineSweeperColumns = () => {

    return new Promise((resolve, reject) => {

        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Introduzca la cantidad de columnas de su matriz (valor numerico): ', (value) => {
            readline.close();
            resolve(parseInt(value));
        });
    });
};

const fillMatrix = (m, n) => {

    // return new Promise((resolve, reject) => {

    //     const matrix = [];

    //     const readline = createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //     });

    //     for (let i = 0; i < m; i++) {

    //         console.log(`Valores de las columnas de la fila ${i + 1}`);
    //         const values = [];
    //         for (let j = 0; j < n; j++) {
    //             readline.question(`Ingresa un valor "." para espacios vacios y "*" para una mina: `, (option) => {
    //                 values.push(option);
    //             });

    //             readline.close();
    //         }
    //         matrix.push(values);
    //     }
    //     resolve(matrix);
    // });

    return new Promise((resolve, reject) => {

        const matrix = [];

        const matrixFillment = (m, n) => {

            const readline = createInterface({
                input: process.stdin,
                output: process.stdout
            });

            let countM = 0;
            let countN = 0;

            const recursiveQuestion = (count) => {
                const values = [];
                
                if (countM === m) {
                    readline.close();
                    resolve(values);
                }
                
                readline.question('Ingrese un valor: ',  (option) => {
                    values.push(parseInt(option));
                    recursiveQuestion(countM + 1);
                });
            }

            
        }

    });
};

const readTxtMatrix = () => {
    
    return new Promise((resolve, reject) => {
        const readedValues = [];
        
        const readInterface = createInterface({
            input: createReadStream('./file2.txt'),
            output: process.stdout,
            console: false
        });

        readInterface.on('line', function(line) {
            readedValues.push(line);
        });

        readedValues.forEach((item, index) => {
            console.log(item)
        });

        resolve(readedValues);
    });
    
}

module.exports = {
    mineSweeperRows,
    mineSweeperColumns,
    fillMatrix,
    readTxtMatrix
};