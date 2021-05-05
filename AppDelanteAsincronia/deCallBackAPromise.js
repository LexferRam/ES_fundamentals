
//Simulacion de BDs

const usuarios = [
    { id: 1, nombre: 'Ricardo', profesion_id: 1 },
    { id: 2, nombre: 'Alejandro', profesion_id: 1 },
    { id: 3, nombre: 'Diego', profesion_id: 2 }
]

const profesion = {
    1: 'programador',
    2: 'disenador'
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

//callbacks anidados
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// getUsuarios((err, usuarios) => {
//     const AlejandroId = usuarios[1].id;

//     getUsuario(AlejandroId, (err, usuario) => {
//         const profesionId = usuario.profesion_id;

//         getProfesion(profesionId, (err, profesion) => {
//             console.log('La profesion de Alejandro es:', profesion)
//         })
//     })
// })

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//COnvirtiendo los callbacks anidados a promesas
//todas las promesa son objetos y tienen un metodo llamado .then(), que es el que se ejecuta con la funcion resolved

getUsuarios()//ejecuta la promesa, una vez resuelta(resolved) pasa a ejecutar el sig .then()

    .then((usuarios) => getUsuario(usuarios[1].id))

    .then((usuario) => getProfesion(usuario.profesion_id))
    .then((profesion) => console.log('La profesion de Alejandro es:', profesion))

//NOTA:
//cada vez que se ejecuta un .then() se crea una nueva promesa(cuando se llama un then se retorna una promise)
/*Cuando se retorna una promesa el sig .then() va estar esperando el resultado de la promesa del .then() anterior */