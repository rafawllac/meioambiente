const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "Emissões de gases de efeito estufa",
                afirmacao: "Está correto!"
            },
            {
                texto: "Aumentos naturais na atividade solar",
                afirmacao: "Está incorreto!"
            }
        ]
    },
    {
        enunciado: "Qual dos seguintes é um exemplo de energia renovável?",
        alternativas: [
            {
                texto: "Energia solar",
                afirmacao: "Está correto!"
            },
            {
                texto: "Energia nuclear",
                afirmacao: "Está incorreto!"
            }
        ]
    },
    {
        enunciado: "O que é o efeito estufa?",
        alternativas: [
            {
                texto: "O processo pelo qual gases na atmosfera retêm o calor, aumentando a temperatura da Terra",
                afirmacao: "Está correto!"
            },
            {
                texto: "O resfriamento da atmosfera devido à poluição",
                afirmacao: "Está incorreto!"
            }
        ]
    },
    {
        enunciado: "Qual é a função principal das árvores na luta contra a mudança climática?",
        alternativas: [
            {
                texto: "Absorver dióxido de carbono e liberar oxigênio",
                afirmacao: "Está correto!"
            },
            {
                texto: "Aumentar a temperatura global",
                afirmacao: "Está incorreto!"
            }
        ]
    },
    {
        enunciado: "Qual é um efeito comum da poluição dos oceanos?",
        alternativas: [
            {
                texto: "Morte de espécies marinhas e degradação dos habitats",
                afirmacao: "Está correto!"
            },
            {
                texto: "Melhora da qualidade da água",
                afirmacao: "Está incorreto!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Vocẽ finalizou! Parabéns!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();