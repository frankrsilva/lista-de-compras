export function verificarListaComprados(listaComprados) {
    if (listaComprados.querySelectorAll("li").length === 0) {
        listaComprados.style.display = "none";
    } else {
        listaComprados.style.display = "block"
    }
}