document.addEventListener("DOMContentLoaded", function(){
    let formulario = document.getElementById('formConsulta');

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let fecha = (e.target.dia.value) +"/"+(e.target.mes.value) +"/"+ + (e.target.anio.value)
        
        // Numero al que se enviara el mensaje
        const numeroTelefono = '';

        // Comprobacion del tipo de evento
        let tipo_evento = "";
        switch (e.target.tipo_evento.value){
            case "1":
                tipo_evento = "una Boda";
                break;
            case "2":
                tipo_evento = "un Cumpleaños";
                break;
            case "3":
                tipo_evento = "un Evento";
                break;
            case "4":
                tipo_evento = "una Reunion";
                break;
            default:
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No has seleccionado un tipo de evento.',
                    text: ``,
                    showConfirmButton: false,
                    timer: 2500
                })
                return (null);
        }

        // Comprobacion del email
        let email = "";
        if (e.target.email.value !== "") {
            // Definir una expresión regular para verificar que ".com" esté al final
            const regex = /\.com$/i;

            // Comprobar si el email cumple con la expresión regular
            const cumpleRegex = regex.test(e.target.email.value);
            if (cumpleRegex === false) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'El E-Mail no es valido',
                    text: ``,
                    showConfirmButton: false,
                    timer: 2500
                })
                return (null);
            }
            email = ` y mi email ${e.target.email.value}`;
        };
        
        // Se comprueba si añadio un comentario
        let comentario = "";
        if (e.target.comentario.value !== "") {
            comentario = `Comentario: ${e.target.comentario.value}`;
        };


        // Envio del mensaje
        // Mensaje predefinido (reemplaza 'Hola' con tu mensaje)
        let mensaje = `Hola, ¿cómo estás?. Quisiera saber si es posible realizar ${tipo_evento}
        para la fecha ${fecha}. Mi nombre es ${e.target.nombre.value}${email}.
        ${comentario}`;

        // URL de WhatsApp con el número de teléfono y el mensaje
        let urlWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);
        window.location.href = urlWhatsApp;
        
        
    });

});
