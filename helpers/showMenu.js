const { createInterface } = require('readline');

const showMenu = () => {

    return new Promise((resolve, reject) => {
        console.clear();
        console.log('=========================================');
        console.log('Opciones');
        console.log('1.- Introducir y resolver nueva matriz...');
        console.log('2.- Salir...');
        console.log('=========================================');

        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (option) => {
            if (isNaN(option)) {
                console.log('[MINESWEEPER - ERROR]: Solo se admiten valores numericos...');
                readline.close();
            }

            readline.close();
            resolve(option);
        });
    });
}

const stop = () => {

    return new Promise((resolve, reject) => {

        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Presione ENTER para continuar', (option) => {
            readline.close();
            resolve(option);
            
        });

    });
}

module.exports = {
    showMenu,
    stop
};