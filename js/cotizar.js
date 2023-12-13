document.addEventListener('DOMContentLoaded', function () {
    let tipoEvento = "";
    let opcionesFinales = "";
     // Obtengo el elemento que renderizará los consejos
    let modalBody = document.querySelector('.modal-cotizar');

    // Se obtiene el elemento select
    let selectTipoFiesta = document.querySelector('.seleccionar-fiesta');

    // Inicializar los modales
    let cotizarModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
    let modal2 = new bootstrap.Modal(document.getElementById('exampleModalToggle2'));

    // Elemento para mostrar el total
    let totalElement = document.createElement('div');
    totalElement.classList.add('total-cotizacion');
    modalBody.appendChild(totalElement);

    const valorReserva = 500;
    // Define las opciones específicas para Cumpleaños
    const opcionesCumpleaños = {
        genero: [
            { id: 'flexRadioGenero1', label: 'Niño', value: 1 },
            { id: 'flexRadioGenero2', label: 'Niña', value: 2 }
        ],
        colores: [
            { id: 'flexRadioColor1', label: 'Azul', value: 1 },
            { id: 'flexRadioColor2', label: 'Rosa', value: 2 },
            { id: 'flexRadioColor3', label: 'Rojo', value: 3 },
            { id: 'flexRadioColor4', label: 'Amarillo', value: 4 }
        ],
        decoraciones: [
            { id: 'flexCheckGlobos', label: 'Globos', value: 1 },
            { id: 'flexCheckGuirnaldas', label: 'Guirnaldas', value: 2 },
            { id: 'flexCheckCentrosMesa', label: 'Centros de Mesa', value: 3 },
            { id: 'flexCheckPancartas', label: 'Pancartas', value: 4 }
        ],
        comida: [
            { id: 'flexCheckTipoPastel', label: 'Tipo de Pastel (sabor, forma, diseño)', value: 1 },
            { id: 'flexCheckCatering', label: 'Opciones de Catering', value: 2 },
            { id: 'flexCheckAperitivos', label: 'Menú de aperitivos', value: 3 },
            { id: 'flexCheckVegetarianasVeganas', label: 'Opciones vegetarianas o veganas', value: 4 },
            { id: 'flexCheckBarraPostres', label: 'Barra de postres', value: 5 }
        ],
        servicio: [
            { id: 'flexCheckBuffet', label: 'Buffet', value: 1 },
            { id: 'flexCheckCenaFormal', label: 'Cena formal con servicio de mesa', value: 2 },
            { id: 'flexCheckEstaciones', label: 'Estaciones de comida interactivas', value: 3 }
        ]
    };
    const opcionesBoda = {
        decoracion: [
            { id: 'flexCheckCentrosMesa', label: 'Centros de mesa florales', value: 1 },
            { id: 'flexCheckGuirnaldasLuces', label: 'Guirnaldas de luces', value: 2 },
            { id: 'flexCheckTelasCortinas', label: 'Telas y cortinas elegantes', value: 3 },
            { id: 'flexCheckNumerosMesa', label: 'Números de mesa personalizados', value: 4 },
            { id: 'flexCheckCartelesSenalizacion', label: 'Carteles y señalización personalizada', value: 5 }
        ],
        musica: [
            { id: 'flexCheckBandaViva', label: 'Banda en vivo', value: 1 },
            { id: 'flexCheckDJPlaylist', label: 'DJ con lista de reproducción personalizada', value: 2 }
        ],
        comida: [
            { id: 'flexCheckMenuDegustacion', label: 'Menú de degustación para la cena', value: 1 },
            { id: 'flexCheckOpcionesPastel', label: 'Opciones de pastel de bodas (sabor, diseño, capas)', value: 2 },
            { id: 'flexCheckBarraPostres', label: 'Barra de postres', value: 3 },
            { id: 'flexCheckOpcionesVegetarianas', label: 'Opciones vegetarianas y veganas', value: 4 },
            { id: 'flexCheckEstacionesComida', label: 'Estaciones de comida gourmet', value: 5 }
        ],
        servicio: [
            { id: 'flexCheckCoordinadorBodas', label: 'Coordinador de bodas', value: 1 },
            { id: 'flexCheckFotografoVideografo', label: 'Fotógrafo y/o videógrafo profesional', value: 2 },
            { id: 'flexCheckTransporteInvitados', label: 'Servicio de transporte para los invitados', value: 3 },
            { id: 'flexCheckPhotobooth', label: 'Photobooth para recuerdos divertidos', value: 4 },
            { id: 'flexCheckEstacionesFirma', label: 'Estaciones de firma y mensajes', value: 5 }
        ],
        estiloServicio: [
            { id: 'flexCheckCenaFormal', label: 'Cena formal con servicio de mesa', value: 1 },
            { id: 'flexCheckEstacionesInteractivas', label: 'Estaciones de comida interactivas', value: 2 },
            { id: 'flexCheckBuffetTematico', label: 'Buffet temático', value: 3 },
            { id: 'flexCheckCateringExclusivo', label: 'Catering exclusivo', value: 4 },
            { id: 'flexCheckBarraCocktails', label: 'Barra de cócteles personalizada', value: 5 }
        ],
        entretenimiento: [
            { id: 'flexCheckBaileSorpresa', label: 'Baile de apertura sorpresa', value: 1 },
            { id: 'flexCheckActuacionesVivas', label: 'Actuaciones en vivo (música, magia, etc.)', value: 2 },
            { id: 'flexCheckJuegosActividades', label: 'Juegos y actividades para los invitados', value: 3 },
            { id: 'flexCheckFuegosArtificiales', label: 'Fuegos artificiales o espectáculo de luces', value: 4 }
        ],
        recuerdosRegalos: [
            { id: 'flexCheckFavoresPersonalizados', label: 'Favores de boda personalizados', value: 1 },
            { id: 'flexCheckAreaRegalosTarjetas', label: 'Área de regalos y tarjetas', value: 2 },
            { id: 'flexCheckLibroVisitasCreativo', label: 'Libro de visitas creativo', value: 3 },
            { id: 'flexCheckRegalosCortejo', label: 'Regalos para el cortejo', value: 4 },
            { id: 'flexCheckPresentacionFotos', label: 'Presentación de fotos de la pareja', value: 5 }
        ]
    };
    const opcionesReunion = {
        espacio: [
            { id: 'flexCheckSalaConferencias', label: 'Sala de conferencias', value: 1 },
            { id: 'flexCheckSalaJuntas', label: 'Sala de juntas', value: 2 },
            { id: 'flexCheckAreaAbierta', label: 'Área abierta para actividades', value: 3 },
            { id: 'flexCheckSalaCapacitacion', label: 'Sala de capacitación', value: 4 },
            { id: 'flexCheckAula', label: 'Aula para presentaciones', value: 5 }
        ],
        tecnologia: [
            { id: 'flexCheckProyector', label: 'Proyector y pantalla', value: 1 },
            { id: 'flexCheckEquipoSonido', label: 'Equipo de sonido', value: 2 },
            { id: 'flexCheckConexionVideoconferencia', label: 'Conexión para videoconferencia', value: 3 },
            { id: 'flexCheckMicrófonosInalámbricos', label: 'Micrófonos inalámbricos', value: 4 },
            { id: 'flexCheckWi-FiVeloz', label: 'Wi-Fi de alta velocidad', value: 5 }
        ],
        disposicionMobiliario: [
            { id: 'flexCheckMesasSillas', label: 'Mesas y sillas configurables', value: 1 },
            { id: 'flexCheckEstiloAuditorio', label: 'Estilo auditorio', value: 2 },
            { id: 'flexCheckMesasRedondas', label: 'Mesas redondas para discusiones', value: 3 },
            { id: 'flexCheckEstacionesTrabajo', label: 'Estaciones de trabajo colaborativas', value: 4 },
            { id: 'flexCheckZonasDescanso', label: 'Zonas de descanso y networking', value: 5 }
        ],
        catering: [
            { id: 'flexCheckCoffeeBreak', label: 'Servicio de coffee break', value: 1 },
            { id: 'flexCheckAlmuerzoCatering', label: 'Almuerzo con servicio de catering', value: 2 },
            { id: 'flexCheckOpcionesVegetarianas', label: 'Opciones vegetarianas y veganas', value: 3 },
            { id: 'flexCheckBarraSnacks', label: 'Barra de snacks y bebidas', value: 4 }
        ],
        actividades: [
            { id: 'flexCheckIcebreakers', label: 'Icebreakers y actividades de team-building', value: 1 },
            { id: 'flexCheckPanelDiscusion', label: 'Panel de discusión o mesa redonda', value: 2 },
            { id: 'flexCheckTalleresPracticos', label: 'Talleres prácticos y educativos', value: 3 },
            { id: 'flexCheckNetworking', label: 'Sesiones de networking y socialización', value: 4 }
        ],
        personalizacion: [
            { id: 'flexCheckBannerPersonalizado', label: 'Banner o señalización personalizada', value: 1 },
            { id: 'flexCheckMaterialMarca', label: 'Material de marca para participantes', value: 2 },
            { id: 'flexCheckRegalosCorporativos', label: 'Regalos corporativos y obsequios', value: 3 },
            { id: 'flexCheckAmbientacionTematica', label: 'Ambientación temática del evento', value: 4 }
        ]
    };
    const opcionesEvento = {
        ubicacion: [
            { id: 'flexCheckSalonConvenciones', label: 'Salón de convenciones', value: 1 },
            { id: 'flexCheckEspacioAbierto', label: 'Espacio al aire libre', value: 2 },
            { id: 'flexCheckTeatro', label: 'Teatro o auditorio', value: 3 },
            { id: 'flexCheckGaleriaArte', label: 'Galería de arte', value: 4 },
            { id: 'flexCheckEstudioGrabacion', label: 'Estudio de grabación', value: 5 }
        ],
        entretenimiento: [
            { id: 'flexCheckActuacionesEnVivo', label: 'Actuaciones en vivo (música, danza, comedia)', value: 1 },
            { id: 'flexCheckActividadesInteractivas', label: 'Actividades interactivas', value: 2 },
            { id: 'flexCheckEspectaculosArtisticos', label: 'Espectáculos artísticos', value: 3 },
            { id: 'flexCheckActividadesDeportivas', label: 'Actividades deportivas', value: 4 },
            { id: 'flexCheckJuegosParticipativos', label: 'Juegos y competiciones participativas', value: 5 }
        ],
        tecnologia: [
            { id: 'flexCheckProyeccionesInnovadoras', label: 'Proyecciones innovadoras', value: 1 },
            { id: 'flexCheckRealidadVirtual', label: 'Experiencias de realidad virtual', value: 2 },
            { id: 'flexCheckSistemaSonidoAvanzado', label: 'Sistema de sonido avanzado', value: 3 },
            { id: 'flexCheckStreamingOnline', label: 'Transmisión en vivo o streaming', value: 4 },
            { id: 'flexCheckZonasCargaDispositivos', label: 'Zonas de carga para dispositivos', value: 5 }
        ],
        catering: [
            { id: 'flexCheckCateringGourmet', label: 'Catering gourmet', value: 1 },
            { id: 'flexCheckBarraCocteles', label: 'Barra de cócteles', value: 2 },
            { id: 'flexCheckEstacionesComida', label: 'Estaciones de comida temáticas', value: 3 },
            { id: 'flexCheckDegustacionVinos', label: 'Degustación de vinos o licores', value: 4 }
        ],
        networking: [
            { id: 'flexCheckSesionesNetworking', label: 'Sesiones de networking estructurado', value: 1 },
            { id: 'flexCheckZonasDescansoNetworking', label: 'Zonas de descanso y networking', value: 2 },
            { id: 'flexCheckIntercambioContactos', label: 'Intercambio de contactos y tarjetas', value: 3 },
            { id: 'flexCheckActividadesTeamBuilding', label: 'Actividades de team-building', value: 4 }
        ],
        decoracion: [
            { id: 'flexCheckDecoracionTematica', label: 'Decoración temática del evento', value: 1 },
            { id: 'flexCheckElementosEscenicos', label: 'Elementos escénicos impactantes', value: 2 },
            { id: 'flexCheckIluminacionAmbiental', label: 'Iluminación ambiental especial', value: 3 },
            { id: 'flexCheckDiseñoEspaciosPersonalizado', label: 'Diseño personalizado de espacios', value: 4 }
        ],
        logistica: [
            { id: 'flexCheckGestionInvitados', label: 'Gestión de invitados y RSVP', value: 1 },
            { id: 'flexCheckTransporteInvitados', label: 'Transporte para invitados', value: 2 },
            { id: 'flexCheckSeguridadEvento', label: 'Seguridad y personal de evento', value: 3 },
            { id: 'flexCheckSoporteTecnico', label: 'Soporte técnico y asistencia', value: 4 }
        ]
    };
    
    
    

    // Evento de cambio en el select
    selectTipoFiesta.addEventListener('change', function () {
        // Obtener el valor seleccionado en el select
        let selectedEventType = selectTipoFiesta.value;

        // Limpiar el contenido actual del modal-body
        modalBody.innerHTML = '';

        // Generar y agregar contenido según el tipo de fiesta seleccionado
        switch (selectedEventType) {
            case 'Cumpleaños':
                mostrarOpciones(opcionesCumpleaños);
                tipoEvento = "Cumpleaños";
                break;
            case 'Boda':
                mostrarOpciones(opcionesBoda);
                tipoEvento = "Boda";
                break;
            case 'Reunion':
                tipoEvento = "Reunion";
                mostrarOpciones(opcionesReunion);
                break;
            case 'Evento':
                tipoEvento = "Evento";
                mostrarOpciones(opcionesEvento);
                break;
            default:
                modalBody.innerHTML = ``;
                break;
        }

        // Agregar botón "Cotizar"
        modalBody.innerHTML += `
        <div class="modal-body-buttons">
            <div class="boton-cotizar">
                <h4>Total: </h4>
                <h4 id="mostrarPrecio">$${valorReserva}</h4>
            </div>
            <button id="btnSolicitar" class="btn btn-success">Solicitar</button>
        </div>`;


        // Asignar evento al botón "Solicitar"
    document.getElementById('btnSolicitar').addEventListener('click', function () {
        // Obtener todas las opciones marcadas
        const opcionesMarcadas = document.querySelectorAll('input:checked');

        // Calcular el total de los valores seleccionados
        let total = valorReserva;
        opcionesMarcadas.forEach(opcion => {
            total += parseInt(opcion.value);
        });

        // Crear una cadena con las opciones seleccionadas
        let opcionesSeleccionadas = `Total: $${total}\n`;

        opcionesMarcadas.forEach(opcion => {
            // Obtener el texto de la etiqueta asociada al input
            const label = document.querySelector(`label[for="${opcion.id}"]`);
            opcionesSeleccionadas += `${label.textContent.trim()}\n`;
        });

        // Asignar el valor a opcionesFinales
        opcionesFinales = opcionesSeleccionadas;

        // Mostrar las opciones seleccionadas (puedes ajustar esto según tus necesidades)
        console.log(opcionesSeleccionadas);

        // Cerrar el primer modal
        cotizarModal.hide();

        // Abrir el segundo modal
        modal2.show();
    });


        // Mostrar el modal
        // myModal.show();
    });

    modalBody.addEventListener('change', function () {
        // Sumar todas las opciones marcadas
        const opcionesMarcadas = document.querySelectorAll('input:checked');
        let total = 0;
        opcionesMarcadas.forEach(opcion => {
            total += parseInt(opcion.value);
        });

        // Actualizar el total al final del modal
        mostrarTotal(total);
    });



    // Función para mostrar opciones específicas
    function mostrarOpciones(opciones) {
        for (let categoria in opciones) {
            if (opciones.hasOwnProperty(categoria)) {
                // Agregar título para la categoría
                modalBody.innerHTML += `<h3 class="titulo-categoria">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h3>`;
                
                // Agregar opciones dentro de la categoría
                opciones[categoria].forEach(opcion => {
                    modalBody.innerHTML += `
                        <div class="form-check">
                            <input class="form-check-input" type="${categoria === 'decoraciones' || categoria === 'comida' ? 'checkbox' : 'radio'}" 
                                   name="${categoria === 'decoraciones' ? 'flexCheckDecoraciones' : (categoria === 'comida' ? 'flexCheckComida' : `flexRadio${categoria}`)}"
                                   id="${opcion.id}" value="${opcion.value}">
                            <label class="form-check-label" for="${opcion.id}">
                                ${opcion.label} <span class="precio">+$${opcion.value}</span>
                            </label>
                        </div>
                    `;
                });

                // Agregar separación entre categorías
                modalBody.innerHTML += `<hr>`;
            }
        }
    }

    // Función para mostrar y actualizar el total
    function mostrarTotal(total) {
        document.getElementById("mostrarPrecio").innerHTML = `$${valorReserva + total}`;
    }


// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
//                                                  Envio de la consulta
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------


    let formulario = document.getElementById('formConsulta');
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let fecha = (e.target.dia.value) +"/"+(e.target.mes.value) +"/"+ + (e.target.anio.value)
        
        // Comprobación del email
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
                    title: 'El E-Mail no es válido',
                    text: ``,
                    showConfirmButton: false,
                    timer: 2500
                })
                return (null);
            }
            email = ` y mi email ${e.target.email.value}`;
        };
        
        // Se comprueba si añadió un comentario
        let comentario = "";
        if (e.target.comentario.value !== "") {
            comentario = `Comentario: ${e.target.comentario.value}`;
        };

        // Envío del mensaje
        let mensaje = `Hola, ¿cómo estás?. Quisiera saber si es posible realizar ${tipoEvento}
        para la fecha ${fecha}. Mi nombre es ${e.target.nombre.value}${email}.
        ${comentario}.\n Cotizacion realizada: ${opcionesFinales}`;

        console.log(mensaje);

        // URL de WhatsApp con el número de teléfono y el mensaje
        // let urlWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);
        // window.location.href = urlWhatsApp;


    });
});