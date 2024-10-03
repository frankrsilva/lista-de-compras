import { gerarData } from "./gerarData.js";

export function editarItem(item, data) {
    const entradaPrompt = prompt("Digite um novo nome para o item", item.innerText);

    if (entradaPrompt.length > 0 && entradaPrompt.trim() !== "") {
        item.innerText = entradaPrompt;
        data.innerText = gerarData()
    }
}