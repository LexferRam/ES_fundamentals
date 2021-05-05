var contenido = document.querySelector('#contenido');
var btns = document.querySelector('#btns')



function llenarTabla(datos) {
    contenido.innerHTML = '';//aqui devuelve el array de objs


    for (let valor of datos) {
        console.log(valor)//aqui 'valor' devuelve cada obj del array por separado
        contenido.innerHTML += `

            <tr>
                <th>${valor.ID}</th>
                <td>${valor.Nombre}</td>
                <td>${valor.Apellido}</td>
                <td>${valor.Estado ? "Activo" : "Desactivo"}</td>
            </tr>
    
        `;
    }
}
btns.addEventListener('click', (e) => {

    if (event.target.innerHTML == "Llenar tabla") {
        // alert("Load")



        fetch('datos.json')
            .then(resp => resp.json())
            .then((datos) => {
                llenarTabla(datos)
            });
        Swal.fire({
            title: 'Buen Trabajo!',
            text: 'Los datos han sido cargados a la tabla!',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false

        })
    } else if (e.target.innerHTML == "Limpiar tabla") {
        // alert("Clear");
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Seguro que desea limpiar la tabla?',
            text: "Puede volver a cargar los datos presionando 'llenar tabla'!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'si, limpiar tabla!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                contenido.innerHTML = '',
                    swalWithBootstrapButtons.fire({

                        title: 'Limpiado!',
                        text: 'Puede volver a cargar los datos presionando "llenar tabla"!',
                        icon: 'success',
                        timer: 1500,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Los datos permanecen pintados en la tabla :)',
                    'error'
                )
            }
        })

    }

    event.preventDefault();
})