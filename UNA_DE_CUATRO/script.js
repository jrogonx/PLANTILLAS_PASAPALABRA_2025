// --------------------------------------------------------
// PLANTILLAS PASAPALABRA 2025 - UNA DE CUATRO
// VIRTUALIA / NEXXLIVE
// 3/10/24
// --------------------------------------------------------

gsap.ticker.fps(50)

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

const videoAdornoPrePregunta = document.getElementById("videoAdornoPrePregunta")
const videoAdornoOpciones = document.getElementById("videoAdornoOpciones")
const videoAdornoTextoPregunta = document.getElementById("videoAdornoTextoPregunta")

// CONSTANTES
const TAMANO_FUENTE_PREGUNTA = 40
const TAMANO_FUENTE_OPCIONES = 33

const coordenadasAdornos = [
    {
        variante: "DIARIO",
        videoAdornoPrePregunta: ["./../__COMUN/media/LETRAS_", 0, 0],
    },
    {
        variante: "CARNAVAL",
        videoAdornoPrePregunta: ["./../__COMUN/media/UNA_DE_CUATRO/CARNAVAL/ESTRELLITAS.webm", 0, 0],

        // src / left / top / opacity / playbackRate / loop
        videoAdornoTextoPregunta: ["./../__COMUN/media/UNA_DE_CUATRO/CARNAVAL/CONFETTI.webm", -460, -848, 0.5, 0.5, true],

        // src / left naranja / top / left azul
        videoAdornoOpciones: ["./../__COMUN/media/UNA_DE_CUATRO/CARNAVAL/MASCARA_IN.webm", 377, 108, 1188],
        videoAdornoOpciones_OUT: "./../__COMUN/media/UNA_DE_CUATRO/CARNAVAL/MASCARA_OUT.webm",
    },
    {
        variante: "HALLOWEEN",
        videoAdornoPrePregunta: ["./../__COMUN/media/UNA_DE_CUATRO/HALLOWEEN/CALABAZA_MURCIELAGO_", 0, 0],
        videoAdornoTextoPregunta: ["./../__COMUN/media/UNA_DE_CUATRO/HALLOWEEN/TELARANA.webm", -448, -843],
    },
    {
        variante: "NAVIDAD",
        videoAdornoPrePregunta: ["xxxxxxxxx", 0, 0],
        videoAdornoOpciones: ["xxxxxxxxx", 377, 108],
    },
    {
        variante: "VERANO",
        videoAdornoPrePregunta: ["xxxxxxxxx", 0, 0],
        videoAdornoOpciones: ["xxxxxxxxx", 377, 108],
    },
]
let coordenadasActual = {}

// VARIABLES GLOBALES
let varianteActual = "DIARIO"
let equipoActual = "NARANJA"
let preguntaActual = "A"
let nRespuesta = 0

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

const plantilla_reset = (_equipo, _variante = "DIARIO", delay = 0) => {
    // reseteo a estado inicial listo para lanzar
    setTimeout(() => {
        varianteActual = _variante.toUpperCase()
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

        resetearAdornos()

        // --------------- PROVI --------------------
        document.getElementById("titulo").innerHTML =
            "<span style='margin-right: 20px; width: 80px; height: 30px; display: inline-block; background-color: #" +
            (equipoActual == "NARANJA" ? "ff7b00" : "00aeff") +
            ";'></span>" +
            "UNA DE CUATRO - " +
            varianteActual
    }, delay)
}

const plantilla_auto_inicializar = () => {
    // CREA OBJETOS DOM Y VARIABLES DE ACCESSO DOM CUANDO SE CARGA LA PLANTILLA
    crearOpciones()
}

setTimeout(() => {
    plantilla_auto_inicializar()
}, 500)

// -------------------------------------------------------------------------
// -------------- FUNCIONES ACCESIBLES DESDE CONTROLLER --------------------
// -------------------------------------------------------------------------

// _respuestas => "111111 # 222222 # .....
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
                left: 8,
                ease: "power.out",
            })
        }

        // ------------------ VARIANTES ------------------
        switch (varianteActual) {
            case "CARNAVAL":
                videoAdornoOpciones.currentTime = 0.2
                videoAdornoOpciones.play()
                break

            default:
                break
        }
        // ------------------------------------------------
    }, delay)
}
const respuestas_OUT = (delay = 0) => {
    setTimeout(() => {
        // ------------------ VARIANTES ------------------
        switch (varianteActual) {
            case "CARNAVAL":
                videoAdornoOpciones.src = coordenadasActual.videoAdornoOpciones_OUT
                videoAdornoOpciones.currentTime = 0.8
                videoAdornoOpciones.play()
                break
            default:
                break
        }
        // ------------------------------------------------

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
    }, delay)
}

const pregunta_IN = (pregunta, delay = 0) => {
    setTimeout(() => {
        divTextoPreguntaA.innerHTML = pregunta
        divTextoPreguntaB.innerHTML = ""

        ajustarEspaciadoLetras(divTextoPreguntaA)

        // ------------------ VARIANTES ------------------
        videoAdornoPrePregunta.currentTime = 0
        videoAdornoTextoPregunta.currentTime = 0

        switch (varianteActual) {
            case "DIARIO":
                videoAdornoPrePregunta.play()

                break
            case "CARNAVAL":
                videoAdornoPrePregunta.play()
                videoAdornoTextoPregunta.play()

                gsap.to(videoAdornoTextoPregunta, {
                    duration: 1,
                    delay: 1,
                    opacity: coordenadasActual.videoAdornoTextoPregunta[3],
                })
                break
            case "HALLOWEEN":
                videoAdornoPrePregunta.play()

                videoAdornoTextoPregunta.currentTime = 0.2
                videoAdornoTextoPregunta.play()

                gsap.to([videoAdornoPrePregunta, videoAdornoTextoPregunta], {
                    duration: 1,
                    opacity: 1,
                })
                break

            default:
                break
        }
        // ------------------------------------------------

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
            left: 20,
            opacity: 1,
            ease: "power.out",
        })
    }, delay)
}
const pregunta_OUT = (delay = 0) => {
    setTimeout(() => {
        // ------------------ VARIANTES ------------------
        switch (varianteActual) {
            case "CARNAVAL":
                gsap.to(videoAdornoTextoPregunta, {
                    duration: 0.6,
                    opacity: 0,
                    onComplete: () => videoAdornoTextoPregunta.pause(),
                })
                break
            case "HALLOWEEN":
                gsap.to(videoAdornoPrePregunta, {
                    duration: 0.3,
                    left: coordenadasActual.videoAdornoPrePregunta[1] + 400,
                    opacity: 0,
                })
                gsap.to(videoAdornoTextoPregunta, {
                    duration: 0.3,
                    left: coordenadasActual.videoAdornoTextoPregunta[1] + 400,
                    opacity: 0,
                })
                break
            default:
                break
        }
        // ------------------------------------------------

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

        setTimeout(() => {
            plantilla_reset(equipoActual, varianteActual)
        }, delay + 1000)
    }, delay)
}

// aciertoFallo = "A" / "F"
const resuelveRespuesta = (_nRespuesta, aciertoFallo, delay = 0) => {
    setTimeout(() => {
        nRespuesta = parseInt(_nRespuesta)
        const ix = nRespuesta - 1

        divSolucionOpciones[ix].style.left = "-390px"
        if (aciertoFallo == "A") {
            imgSolucionAciertoOpciones[ix].style.opacity = 1
        } else {
            imgSolucionFalloOpciones[ix].style.opacity = 1
        }

        gsap.to(imgSolucionContornoOpciones[ix], {
            duration: 0.2,
            opacity: 1,
        })

        gsap.to(divSolucionOpciones[ix], {
            duration: 0.4,
            left: 0,
            ease: "power.out",
        })

        // ------------------ VARIANTES ------------------
        switch (varianteActual) {
            case "CARNAVAL":
                videoAdornoOpciones.currentTime = 0.2
                videoAdornoOpciones.play()
                break

            default:
                break
        }
        // ------------------------------------------------
    }, delay)
}

// _nuevasRespuestas => "111111 # 222222 # .....
const reemplazaPreguntaRespuestas = (_nuevaPregunta, _nuevasRespuestas, delay = 0) => {
    setTimeout(() => {
        if (nRespuesta < 1) return

        const ix = nRespuesta - 1

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
        preguntaNueva.innerHTML = _nuevaPregunta
        ajustarEspaciadoLetras(preguntaNueva)

        const nuevasRespuestas = _nuevasRespuestas.split("#")
        for (let ix2 = 0; ix2 < 4; ix2++) {
            divTextoOpciones[ix2].innerHTML = nuevasRespuestas[ix2]
            ajustarTamanoFuente_segunAltura(divTextoOpciones[ix2], TAMANO_FUENTE_OPCIONES)
        }

        gsap.to(divSolucionOpciones[ix], {
            duration: 0.5,
            delay: 0.2,
            left: 390,
            ease: "power.in",
            onComplete: () => {
                gsap.to(imgSolucionContornoOpciones[ix], {
                    duration: 0.2,
                    opacity: 0,
                })

                divTextoSolucionOpciones[ix].innerHTML = nuevasRespuestas[ix]
                ajustarTamanoFuente_segunAltura(divTextoSolucionOpciones[ix], TAMANO_FUENTE_OPCIONES)

                imgSolucionAciertoOpciones[ix].style.opacity = 0
                imgSolucionFalloOpciones[ix].style.opacity = 0
            },
        })

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
                left: 20,
                opacity: 1,
                ease: "power.out",
            })
        }, 400)
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
        // divTextoOpcion.innerHTML = "JUNGLA DE CRISTAL"
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

const resetearAdornos = () => {
    coordenadasActual = coordenadasAdornos.find((e) => e.variante == varianteActual)
    if (coordenadasActual != null) {
        switch (varianteActual) {
            case "DIARIO":
                videoAdornoPrePregunta.src = coordenadasActual.videoAdornoPrePregunta[0] + equipoActual + ".webm"
                break
            case "CARNAVAL":
                videoAdornoPrePregunta.src = coordenadasActual.videoAdornoPrePregunta[0]

                videoAdornoTextoPregunta.src = coordenadasActual.videoAdornoTextoPregunta[0]
                videoAdornoTextoPregunta.style.left = coordenadasActual.videoAdornoTextoPregunta[1] + "px"
                videoAdornoTextoPregunta.style.top = coordenadasActual.videoAdornoTextoPregunta[2] + "px"
                videoAdornoTextoPregunta.style.opacity = 0
                videoAdornoTextoPregunta.playbackRate = coordenadasActual.videoAdornoTextoPregunta[4]
                videoAdornoTextoPregunta.loop = coordenadasActual.videoAdornoTextoPregunta[5]

                videoAdornoOpciones.src = coordenadasActual.videoAdornoOpciones[0]
                if (equipoActual == "NARANJA") {
                    videoAdornoOpciones.style.left = coordenadasActual.videoAdornoOpciones[1] + "px"
                } else {
                    videoAdornoOpciones.style.left = coordenadasActual.videoAdornoOpciones[3] + "px"
                }
                videoAdornoOpciones.style.top = coordenadasActual.videoAdornoOpciones[2] + "px"

                break
            case "HALLOWEEN":
                videoAdornoPrePregunta.src = coordenadasActual.videoAdornoPrePregunta[0] + equipoActual + ".webm"
                videoAdornoPrePregunta.style.left = coordenadasActual.videoAdornoPrePregunta[1] + "px"

                videoAdornoTextoPregunta.src = coordenadasActual.videoAdornoTextoPregunta[0]
                videoAdornoTextoPregunta.style.left = coordenadasActual.videoAdornoTextoPregunta[1] + "px"
                videoAdornoTextoPregunta.style.top = coordenadasActual.videoAdornoTextoPregunta[2] + "px"
                videoAdornoTextoPregunta.style.opacity = 0
                videoAdornoTextoPregunta.loop = false
                videoAdornoTextoPregunta.ontimeupdate = (e) => {
                    // console.log("ontimeupdate ->", e.target.currentTime)
                    if (e.target.currentTime > 2) videoAdornoTextoPregunta.pause()
                }
                videoAdornoTextoPregunta.playbackRate = 0.3 //coordenadasActual.videoAdornoTextoPregunta[4]
                break

            default:
                break
        }
    }

    videoAdornoPrePregunta.autoplay = false
    videoAdornoPrePregunta.loop = false
    videoAdornoPrePregunta.pause()

    videoAdornoTextoPregunta.autoplay = false
    videoAdornoTextoPregunta.pause()

    videoAdornoOpciones.autoplay = false
    videoAdornoOpciones.loop = false
    videoAdornoOpciones.pause()
}
