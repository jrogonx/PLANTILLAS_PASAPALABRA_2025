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

const divCrono = document.getElementById("divCrono")
const svgCrono = document.getElementById("svgCrono")
const cronoAnillo = document.getElementById("cronoAnillo")
const cronoProgresion = document.getElementById("cronoProgresion")

const cronoCentro = document.getElementById("cronoCentro")
const cronoCentro5s = document.getElementById("cronoCentro5s")

const textoSegundos = document.getElementById("textoSegundos")

// CONSTANTES
let coordenadasDivCrono = [
    {
        prueba: "XXXX",
        ESCALA: 3,
        LEFT_NARANJA: 883,
        TOP_NARANJA: 430,
        LEFT_AZUL: 883,
        TOP_AZUL: 430,
    },
    {
        prueba: "UNA_DE_CUATRO",
        ESCALA: 1,
        LEFT_NARANJA: 163,
        TOP_NARANJA: 792,
        LEFT_AZUL: 163,
        TOP_AZUL: 792,
    },
]

const tlProgresion = gsap.timeline()
const tlAviso5s = gsap.timeline()

// VARIABLES GLOBALES
let equipoActual = "NARANJA"
let pruebaActual = ""
let perimetroAnillo = 0
let tiempoTotal = 0

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

const plantilla_reset = (_equipo = "NARANJA", _prueba = "", delay = 0) => {
    // reseteo a estado inicial listo para lanzar
    setTimeout(() => {
        equipoActual = _equipo.toUpperCase()
        pruebaActual = _prueba.toUpperCase()

        const coordenadas = coordenadasDivCrono.find((e) => e.prueba == pruebaActual)
        if (coordenadas != null) {
            divCrono.style.scale = coordenadas.ESCALA
            if (equipoActual == "NARANJA") {
                divCrono.style.left = coordenadas.LEFT_NARANJA + "px"
                divCrono.style.top = coordenadas.TOP_NARANJA + "px"
            } else {
                divCrono.style.left = coordenadas.LEFT_AZUL + "px"
                divCrono.style.top = coordenadas.TOP_AZUL + "px"
            }
        }

        gsap.set(svgCrono, {
            opacity: 0,
            x: -300,
        })

        gsap.set(cronoCentro, {
            attr: { cx: -90 },
            opacity: 0,
        })
        cronoCentro.style.fill = equipoActual == "NARANJA" ? "url(#gradienteNaranja)" : "url(#gradienteAzul)"

        gsap.set(cronoCentro5s, {
            opacity: 0,
        })

        gsap.set(textoSegundos, {
            translateX: -170,
            opacity: 1,
        })

        gsap.set(cronoProgresion, {
            opacity: 0,
        })
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

const crono_SET = (_tiempoTotal, tiempoRestante, delay = 0) => {
    setTimeout(() => {
        tiempoTotal = _tiempoTotal

        textoSegundos.innerHTML = tiempoRestante

        cronoProgresion_SET(tiempoTotal, tiempoRestante)
    }, delay)
}

const crono_UPDATE = (tiempoRestante = 0, delay = 0) => {
    setTimeout(() => {
        textoSegundos.innerHTML = tiempoRestante

        if (tiempoRestante <= 5 && tlAviso5s.isActive() == false) {
            tlAviso5s.play()
        }
    }, delay)
}

const crono_IN = (delay = 0) => {
    setTimeout(() => {
        gsap.to(svgCrono, {
            duration: 0.7,
            x: 0,
            opacity: 1,
            ease: "power1.out",
        })

        anillo_IN()

        gsap.to(cronoCentro, {
            duration: 0.5,
            delay: 0.6,
            attr: { cx: "135px" },
            opacity: 1,
            ease: "power1.out",
        })

        gsap.to(textoSegundos, {
            duration: 0.5,
            delay: 0.6,
            // transform: "translate(0px,0px)",
            translateX: 0,
            ease: "power1.out",
        })

        gsap.to(cronoProgresion, {
            duration: 0.6,
            delay: 1,
            opacity: 1,
        })
    }, delay)
}
const crono_OUT = (delay = 0) => {
    setTimeout(() => {
        gsap.to(cronoProgresion, {
            duration: 0.3,
            opacity: 0,
            ease: "power1.out",
        })

        gsap.to(cronoAnillo, {
            duration: 0.3,
            strokeDashoffset: perimetroAnillo,
            ease: "power1.out",
        })

        gsap.to(cronoCentro, {
            duration: 0.4,
            delay: 0.2,
            attr: { cx: 355 },
            opacity: 0,
            ease: "power1.out",
        })

        gsap.to(textoSegundos, {
            duration: 0.3,
            delay: 0.2,
            translateX: 170,
            opacity: 0,
            ease: "power1.out",
        })

        gsap.to(svgCrono, {
            duration: 0.5,
            delay: 0.3,
            opacity: 0,
            x: 200,
            ease: "power1.out",
        })

        setTimeout(() => {
            plantilla_reset(equipoActual, pruebaActual)
        }, 1500)
    }, delay)
}

const crono_PLAY = (delay = 0) => {
    setTimeout(() => {
        tlProgresion.play()
    }, delay)
}
const crono_STOP = (delay = 0) => {
    setTimeout(() => {
        tlProgresion.pause()
        tlAviso5s.pause()
    }, delay)
}

// -------------------------------------------------------------------------
// ------------- FUNCIONES INTERNAS ----------------------------------------
// -------------------------------------------------------------------------

const cronoProgresion_SET = (tiempoTotalProgresion, tiempoRestanteProgresion) => {
    const perimetro = cronoProgresion.getTotalLength() + 1.2

    const posicionProgresion = (perimetro * tiempoRestanteProgresion) / tiempoTotalProgresion

    console.log("posicionProgresion", posicionProgresion)

    gsap.set(cronoProgresion, {
        strokeDasharray: perimetro,
        strokeDashoffset: posicionProgresion,
    })

    tlProgresion.clear()
    tlProgresion.to(cronoProgresion, {
        duration: tiempoRestanteProgresion,
        strokeDashoffset: 0,
        ease: "none",
    })
    tlProgresion.pause()

    gsap.set(cronoCentro5s, {
        opacity: 0,
    })

    tlAviso5s.clear()
    tlAviso5s.yoyo(true)
    tlAviso5s.repeat(8)
    tlAviso5s.to(cronoCentro5s, {
        duration: 0.5,
        opacity: 1,
        ease: "none",
    })
    tlAviso5s.pause()
}
const anillo_IN = () => {
    perimetroAnillo = cronoAnillo.getTotalLength() + 1.2

    gsap.set(cronoAnillo, {
        strokeDasharray: perimetroAnillo,
        strokeDashoffset: -perimetroAnillo,
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
}
