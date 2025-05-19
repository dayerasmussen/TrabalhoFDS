const botao = document.querySelector("#botao")
const paragrafo = document.getElementById("mensagemClick")


botao.addEventListener("click", () => {

    paragrafo.hidden = !paragrafo.hidden
    botao.textContent = paragrafo.hidden
        ? "Clique para ver uma mensagem!"
        : "Clique para ocultar a mensagem"

});






