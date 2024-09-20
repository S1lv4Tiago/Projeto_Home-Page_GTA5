
/*

objetivo 1 - quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botoes de deleção de plataformas.

    Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar neles.
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado.
    Passo 3 - pegar o clique do usuario no jacascript.
    Passo 4 - quando o usuario clica, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo apareça.

objetivo 2 - caso a lista de botoes de plataformas ja esteja aparecendo e o usuario clicar dentro ou fora do botão, o conteúdo deve ser escondido.

    Passo 5 - verificar se o botao já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente

    

*/


const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    
    const botaEstaAberto = elementoPlataformas.classList.contains("ativo");
    
    elementoPlataformas.classList.toggle("ativo");

});




