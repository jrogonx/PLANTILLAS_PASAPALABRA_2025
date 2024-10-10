// -----------------------------------------------------------------------------
// ------------- FUNCIONES EJECUTABLES DESDE CIENTE ----------------------------
// -----------------------------------------------------------------------------

//

// -------------------------------------------------------------------------
// ------------- FUNCIONES INTERNAS ----------------------------------------
// -------------------------------------------------------------------------
function ajustarTamanoFuente_segunAltura(elementoDom, tamanoFuenteInicial) {
    elementoDom.style.fontSize = tamanoFuenteInicial + "px"
    elementoDom.innerHTML = elementoDom.innerHTML.replaceAll("|", "<br/>")

    const alto = parseInt(window.getComputedStyle(elementoDom).height)
    console.log("alto -->", alto)

    while (elementoDom.scrollHeight > alto) {
        console.log("elementoDom.scrollHeight -->", elementoDom.scrollHeight)

        tamanoFuenteInicial -= 1
        elementoDom.style.fontSize = tamanoFuenteInicial + "px"
        elementoDom.style.lineHeight = tamanoFuenteInicial + 2 + "px"
    }
}

function ajustarEspaciadoLetras(elementoDom) {
    elementoDom.style.letterSpacing = "0px"
    elementoDom.innerHTML = elementoDom.innerHTML.replaceAll("|", "<br/>")

    const alto = parseInt(window.getComputedStyle(elementoDom).height)
    console.log("alto -->", alto)

    let espaciadoLetras = 0
    while (elementoDom.scrollHeight > alto) {
        console.log("elementoDom.scrollHeight -->", elementoDom.scrollHeight)

        if (espaciadoLetras >= -5) {
            espaciadoLetras -= 0.1
            elementoDom.style.letterSpacing = espaciadoLetras + "px"
        } else {
            break
        }
    }
}

const procesarTexto = (texto) => {
    let nuevoTexto = texto.replace(/(\r\n|\n|\r)/gm, " ")

    if (nuevoTexto.includes("|")) {
        nuevoTexto = nuevoTexto.split("|")[0] + "<br/>" + nuevoTexto.split("|")[1]
    }
    return nuevoTexto
}

const tiempo_a_segundos = (tiempo) => {
    const wTiempo = tiempo.split(":")

    const min = parseInt(wTiempo[0])
    const seg = parseInt(wTiempo[1])
    const mili = parseInt(wTiempo[2])

    return min * 60 + seg + (mili > 50 ? 1 : 0)
}
