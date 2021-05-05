/* ==>Asincronia esta basado en callbacks y promesas, es codigo no bloqueante y el resultado de un codigo
asincrono puede esta disponible ahora o en el futuro(el codigo sincrono es secuencial y bloqueante). ejemplo

var request = require('request')

request('https://appdelante.com', function(error,response,body){
    console.log(body)
    //esta funcion se va ejecuta cuando el resultado del request este listo
})

console.log('Ingreso luego de la llamada')

==>Paralelismo: multiples tarea se ejecutan simultaneamente.eje:dos maquinas de cafe dos colas.

 ==>Concurrencia: Una sola tarea se ejecuta en un momnento determinado. eje: una maquina de cafe dos colas


 JS es asincrono y concurrente, solo se puede ejecutar una instruccion a la vez, el event loop es la pieza fundamental que coordina
 la ejecucion, eventos, y callbacks*/

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*EVENT LOOP (BUCLE DE EVENTOS)





*/