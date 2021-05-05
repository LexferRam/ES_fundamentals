
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

//Simulando llamdos a una BDs

function getUsuarios(callback) {
    setTimeout(() => {
        //es una convencion que el 1er parametro sea el manejo del error pero si no hubo error el callback pasa null
        callback(null, usuarios)
    }, 1000)
}

//getUsuarios((err, usuarios) => console.log(usuarios))

function getUsuario(id, callback) {
    setTimeout(() => {
        callback(null, usuarios.filter((usuario) => usuario.id === id)[0], () => { console.log('aqui') })
    }, 1000)
}

function getProfesion(id, callback) {
    setTimeout(() => {
        callback(null, profesion[id])
    }, 1000)
}

//haciendo el nesting de callbacks
/* pasos: pedimos lista de los usuarios, pedimos el usuario especifico(id de la profesion),
con el id de la profesion accedemos a la profesion///////en total son 3 llamadas anidadas/////*/

getUsuarios((err, usuarios) => {
    //verificando si hay error
    if (err) return huboError(err)
    //seleccionamos el id del usuario que queremos
    const AlejandroId = usuarios[1].id;

    getUsuario(AlejandroId, (err, usuario) => {
        //seleccionamos el id de la profesion del usuario
        const profesionId = usuario.profesion_id;

        getProfesion(profesionId, (err, profesion) => {
            console.log('La profesion de Alejandro es:', profesion)
        })
    })
})

//El principal problema de los callback es la anidacion(cuando se tienen muchas funciones asincronas que dependen unas de las otras) de callbacks que
// pueden llevar a crear "callback hell" la piramide del infierno