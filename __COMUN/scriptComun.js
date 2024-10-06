// -----------------------------------------------------------------------------
// ------------- FUNCIONES EJECUTABLES DESDE CIENTE ----------------------------
// -----------------------------------------------------------------------------

//

// -------------------------------------------------------------------------
// ------------- FUNCIONES INTERNAS ----------------------------------------
// -------------------------------------------------------------------------
function calcularTamanoFuente_segunAltura(elementoDom, alturaMaximo) {
    let tamano_fuente_final = window.getComputedStyle(elementoDom).fontSize
    const alto = window.getComputedStyle(elementoDom).height
    const altoscroll = elementoDom.scrollHeight

    console.log("tamano_fuente_final", tamano_fuente_final)
    console.log("alto", alto)
    console.log("altoscroll", altoscroll)

    while (elementoDom.scrollHeight > alto) {
        tamano_fuente_final -= 1
        elementoDom.style.fontSize = tamano_fuente_final + "px"
    }

    return tamano_fuente_final + "px"
}

function calcularTamanoFuente(elemento, tamano_fuente_inicial, anchoMaximo) {
    let tamano_fuente_final = tamano_fuente_inicial

    elemento.style.fontSize = tamano_fuente_final + "px"

    while (elemento.clientWidth > anchoMaximo) {
        tamano_fuente_final -= 1
        elemento.style.fontSize = tamano_fuente_final + "px"
    }

    return tamano_fuente_final
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
