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
const TAMANO_FUENTE_PREGUNTA = 40
const TAMANO_FUENTE_OPCIONES = 33

// VARIABLES GLOBALES
let equipoActual = "NARANJA"
let preguntaActual = "A"

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

const plantilla_reset = (_equipo = "NARANJA", variacion = "DIARIO", delay = 0) => {
    // reseteo a estado inicial listo para lanzar
    setTimeout(() => {
        equipoActual = _equipo.toUpperCase()

        imgPastillaPregunta.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTILLA_" + equipoActual + ".png"
        imgPastillaPregunta.style.left = "-1180px"
        imgExtremoIzdaPregunta.style.opacity = 0
        imgExtremoDchaPregunta.style.opacity = 0

        divTextoPreguntaA.innerHTML = ""
        divTextoPreguntaB.innerHTML = ""
        gsap.set([divTextoPreguntaA, divTextoPreguntaB], {
            left: -200,
            opacity: 0,
        })
        preguntaActual = "A"

        divOpciones.style.left = equipoActual == "NARANJA" ? "172px" : "983px"

        for (let ix = 0; ix < 4; ix++) {
            gsap.set([imgPastillaOpciones[ix], divTextoOpciones[ix]], {
                left: -390,
                // opacity: 0,
            })

            imgPastillaOpciones[ix].src = "./../__COMUN/media/UNA_DE_CUATRO/PASTI_OPCION_" + equipoActual + ".png"
            divTextoOpciones[ix].innerHTML = ""

            gsap.set([imgExtremoIzdaOpciones[ix], imgExtremoDchaOpciones], {
                opacity: 0,
            })

            divTextoSolucionOpciones[ix].innerHTML = ""
            gsap.set(divSolucionOpciones[ix], {
                left: -390,
                opacity: 1,
            })

            gsap.set([imgSolucionAciertoOpciones[ix], imgSolucionFalloOpciones[ix]], {
                opacity: 0,
            })

            gsap.set(imgSolucionContornoOpciones[ix], {
                opacity: 0,
                left: 0,
            })
        }

        videoAdornoLetras.src = "./../__COMUN/media/LETRAS_" + equipoActual + ".webm"
        videoAdornoLetras.autoplay = false
        videoAdornoLetras.loop = false
        videoAdornoLetras.currentTime = 0
        videoAdornoLetras.pause()
    }, delay)
}

const plantilla_auto_inicializar = () => {
    // CREA OBJETOS DOM Y VARIABLES DE ACCESSO DOM CUANDO SE CARGA LA PLANTILLA
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

const respuestas_IN = (_respuestas, delay = 0) => {
    setTimeout(() => {
        const respuestas = _respuestas.split("#")

        for (let ix = 0; ix < 4; ix++) {
            divTextoOpciones[ix].innerHTML = divTextoSolucionOpciones[ix].innerHTML = respuestas[ix]

            ajustarTamanoFuente_segunAltura(divTextoOpciones[ix], TAMANO_FUENTE_OPCIONES)
            ajustarTamanoFuente_segunAltura(divTextoSolucionOpciones[ix], TAMANO_FUENTE_OPCIONES)

            const retraso = ix * 0.15

            gsap.to(imgExtremoIzdaOpciones[ix], {
                duration: 0.2,
                delay: retraso,
                opacity: 1,
            })
            gsap.to(imgPastillaOpciones[ix], {
                duration: 0.4,
                delay: retraso,
                left: 0,
                ease: "power.out",
            })
            gsap.to(imgExtremoIzdaOpciones[ix], {
                duration: 0.2,
                delay: retraso + 0.45,
                opacity: 0,
            })

            gsap.to(divTextoOpciones[ix], {
                duration: 0.4,
                delay: retraso + 0.1,
                left: 15,
                ease: "power.out",
            })
        }
    }, delay)
}
const respuestas_OUT = (delay = 0) => {
    setTimeout(() => {
        for (let ix = 0; ix < 4; ix++) {
            const retraso = ix * 0.05

            gsap.to([imgSolucionContornoOpciones[ix], divSolucionOpciones[ix]], {
                duration: 0.2,
                opacity: 0,
            })

            gsap.to(imgExtremoDchaOpciones[ix], {
                duration: 0.2,
                delay: retraso,
                opacity: 1,
            })
            gsap.to([divTextoOpciones[ix], imgPastillaOpciones[ix]], {
                duration: 0.4,
                delay: retraso + 0.02,
                left: 390,
                ease: "power.in",
            })
            gsap.to(imgExtremoDchaOpciones[ix], {
                duration: 0.15,
                delay: retraso + 0.15,
                opacity: 0,
            })
        }

        setTimeout(() => {
            plantilla_reset()
        }, delay + 1000)
    }, delay)
}

const pregunta_IN = (pregunta, delay = 0) => {
    setTimeout(() => {
        divTextoPreguntaA.innerHTML = pregunta
        divTextoPreguntaB.innerHTML = ""

        ajustarTamanoFuente_segunAltura(divTextoPreguntaA, TAMANO_FUENTE_PREGUNTA)

        videoAdornoLetras.play()

        gsap.to(imgExtremoIzdaPregunta, {
            duration: 0.2,
            delay: 0.5,
            opacity: 1,
        })
        gsap.to(imgPastillaPregunta, {
            duration: 0.5,
            delay: 0.5,
            left: 0,
            ease: "power.out",
            onComplete: () => {
                gsap.to(imgExtremoIzdaPregunta, {
                    duration: 0.1,
                    opacity: 0,
                })
            },
        })
        gsap.to(divTextoPreguntaA, {
            duration: 0.5,
            delay: 0.7,
            left: 40,
            opacity: 1,
            ease: "power.out",
        })
    }, delay)
}
const pregunta_OUT = (delay = 0) => {
    setTimeout(() => {
        gsap.to(imgExtremoDchaPregunta, {
            duration: 0.1,
            opacity: 1,
        })

        gsap.to(imgPastillaPregunta, {
            duration: 0.4,
            left: 1190,
            ease: "power.in",
        })

        gsap.to([divTextoPreguntaA, divTextoPreguntaB], {
            duration: 0.4,
            left: 1190,
            opacity: 0,
            ease: "power.out",
        })

        gsap.to(imgExtremoDchaPregunta, {
            duration: 0.15,
            delay: 0.22,
            opacity: 0,
        })
    }, delay)
}

const preguntaRespuestas_OUT = (delay = 0) => {
    setTimeout(() => {
        pregunta_OUT()
        setTimeout(() => {
            respuestas_OUT()
        }, 100)
    }, delay)
}

// aciertoFallo = "A" / "F"      esUltima = "S" o "N"
const resuelveRespuesta = (nRespuesta, aciertoFallo, nuevaPregunta, nuevaRespuesta, esUltima = "N", delay = 0) => {
    setTimeout(() => {
        const ix = parseInt(nRespuesta) - 1

        divSolucionOpciones[ix].style.left = "-390px"
        if (aciertoFallo == "A") {
            imgSolucionAciertoOpciones[ix].style.opacity = 1
        } else {
            imgSolucionFalloOpciones[ix].style.opacity = 1
        }

        let preguntaAntigua
        let preguntaNueva

        if (preguntaActual == "A") {
            preguntaAntigua = divTextoPreguntaA
            preguntaNueva = divTextoPreguntaB
            preguntaActual = "B"
        } else {
            preguntaAntigua = divTextoPreguntaB
            preguntaNueva = divTextoPreguntaA
            preguntaActual = "A"
        }
        preguntaNueva.innerHTML = nuevaPregunta

        gsap.to(imgSolucionContornoOpciones[ix], {
            duration: 0.2,
            opacity: 1,
        })

        gsap.to(divSolucionOpciones[ix], {
            duration: 0.4,
            left: 0,
            ease: "power.out",
            onComplete: () => {
                if (esUltima == "N") {
                    divTextoOpciones[ix].innerHTML = nuevaRespuesta

                    ajustarTamanoFuente_segunAltura(divTextoOpciones[ix], TAMANO_FUENTE_OPCIONES)

                    gsap.to(divSolucionOpciones[ix], {
                        duration: 0.4,
                        delay: 0.2,
                        left: 390,
                        ease: "power.in",
                        onComplete: () => {
                            gsap.to(imgSolucionContornoOpciones[ix], {
                                duration: 0.2,
                                opacity: 0,
                            })

                            divTextoSolucionOpciones[ix].innerHTML = nuevaRespuesta
                            ajustarTamanoFuente_segunAltura(divTextoSolucionOpciones[ix], TAMANO_FUENTE_OPCIONES)

                            imgSolucionAciertoOpciones[ix].style.opacity = 0
                            imgSolucionFalloOpciones[ix].style.opacity = 0
                        },
                    })
                }
            },
        })

        if (esUltima == "N") {
            ajustarTamanoFuente_segunAltura(preguntaNueva, TAMANO_FUENTE_PREGUNTA)

            setTimeout(() => {
                gsap.to(preguntaAntigua, {
                    duration: 0.5,
                    left: 200,
                    opacity: 0,
                    ease: "power.out",
                    onComplete: () => {
                        gsap.set(preguntaAntigua, {
                            left: -200,
                        })
                    },
                })
                gsap.to(preguntaNueva, {
                    duration: 0.5,
                    left: 40,
                    opacity: 1,
                    ease: "power.out",
                })
            }, 550)
        }
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

        divOpcion.appendChild(imgPastillaOpcion)
        imgPastillaOpciones[ix] = imgPastillaOpcion

        const imgExtremoIzdaOpcion = document.createElement("img")
        imgExtremoIzdaOpcion.id = "imgExtremoIzdaOpcion" + num
        imgExtremoIzdaOpcion.className = "imgExtremoOpcion extremoIzda"
        imgExtremoIzdaOpcion.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTILLA_OPC_EXTREMO_IZDA.png"
        divOpcion.appendChild(imgExtremoIzdaOpcion)
        imgExtremoIzdaOpciones[ix] = imgExtremoIzdaOpcion

        const imgExtremoDchaOpcion = document.createElement("img")
        imgExtremoDchaOpcion.id = "imgExtremoDchaOpcion" + num
        imgExtremoDchaOpcion.className = "imgExtremoOpcion extremoDcha"
        imgExtremoDchaOpcion.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTILLA_OPC_EXTREMO_DCHA.png"
        divOpcion.appendChild(imgExtremoDchaOpcion)
        imgExtremoDchaOpciones[ix] = imgExtremoDchaOpcion

        const divTextoOpcion = document.createElement("div")
        divTextoOpcion.id = "divTextoOpcion" + num
        divTextoOpcion.className = "divTexto divTextoOpcion"
        divTextoOpcion.innerHTML = "JUNGLA DE CRISTAL"
        divOpcion.appendChild(divTextoOpcion)
        divTextoOpciones[ix] = divTextoOpcion

        // ---- solucion -----
        const divSolucionOpcion = document.createElement("div")
        divSolucionOpcion.id = "divSolucionOpcion" + num
        divSolucionOpcion.className = "divSolucionOpcion"

        const imgSolucionAciertoOpcion = document.createElement("img")
        imgSolucionAciertoOpcion.id = "imgSolucionAciertoOpcion" + num
        imgSolucionAciertoOpcion.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTI_ACIERTO.png"
        divSolucionOpcion.appendChild(imgSolucionAciertoOpcion)
        imgSolucionAciertoOpciones[ix] = imgSolucionAciertoOpcion

        const imgSolucionFalloOpcion = document.createElement("img")
        imgSolucionFalloOpcion.id = "imgSolucionFalloOpcion" + num
        imgSolucionFalloOpcion.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTI_FALLO.png"
        divSolucionOpcion.appendChild(imgSolucionFalloOpcion)
        imgSolucionFalloOpciones[ix] = imgSolucionFalloOpcion

        const divTextoSolucionOpcion = document.createElement("div")
        divTextoSolucionOpcion.id = "divTextoSolucionOpcion" + num
        divTextoSolucionOpcion.className = "divTexto divTextoOpcion textoSolucion"
        divTextoSolucionOpcion.innerHTML = "JUNGLA DE CRISTAL 2"
        divSolucionOpcion.appendChild(divTextoSolucionOpcion)
        divTextoSolucionOpciones[ix] = divTextoSolucionOpcion

        divOpcion.appendChild(divSolucionOpcion)
        divSolucionOpciones[ix] = divSolucionOpcion

        const imgSolucionContornoOpcion = document.createElement("img")
        imgSolucionContornoOpcion.id = "imgSolucionContornoOpcion" + num
        imgSolucionContornoOpcion.className = "imgSolucionContornoOpcion"
        imgSolucionContornoOpcion.src = "./../__COMUN/media/UNA_DE_CUATRO/PASTI_SOLUCION_CONTORNO.png"
        divOpcion.appendChild(imgSolucionContornoOpcion)
        imgSolucionContornoOpciones[ix] = imgSolucionContornoOpcion

        divOpciones.appendChild(divOpcion)
    }
}
