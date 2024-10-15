// PASSO 1 - precisamos criar um variavel no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2 - Identificar o evento de clique no elemento da listagem

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        //PASSO 3 - Remover a classe aberto so do cartao que ta aberto

        esconderCartaoPokedev();

        //PASSO4 - Ao clicar em um pokedev da listagem pegamos o id desse pokdev pra saber qual cartao abrir

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem

        desativarPokedevNaListagem();

        //PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem

        ativarPokedevNaListagem(idPokedevSelecionado);
        })
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
