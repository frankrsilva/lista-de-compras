const mensagemListaVazia = document.getElementById("mensagem__lista__vazia");

export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none"
    }
}