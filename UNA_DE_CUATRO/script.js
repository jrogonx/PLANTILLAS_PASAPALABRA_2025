// --------------------------------------------------------
// PLANTILLAS PASAPALABRA 2025 - UNA DE CUATRO
// VIRTUALIA / NEXXLIVE
// 3/10/24
// --------------------------------------------------------

gsap.ticker.fps(50)
// gsap.registerPlugin(CustomEase)

// -------------- OBJETOS DOM ---------------------------
const container = document.getElementById("container")
// container.style.opacity = 0

const imgPastillaPregunta = document.getElementById("imgPastillaPregunta")
const imgExtremoIzdaPregunta = document.getElementById("imgExtremoIzdaPregunta")
const imgExtremoDchaPregunta = document.getElementById("imgExtremoDchaPregunta")

const divTextoPreguntaA = document.getElementById("divTextoPreguntaA")
const divTextoPreguntaB = document.getElementById("divTextoPreguntaB")

const divOpciones = document.getElementById("divOpciones")

const imgPastillaOpciones = [null, null, null, null]
const imgExtremoIzdaOpciones = [null, null, null, null]
const imgExtremoDchaOpciones = [null, null, null, null]
const divTextoOpciones = [null, null, null, null]

const divSolucionOpciones = [null, null, null, null]
const imgSolucionAciertoOpciones = [null, null, null, null]
const imgSolucionFalloOpciones = [null, null, null, null]
const divTextoSolucionOpciones = [null, null, null, null]

const imgSolucionContornoOpciones = [null, null, null, null]

const videoAdornoLetras = document.getElementById("videoAdornoLetras")

// CONSTANTES
const xxxxxxxx = "xxxxxxx"

// VARIABLES GLOBALES
let xxxxxxx = []

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

const plantilla_reset = (equipo = "NARANJA", delay = 0) => {
    // reseteo a estado inicial listo para lanzar
    setTimeout(() => {
        // gsap.set(preguntaImgPastilla, {
        //     left: -1190,
        // })
        // gsap.set(divTextoPregunta, {
        //     left: -530,
        // })
    }, delay)
}

const plantilla_auto_inicializar = () => {
    // INCIALIZA OBJETOS CUANDO SE CARGA LA PLANTILLA

    crearOpciones()

    // RESETEAMOS VALORES
    plantilla_reset()
}

setTimeout(() => {
    plantilla_auto_inicializar()
}, 500)

// -------------------------------------------------------------------------
// -------------- FUNCIONES ACCESIBLES DESDE CONTROLLER --------------------
// -------------------------------------------------------------------------

const plantilla_in = (delay = 0) => {
    setTimeout(() => {
        gsap.to(preguntaImgPastilla, {
            duration: 0.7,
            left: 0,
            ease: "power.out",
            onComplete: () => {
                gsap.to(preguntaImgExtremoIZDA, {
                    duration: 0.2,
                    opacity: 0,
                })
            },
        })

        gsap.to(divTextoPregunta, {
            delay: 0.3,
            duration: 0.8,
            left: 40,
            ease: "power.out",
        })

        gsap.to(preguntaImgExtremoIZDA, {
            duration: 0.2,
            opacity: 1,
        })
    }, delay)
}
const plantilla_out = (delay = 0) => {
    setTimeout(() => {
        // gsap.to([divPanelIzda, divCrono, divPregunta, divCableAzul, divCableAmarillo, divCableRojo, divCableVerde, divCableNaranja], {
        //     scale: 0,
        //     duration: 0.3,
        //     stagger: 0.01,
        //     onComplete: () => {
        //         plantilla_reset()
        //     },
        // })
    }, delay)
}

// -------------------------------------------------------------------------
// ------------- FUNCIONES INTERNAS ----------------------------------------
// -------------------------------------------------------------------------

const crearOpciones = async () => {
    while (divOpciones.hasChildNodes()) {
        divOpciones.removeChild(divOpciones.firstChild)
    }

    for (let ix = 0; ix < 4; ix++) {
        const num = ix + 1

        const divOpcion = document.createElement("div")
        divOpcion.id = "divOpcion" + num
        divOpcion.className = "divOpcion"
        // divOpcion.style.opacity = 0

        const imgPastillaOpcion = document.createElement("img")
        imgPastillaOpcion.id = "imgPastillaOpcion" + num
        imgPastillaOpcion.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTI_OPCION_NARANJA.png"
        divOpcion.appendChild(imgPastillaOpcion)
        imgPastillaOpciones[ix] = imgPastillaOpcion

        // const nombreJugador = document.createElement("div")
        // nombreJugador.id = "nombreJugador" + num
        // nombreJugador.className = "nombreJugador"
        // nombreJugador.innerHTML = datos[1].trim()
        // divOpcion.appendChild(nombreJugador)

        divOpciones.appendChild(divOpcion)
    }
}
