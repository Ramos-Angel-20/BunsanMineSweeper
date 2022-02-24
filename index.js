const { showMenu, stop } = require('./helpers/showMenu');
const { readTxtMatrix } = require('./mineSweeper');

const main = async () => {
    
    let option = '';

    do {
    
        option = await showMenu();
        if (option === '1') {
            const matrixSetup = await readTxtMatrix();
            console.log(matrixSetup);
        }

        await stop();

    } while (option !== '2');
}

main();