import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { gerarData } from "./gerarData.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista__compras");
const listaComprados = document.getElementById("lista__comprados");

let contador = 0;

export function criarItem(item) {
    const listaItem = document.createElement("li");
    listaItem.classList.add("lista__item");



    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox__container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox"
    checkboxInput.classList.add("checkbox__input");
    checkboxInput.id = "checkbox__" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox__input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox__customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item__titulo")

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(listaItem);
            verificarListaComprados(listaComprados)
            verificarListaVazia(listaDeCompras)
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(listaItem);
            verificarListaComprados(listaComprados);
            verificarListaVazia(listaDeCompras)
        }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox__customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    checkboxContainer.appendChild(checkboxLabel);



    const containerListaItem = document.createElement("div");
    containerListaItem.classList.add("lista__item__container");
    const containerListaItemNome = document.createElement("div");
    containerListaItemNome.classList.add("lista__item__container__nome");
    const listaItemTitulo = document.createElement("h3");
    listaItemTitulo.id = "item__titulo"
    listaItemTitulo.classList.add("lista__item__titulo");
    listaItemTitulo.innerText = item;



    let itemData = document.createElement("p");
    itemData.innerText = gerarData()
    itemData.classList.add("lista__item__data");



    const botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("lista__item__botoes__botao");
    const imagemBotaoDeletar = document.createElement("img");
    imagemBotaoDeletar.src = "img/delete.svg";
    imagemBotaoDeletar.alt = "deletar";
    botaoDeletar.appendChild(imagemBotaoDeletar);

    botaoDeletar.addEventListener("click", function() {
        excluirItem(listaItem)
    })


    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("lista__item__botoes__botao");
    const imagemBotaoEditar = document.createElement("img");
    imagemBotaoEditar.src = "img/edit.svg";
    imagemBotaoEditar.alt = "editar";
    botaoEditar.appendChild(imagemBotaoEditar);

    botaoEditar.addEventListener("click", function() {
        editarItem(listaItemTitulo, itemData);
    })

    
    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("lista__item__botoes");
    containerBotoes.appendChild(botaoDeletar);
    containerBotoes.appendChild(botaoEditar);


    containerListaItemNome.appendChild(checkboxContainer);
    containerListaItemNome.appendChild(listaItemTitulo);



    containerListaItem.appendChild(containerListaItemNome);
    containerListaItem.appendChild(containerBotoes);

    listaItem.appendChild(containerListaItem);
    listaItem.appendChild(itemData);

    return listaItem;
}