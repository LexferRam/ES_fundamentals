const { taskOne, taskTwo } = require('./tasks');
//EJECUCION DE ASYNC AWAIT DE FORMA SECUENCIAL(DE FUNCIONES ASINCRONAS)
// async function main() {
//     try {
//         console.time('Measuring time')
//         const valueOne = await taskOne();
//         const valueTwo = await taskTwo();
//         console.timeEnd('Measuring time')

//         console.log('Task one returned ', valueOne)
//         console.log('Task two returned ', valueTwo)
//     } catch (e) {
//         console.log(e)
//     }
// }


//EJECUCION DE ASYNC AWAIT DE FORMA PARALELA: aplica cuando las tareas no dependen una de la otra
async function main() {
    try {
        console.time('Measuring time')
        const results = await Promise.all([taskOne(), taskTwo()]);//retorna un arreglo

        console.timeEnd('Measuring time')

        console.log('Task one returned ', results[0]);
        console.log('Task two returned ', results[1]);
    } catch (e) {
        console.log(e)
    }
}

main();

