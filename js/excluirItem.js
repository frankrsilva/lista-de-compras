import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista__compras");
const listaComprados = document.getElementById("lista__comprados");

const excluirItem = (item) => {
    let confirmacao = confirm("Tem certeza de que deseja excluir esse item da sua lista de compras?");

    if (confirmacao) {
        item.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export {excluirItem}