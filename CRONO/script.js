// --------------------------------------------------------
// PLANTILLAS PASAPALABRA 2025 - CRONO
// VIRTUALIA / NEXXLIVE
// 7/10/24
// --------------------------------------------------------

gsap.ticker.fps(50)
// gsap.registerPlugin(DrawSVGPlugin)

// -------------- OBJETOS DOM ---------------------------
const container = document.getElementById("container")
// container.style.opacity = 0

const svgCrono = document.getElementById("svgCrono")
const cronoAnillo = document.getElementById("cronoAnillo")
const cronoProgresion = document.getElementById("cronoProgresion")
const cronoCentro = document.getElementById("cronoCentro")

const tlCronoProgresion = gsap.timeline()

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

    gsap.set(svgCrono, {
        opacity: 0,
        x: -300,
    })
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

const cronoProgresion_IN = (delay = 0) => {
    const perimetro = cronoProgresion.getTotalLength()
    console.log(perimetro)

    gsap.set(cronoProgresion, {
        strokeDasharray: perimetro + 1.2,
        strokeDashoffset: perimetro + 1.2,
    })

    const tl = gsap
        .timeline()
        .to(cronoProgresion, {
            duration: 0.3,
            opacity: 1,
        })
        .to(cronoProgresion, {
            duration: 2,
            strokeDashoffset: 0,
            ease: "none",
        })
}

const anillo_IN = () => {
    const perimetro = cronoAnillo.getTotalLength()
    console.log(perimetro)

    gsap.set(cronoAnillo, {
        strokeDasharray: perimetro + 1.2,
        strokeDashoffset: -perimetro + 1.2,
    })

    gsap.to(svgCrono, {
        duration: 0.7,
        x: 0,
        opacity: 1,
        ease: "power2.out",
    })

    gsap.to(cronoAnillo, {
        delay: 0.2,
        duration: 0.3,
        opacity: 1,
    })

    gsap.to(cronoAnillo, {
        delay: 0.2,
        duration: 0.9,
        strokeDashoffset: 0,
        ease: "power2.out",
    })

    setTimeout(() => {
        // cronoProgresion_IN()
    }, 500)
}

const anillo_OUT = () => {
    gsap.to(cronoAnillo, {
        duration: 0.9,
        strokeDashoffset: -628,
        ease: "power2.in",
    })

    // gsap.to(svgCrono, {
    //     delay: 0.2,
    //     duration: 0.4,
    //     opacity: 0,
    //     x: 300,
    // })
}

const cronoCentro_IN = (delay = 0) => {
    const perimetro = cronoProgresion.getTotalLength()
    console.log(perimetro)

    gsap.set(cronoProgresion, {
        strokeDasharray: perimetro + 1.2,
        strokeDashoffset: perimetro + 1.2,
    })

    const tl = gsap
        .timeline()
        .to(cronoProgresion, {
            duration: 0.3,
            opacity: 1,
        })
        .to(cronoProgresion, {
            duration: 2,
            strokeDashoffset: 0,
            ease: "none",
        })
}
