

document.querySelector('#boton').addEventListener('click', traerDatos)

function traerDatos() {


    const xhttp = new XMLHttpRequest();//instanciando el obj
    xhttp.open("GET", "archivo.txt", true);//indicando el metodo get/direccion del archivo/true asincrono
    xhttp.send();//enviando la solicitud

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#respuesta").innerHTML = this.responseText;//devuelve la repsuesta en formato text
        }
    }
}

//readyState
/*Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready */

/*status
Returns the status-number of a request
200: "OK"
403: "Forbidden"
404: "Not Found"
For a complete list go to the Http Messages Reference*/