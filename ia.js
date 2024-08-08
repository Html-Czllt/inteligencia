// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const gameScreen = document.getElementById('game-screen');
    const startScreen = document.getElementById('start-screen');
    const endScreen = document.getElementById('end-screen');
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
    const restartBtn = document.getElementById('restart-btn');

    const story = [
        {
            text: "Você recebeu uma proposta para construir um novo parque na cidade. Isso poderia melhorar a qualidade de vida, mas também envolveria a remoção de algumas árvores. Qual é a sua decisão?",
            choices: [
                { text: "Aceitar a proposta e construir o parque.", nextStep: 1 },
                { text: "Recusar a proposta e preservar as árvores.", nextStep: 2 },
                { text: "Ignorar a proposta e não tomar uma decisão.", nextStep: 3 }
            ]
        },
        {
            text: "Você aceitou a proposta. O parque foi construído, mas alguns moradores estão descontentes com a perda das árvores. O que você faz?",
            choices: [
                { text: "Investir em um projeto de reflorestamento.", nextStep: 4 },
                { text: "Manter a situação como está e não fazer mais mudanças.", nextStep: 5 },
                { text: "Desistir do projeto e reverter as mudanças.", nextStep: 6 }
            ]
        },
        {
            text: "Você recusou a proposta e preservou as árvores. No entanto, a cidade continua sem um espaço de lazer para a comunidade. O que você faz?",
            choices: [
                { text: "Propor um novo plano para criar um espaço de lazer sem prejudicar o meio ambiente.", nextStep: 7 },
                { text: "Manter a situação atual e não fazer mais mudanças.", nextStep: 8 },
                { text: "Revisar a proposta e considerar outras opções.", nextStep: 9 }
            ]
        },
        {
            text: "Você ignorou a proposta. A cidade continua sem um novo parque e alguns moradores estão descontentes. O que você faz?",
            choices: [
                { text: "Organizar uma reunião para discutir a situação com a comunidade.", nextStep: 10 },
                { text: "Continuar sem tomar mais ações.", nextStep: 11 },
                { text: "Rever a proposta e considerar a construção do parque novamente.", nextStep: 12 }
            ]
        },
        // Etapas finais
        {
            text: "Você optou por investir em um projeto de reflorestamento. A cidade agora tem um belo parque e a satisfação da comunidade melhorou.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você decidiu manter a situação como está. A comunidade continua dividida, mas a cidade tem um novo parque.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você reverteu o projeto e as árvores foram replantadas. A cidade está de volta ao estado original e as pessoas estão felizes.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você propôs um novo plano de lazer sustentável. A comunidade está satisfeita com a solução que preserva o meio ambiente.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você optou por não fazer mais mudanças. A cidade continua sem um espaço de lazer novo.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você decidiu rever a proposta e considerar novas opções. A cidade está agora debatendo um plano mais equilibrado.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você organizou uma reunião com a comunidade. Novas propostas estão sendo discutidas para melhorar a situação.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você continuou sem tomar mais ações. A cidade continua como estava e alguns moradores ainda estão insatisfeitos.",
            choices: [],
            isEnd: true
        },
        {
            text: "Você revisou a proposta e decidiu construir o parque. A cidade agora tem um novo espaço de lazer e está dividida sobre a decisão.",
            choices: [],
            isEnd: true
        }
    ];

    function showStep(stepIndex) {
        const step = story[stepIndex];
        storyText.textContent = step.text;
        choicesContainer.innerHTML = '';

        step.choices.forEach((choice) => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => showStep(choice.nextStep));
            choicesContainer.appendChild(button);
        });

        if (step.isEnd) {
            gameScreen.style.display = 'none';
            endScreen.style.display = 'block';
        }
    }

    function startGame() {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        showStep(0);
    }

    function restartGame() {
        endScreen.style.display = 'none';
        startScreen.style.display = 'block';
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
});
