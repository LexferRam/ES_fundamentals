//VER DOCUMENTACION EN:  https://sweetalert2.github.io/#download

//usando funcioin autoinvocada, para que se ejecute al inicio de la carga de la pg
//el cual va a ser una funcion asincrona
(async () => {

    //sweetalert funciona mediante promesas(se ejecuta desde que comienza la ejecucion del programa)
    //una promesa es un codigo que nos va a permitir devolver un valor y ejecutar
    //funciones de fondo 

    //Extrayendo valores de la alerta guardando el sweetalert en una variable
    //funcion que ejecuta la alerta
    //dentro de la llave se colocan los valores que queremos extraer
    const { value: pais } = await swal.fire({
        title: "Bienvenido!",
        text: "Seleccione su pais",
        // html: "<b class='rojo'>hola</b>",//reemplaza el texto de la propie. text
        icon: "question",//warning/error/inf/success
        confirmButtonText: 'Seleccionar',
        footer: "<span class='rojo'>Esta es info important</span>",
        width: '80%',
        padding: '1rem',
        //background: '#000',
        // grow: 'fullscreen',//column/row/fullscreen
        backdrop: true,//false/true
        // timer: 5000,//en miliseg
        // timerProgressBar: true,
        //toast: true,//pequena alerta
        position: 'center',//top-bottom-left-right/bottom-left/bottom-end/top-end...
        allowOutsideClick: true,
        allowEscape: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,//desactiva los eventos de teclado cuando el alert esta activa

        input: 'select',
        inputPlaceholder: 'Pais',
        inputValue: '',
        inputOptions: {
            Mexico: 'Mexico',
            Venezuela: 'Venezuela'
        },

        //para personalizar el nombre de las clases de los sog elementos
        customClass: {
            //container: ''
            popup: 'popup-class'
            //header:
            // title:
            //closeButton:
            // icon:
            // image:
            // actions:
            // confirmButton:
            // cancelButton:
            //footer:
        },

        showConfirmButton: true,
        confirmButtonColor: '#3E68E9',
        confirmButtonAriaLabel: 'Confirmar',

        // showCancelButton: true,
        // cancelButtonText: 'Cancelar'
        // cancelButtonColor: '#3E68E9',
        // cancelButtonAriaLabel: 'Confirmar',

        buttonsStyling: true, //para usar los estilos de sweetalert
        showCloseButton: true,
        closeButtonAriaLabel: 'Cerrar alerta',

        //agregando imagen en la alerta
        imageUrl: 'img/4.png',
        imagewidth: '200px',
        //imageHeight:,
        imageAlt: 'Imagen'

    });
    //********************************************************************************************* */

    //NO FUNCIONA PORQ SWEETALERT ES ASINCRONO Y ESTE BLOQUE ES SINCRONO
    //ESTA FUNCION IF YA SE HABRA EJECUTA PARA CUANDO SE EJECUTE EL SWEETALERT
    //if(pais){
    // alert('Hola')
    // }
    //==>> PARA garantizar que esta funcion se ejecute despues que el sweetalert se ejecute
    //hay que usar asyncAwait
    if (pais) {
        swal.fire({
            title: `Seleccionaste: ${pais}`
        });
    }
    // alert('sincrono dentro de asincrono')


})()

//alert('sincrono')
