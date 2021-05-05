export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`)
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`)
}

/*Hay dos tipos de 'export' que se pueden hacer, esta el 'default export'
(solo puede ser usado una vez, usualmente para la clase) y 'standard export'  */

/*Otra forma es exportar es al final :
export default User
export {printName, printAge}

*/