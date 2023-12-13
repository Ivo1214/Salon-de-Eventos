/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll (Prueba para ver si funciona)*/
    //console.log(window.pageYOffset);

    /* --donde se encuentra actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        $nav.style.top = "0px";
        
    } else {
        /* --sino se oculta añadiendo un top negativo */
        $nav.style.top = "-350px";
    }

    /* --actulizo la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});
