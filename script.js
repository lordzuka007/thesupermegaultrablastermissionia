const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPergunta = document.querySelector(".caixa-Pergunta");
const caixaAlternativa = document.querySelector(".caixa-Alternativa");
const caixaResultado = document.querySelector(".caixa-Resultado");
const Textoresultado = document.querySelector(".Texto-resultado");

const perguntas = [
    {
        enunciado: "Em que mapa do battle royale Warzone original o gulag estava localizado?",
        alternativas: 
            "Caldera",
            "Verdansk"
    },
    {
        enunciado: "Qual é o objetivo principal de um jogador que entra no gulag?",
        alternativas: 
            "Reviver um companheiro de equipe caído.",
            "Lutar contra outro jogador para retornar ao jogo."
    },
{
        enunciado: "Que item permite que um jogador compre equipamentos, reavive companheiros de equipe e obtenha loadouts?",
        alternativas: 
            "Dinheiro do jogo (Cash)",
            "Placas de blindagem"
    },
{
        enunciado: "Qual é a designação para o círculo de gás que encolhe gradualmente ao longo de uma partida?",
        alternativas: 
            "A zona",
            "O limbo"
    },
{
        enunciado: "Qual é o nome da função que permite a um jogador obter seu loadout personalizado no Warzone?",
        alternativas: 
            "Caixa de munição (Ammo Box)",
            "Entrega de armamento (Loadout Drop)"
    };
];
let Atual =0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textcontent = perguntaAtual.enunciado;
    mostraPergunta();
}
    function mostraAlternativas (){
        for(alternativa of perguntaAtual. alternatiavs){
            const botaoAlternativa = document.createElement ("button");
            caixaAlternativa.appendChild(botaoAlternativa);
        }
    }





mostraPergunta();