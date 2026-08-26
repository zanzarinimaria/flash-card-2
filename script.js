//  Lista com os flash cards de Ópitica exigido na tarefa
const flashcards = [
    {
        pergunta: "1.Ópitica/ Propieades da luz: Qual é a principal propiedade da luzem relação a sua trajetória em meios homogênios?",
        resposta: "O luz se propaga em linha reta."
    },
    {
        pergunta: "2.Ópitica/reflexão da luz: O que diz a primeira lei da reflexão?",
        resposta:"O raio incidente, a reta normal e o raiorefletido pertencem ao mesmo plano."
    },
    {
        pergunta:"3.Ópitica/Espelhos: Como é a imagem formada por um espelho plano?",
        resposta:"É virtual, direta e tamanho igual do objeto."
    },
    {
        pergunta:"4.Ópitica/Fenômenos da Luz: O que é o fenômenoda refração da luz?",
        resposta:"É a mudança na velocidade e na direção da luz ao passar de um meio para outro diferente."
    },
    {
        pergunta:"5.Ópitica/Lentes: Qual é a principal característica de uma lente convergente?",
        resposta:"Ela é mais espessa no centrodo que nas bordase focalizaos raios de luzem um ponto."
    },
    {
        pergunta:"6.Ópitica do corpo humano: Qual é a parte do olho humano funciona como uma lente natural que foca a luz na retina?",
        resposta:"O cristalino."
    }
];

let indiceAtual =0;

//Elementos do DOM
const elementoPergunta = document.getElementById("pergunta");
const elementoResposta = document.getElementById("resposta");

//Função para atualizar o card na tela
function atualizarCard() {
    elementoPergunta.textContent = flashcards[indiceAtual].pergunta;
    elementoResposta.textContent = flashcards[indiceAtual].resposta;
    elementoResposta.classList.add("escondido"); //esconde a resposta do novo card
    mostrandoResposta = false;
}

//Função para virar o card(interaçaõ de clique)
function virarCard () {
    if (mostrandoResposta) {
        elementoResposta.classList.remove("escondido");
        mostrandoResposta = false;
   } else {
    elementoResposta.classList.remove("escondido");
    mostrandoResposta = true;
   }
}

//Função para passar para o próximo card
function próximoCard () {
    indiceAtual = (indiceAtual + 1) % flashcards. length;
    atualizarCard();
}

//Inicializa o primeiro card ao carregar a página
atualizarCard();