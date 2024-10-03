import { criarItem } from "./criarItem.js";
import { limparEntrada } from "./limparEntrada.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const botaoAdicionar = document.getElementById("form__adicionar");
const entrada = document.getElementById("form__input");
const listaDeCompras = document.getElementById("lista__compras");
const listaComprados = document.getElementById("lista__comprados");

botaoAdicionar.addEventListener("click", function adicionarItem(evento) {
    evento.preventDefault();

    if (entrada.value.length > 0 && entrada.value.trim() !== "") {
        const itemDaLista = criarItem(entrada.value);
        listaDeCompras.appendChild(itemDaLista);

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
        limparEntrada();
    }
});