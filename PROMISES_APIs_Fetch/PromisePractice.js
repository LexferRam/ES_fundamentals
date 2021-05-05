//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/*const promesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const exito=true;
        if (exito) {
            resolve('La operacion se competo con exito')
        } else {
            reject('La operacion falllo')
        }
    },5000);
});
promesa.then((mensaje)=>{
    alert(mensaje);
});
promesa.catch((mensaje)=>{
    alert(mensaje);
})*/
/*const promesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const exito=true;
        if (exito) {
            resolve ('esta operacion es asincrona y La operación tuvo éxito');
        } else {
            reject('esta operacion es asincrona y La operación falló');
        }
    },0)

});
promesa.then((mensaje)=>{
    alert(mensaje);
});
promesa.catch((mensaje)=>{
    alert(mensaje)
});

alert('Este mensaje es sincrono');*/

/*const promesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const exito=false;
        if (exito) {
            resolve('La operacion tuvo exito')
        } else {
            reject('La operacion fallo')
        }
    },6000)
});
promesa.then((mensaje)=>{
    console.log(mensaje);
});
promesa.catch((mensaje)=>{
    console.log(mensaje)
})*/
// const promesa=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const exito=true;
//         if (exito) {
//             resolve('opercion eitosa')
//         } else {
//             reject('fallo la operacion')
//         }
//     },4000)
// });
// promesa.then((mensaje)=>{
//     console.log(mensaje)
// });
// promesa.catch((mesaje)=>{
//     console.log(mensaje)
// });

// const promesa2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if (false) {
//             resolve('la operacion tuvo exito');
//         }else{
//           reject('fallo la operacion ')
//         }
//     },2000)
// })
// .then((mensaje)=>{
//     alert(mensaje)
// })
// .catch((mensaje)=>{
//     alert(mensaje);
// });
// console.log('el anterior fue un mensaje asincrono, este es sincrono')

// function wait(millis) {
//     return new Promise(resolve => setTimeout(resolve, millis));
// }
// const p = wait(5000).then(() => wait(4000)).then(() => wait(1000));
// p.then(() => { })

// function wait(seg) {
//     return new Promise(resolve => setTimeout(resolve, seg))
// }
// const p = wait(5000)
//     .then(() => {
//         console.log('1er callback')
//         wait(10000)
//     }).then(() => {
//         console.log('2do callback')
//         wait(1000)
//     });
// p.then(() => {
//     console.log('ultimo en la cadena de .then')
// })

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Exito')
        } else {
            reject(Error)
        }
    })
})
    .then((mensaje) => {
        console.log(mensaje)
    })
