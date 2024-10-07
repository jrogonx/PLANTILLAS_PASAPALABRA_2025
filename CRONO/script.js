// --------------------------------------------------------
// PLANTILLAS PASAPALABRA 2025 - CRONO
// VIRTUALIA / NEXXLIVE
// 7/10/24
// --------------------------------------------------------

gsap.ticker.fps(50)
// gsap.registerPlugin(CustomEase)

// -------------- OBJETOS DOM ---------------------------
const container = document.getElementById("container")
// container.style.opacity = 0

const imgPastillaPregunta = document.getElementById("imgPastillaPregunta")

// CONSTANTES
let coordenadasCrono = [
    {
        prueba: "UNA_DE_CUATRO",
        LEFT_NARANJA: 100,
        TOP_NARANJA: 400,
        LEFT_AZUL: 1000,
        TOP_AZUL: 400,
        ANCHO: 400,
    },
]

// VARIABLES GLOBALES
let equipoActual = "NARANJA"
let pruebaActual = ""

// ----------------------------- funciones caspar ----------------
function update() {}
function play() {}

// -------------------------------------------------------------------------
// ----------------------------- funciones iniciales -----------------------
// -------------------------------------------------------------------------
const plantilla_reload = (delay = 0) => {
    setTimeout(() => {
        location.reload()
    }, delay)
}
const plantilla_ver = () => {
    gsap.to(container, {
        duration: 0.3,
        opacity: 1,
    })
}
const plantilla_ocultar = () => {
    container.style.opacity = 0
}

const plantilla_reset = (_equipo = "NARANJA", _prueba = "UNA_DE_CUATRO", delay = 0) => {
    // reseteo a estado inicial listo para lanzar
    setTimeout(() => {
        equipoActual = _equipo.toUpperCase()
        pruebaActual = _prueba.toUpperCase()
    }, delay)
}

const plantilla_auto_inicializar = () => {
    // CREA OBJETOS DOM Y VARIABLES DE ACCESSO DOM CUANDO SE CARGA LA PLANTILLA

    // RESETEAMOS VALORES
    plantilla_reset()
}

setTimeout(() => {
    plantilla_auto_inicializar()
}, 500)

// -------------------------------------------------------------------------
// -------------- FUNCIONES ACCESIBLES DESDE CONTROLLER --------------------
// -------------------------------------------------------------------------

const crono_SET = (tiempoTotal, tiempoActual = 0, delay = 0) => {
    //
}

const crono_IN = (delay = 0) => {
    setTimeout(() => {
        //
    }, delay)
}
const crono_OUT = (delay = 0) => {
    setTimeout(() => {
        //

        setTimeout(() => {
            plantilla_reset()
        }, delay + 1000)
    }, delay)
}

const crono_PLAY = (delay = 0) => {
    //
}
const crono_STOP = (delay = 0) => {
    //
}

// -------------------------------------------------------------------------
// ------------- FUNCIONES INTERNAS ----------------------------------------
// -------------------------------------------------------------------------
