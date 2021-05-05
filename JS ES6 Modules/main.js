/*la ppal idea de los modulos es permitir importar y exportar diferentes secciones de codigo desde
archivos diferentes a otros archivos, lo que permite dividir tu codigo en archivos mas pequenos lo
cual hace tu codigo mas facil de leer*/


//para importar funciones se usan {},el nombre debe ser el mismo y se puede usar alias
import U, { printName as printUserName, printAge } from '/user.js'
//hay dos tipos de rutas relativa(empieza por ./) y absoluta(empieza por /)
//cuando se importan su puede cambiar el nombre de la clave

const user = new U('Bob', 11);
console.log(user)

printUserName(user);
printAge(user);

//SE PUEDE OMITIR IMPORTAR EL DEFAULT IMPORT "U"
//usar babeljs si se va usar modulos en proyectos para convertir codigo en js antiguo