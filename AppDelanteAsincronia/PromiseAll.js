
//Simulacion de BDs

const usuarios = [
    { id: 1, nombre: 'Ricardo', profesion_id: 1 },
    { id: 2, nombre: 'Alejandro', profesion_id: 1 },
    { id: 3, nombre: 'Diego', profesion_id: 2 }
]

const profesion = {
    1: 'programador',
    2: 'disenador',
    3: 'Ingeniero',
    4: 'Biologo',
    5: 'Quimico'
}
////////////////////////////////////////////////////
//////////////////////////////////////////////////
//Simulando llamdos a una BDs
//Las funciones deben retornar una promesa
function getUsuarios() {
    return new Promise((resolved, reject) => {

        setTimeout(() => {
            resolved(usuarios)
        }, 1000)
    })
}

function getUsuario(id) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(usuarios.filter((usuario) => usuario.id === id)[0])
        }, 3000)
    })

}

function getProfesion(id) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(profesion[id])
        }, 1000)
    })
}

Promise.all([getProfesion(1), getProfesion(2)])
    .then((resp) => console.log(resp))

// getProfesion(1)
//     .then((profesion) => console.log(profesion))

//     // .then(() => getProfesion(2))
//     .then((profesion) => console.log(profesion))

//     .then(() => getProfesion(3))
//     .then((profesion) => console.log(profesion))

//     .then(() => getProfesion(4))
//     .then((profesion) => console.log(profesion))

//     .then(() => getProfesion(5))
//     .then((profesion) => console.log(profesion))

//     .then(() => getUsuario(1))
//     .then((usuario) => console.log(usuario))

//     .then(() => getUsuario(2))
//     .then((usuario) => console.log(usuario))

//     .then(() => getUsuario(3))
//     .then((usuario) => console.log(usuario))



/*Para que funciona el promiseAll y que problema soluciona */
/*El problema de ejecutar los callback de manera secuencial, es que si uno de los .then()
no depende de los resultados de los anteriores,este tomara el tiempo de ejecucion mas el
 de los .then() que lo preceden, para resolver este problema usamos Promise.all(), el cual recibe un array.

 El metodo Promise.all() retorna una promesa el cual se captura la resolucion de la promesa con un .then(),
 el promise.all() presrva el orden de las promesas que le pasamos como argumentos.
 Este metodo retorna cuando todas las promesas estan resueltas por lo que el tiempo que tarde en retornar sera
 el tiempos de la promesa argumento que tome mas tiempo*/
