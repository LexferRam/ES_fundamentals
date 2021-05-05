// const fetch = require('node-fetch');

function getNombre(username) {
    const url = `https://api.github.com/users/${username}`
    fetch(url)//la funcion fetch retorna una promesa la cula se recibe con un .then()
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(json.login)
        })
}

getNombre('LexferRam')

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//Transformando a AsyncAwait

async function getNombre(username) {
    const url = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url) //await hace que la ejecucion de esta funcion se detenga ah'i hasta que se obtenga la respuesta
    const json = await respuesta.json();

    //console.log(json.login)// retorna LexferRam
    return json.login//asyncAwait retorna una promesa
}

//const login = getNombre('LexferRam')//el valor devuelto en esta constante es una promesa, por lo que se puede usar el metodo then()

getNombre('LexferRam')
    .then(nombre => console.log(nombre))

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Control de errores con asyncawait

async function getNombre(username) {
    const url = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url)
    const json = await respuesta.json();

    if (json.status !== 200)
        throw Error('El usuario no exite')

    return json.login
}


getNombre('yonoexistoo')
    .then(nombre => console.log(nombre))
    .catch((e) => console.log(`Error: ${e}`))

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Eliminando promesas por completo y usando un Try/catch

async function getNombre(username) {
    const url = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url)
    const json = await respuesta.json();

    if (respuesta.status !== 200)//la respuesta es la que conserva el statusssss
        throw Error('El usuario no exite')

    return json.login
}

//usando una uncion autoinvocada(se ejecuta cuando se crea)
(async function () {
    try {
        const login = await getNombre('LexferRam');
        console.log(login)
    } catch (e) {
        console.log(`Error: ${e}`)
    }
})()

//asyncAwait es una sintaxis mas amigable ya que es mas legible porque parece codigo sincrono auque en el fondo se trata de promesas(codigo asincrono)