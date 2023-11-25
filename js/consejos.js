// Evento que se ejecuta al momento de cargarse completamente la pagina
document.addEventListener('DOMContentLoaded', function () {
    // Obtengo el elemento que renderizara los consejos
    var modalBody = document.getElementById('modal-body-content');

    // Se obtienen todos los botones que abren el modal
    var modalButtons = document.querySelectorAll('.btn_modal');

    modalButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Tipo de evento desde el atributo 'data-tipo'
        var tipoEvento = button.getAttribute('data-tipo');
        // Cambia el título del modal según el tipo de evento
        document.getElementById('exampleModalLabel').innerText = 'Consejos para ' + tipoEvento;

        // Cambia el contenido del modal según el tipo de evento
        switch (tipoEvento) {
          case 'boda':
            modalBody.innerHTML = `
                <ul class="lista">
                    <li>Añade <span class="subrayado">toques personales que reflejen la personalidad</span> de la pareja y hagan que la celebración sea única.</li>
                    <li>Mantén una <span class="subrayado">comunicación clara con proveedores y participantes</span> para asegurar una coordinación fluida.</li>
                    <li>Elabora una <span class="subrayado">lista de invitados considerada y manejable</span>, teniendo en cuenta el tamaño del lugar y tu presupuesto.</li>
                    <li>Realiza <span class="subrayado">pruebas de vestimenta y peinado con anticipación</span> para garantizar que todo esté perfecto el día de la boda.</li>
                    <li>Investiga y <span class="subrayado">elige cuidadosamente proveedores confiables</span>, fotógrafos y floristas.</li>
                </ul>`;
            break;
          case 'cumpleaños':
            modalBody.innerHTML = `
                <ul class="lista">
                    <li><span class="subrayado">Elige un tema para la celebración</span> y organiza la decoración, la comida y las actividades en torno a él.</li>
                    <li><span class="subrayado">Planifica actividades y entretenimiento</span> que se adapten al grupo de invitados.</li>
                    <li><span class="subrayado">Decora el espacio con elementos personalizados</span> que reflejen los gustos del homenajeado.</li>
                    <li><span class="subrayado">Crea un rincón con accesorios divertidos</span> para que los invitados puedan tomar fotos y capturar recuerdos.</li>
                    <li>Asegúrate de <span class="subrayado">tener opciones para diferentes preferencias alimentarias</span>, como vegetarianos o sin gluten.</li>
                </ul>`;
            break;
          case 'evento':
            modalBody.innerHTML = `
                <ul class="lista">
                    <li>Selecciona un <span class="subrayado">tema atractivo y coherente</span> para el evento que pueda inspirar la decoración, la comida y las actividades.</li>
                    <li>Utiliza <span class="subrayado">estrategias de promoción efectivas</span>, ya sea a través de redes sociales, correo electrónico o publicidad local.</li>
                    <li><span class="subrayado">Busca colaboraciones con patrocinadores o socios</span> que puedan aportar recursos adicionales, como financiamiento, premios o servicios.</li>
                    <li>Diseña la <span class="subrayado">experiencia del participante pensando en su comodidad y disfrute</span>, ofreciendo entretenimiento, opciones gastronómicas y oportunidades de participación interactivas.</li>
                    <li><span class="subrayado">Aprovecha la tecnología</span> para facilitar el registro de participantes, proporcionar información en tiempo real y fomentar la participación a través de aplicaciones o herramientas interactivas.</li>
                </ul>`;
            break;
          case 'reunion':
            modalBody.innerHTML = `
                <ul class="lista">
                    <li>Define los <span class="subrayado">objetivos de la reunión con claridad</span>.</li>
                    <li><span class="subrayado">Invita solo a las personas esenciales</span> para evitar reuniones innecesariamente grandes. Esto ayuda a mantener la eficiencia y la participación.</li>
                    <li>Crea una <span class="subrayado">agenda detallada</span> y compártela con antelación.</li>
                    <li><span class="subrayado">Establece un límite de tiempo para la reunión</span> y adhiérete a él. Esto fomenta la concentración y evita que la reunión se alargue innecesariamente.</li>
                    <li><span class="subrayado">Al final de la reunión, resume los puntos clave</span>. Asegúrate de enviar un seguimiento después de la reunión para mantener a todos informados sobre las acciones a seguir.</li>
                </ul>`;
            break;
          default:
            modalBody.innerHTML = 'Contenido no encontrado';
            break;
        }
      });
    });
  });