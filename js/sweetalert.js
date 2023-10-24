document.addEventListener("DOMContentLoaded", function(){
    let formulario = document.getElementById('formConsulta');

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Consulta enviada.',
            text: `Gracias ${event.target.nombre.value} por consultarnos.`,
            showConfirmButton: false,
            timer: 2500
            })
    });

});
