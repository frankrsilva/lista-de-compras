export function gerarData() {
    const dataFormatada = `${new Date().toLocaleDateString("pt-BR", {weekday:"long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;

    return dataFormatada
}