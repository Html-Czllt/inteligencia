document.addEventListener('DOMContentLoaded', () => {
    console.log('Script carregado');

    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');

    const story = [
        {
            text: "Você é o novo líder de uma cidade chamada EcoVille. A cidade enfrenta uma crise ambiental grave. Como você quer começar a resolver essa crise?",
            choices: [
                { text: "Expandir o programa de reciclagem e exigir mais das empresas.", nextStep: 1 },
                { text: "Introduzir novas tecnologias de limpeza e controle de poluição.", nextStep: 2 },
                { text: "Focar em iniciativas comunitárias e envolver mais a população no processo de limpeza e conservação.", nextStep: 3 }
            ]
        },
        {
            text: "Você decidiu expandir o programa de reciclagem. A cidade está agora mais limpa, mas os custos aumentaram. Qual é o próximo passo?",
            choices: [
                { text: "Reduzir o orçamento de outras áreas para cobrir os custos.", nextStep: 4 },
                { text: "Buscar novas fontes de financiamento e parcerias.", nextStep: 5 },
                { text: "Aumentar impostos para suportar o programa de reciclagem.", nextStep: 6 }
            ]
        },
        {
            text: "Você decidiu introduzir novas tecnologias. As tecnologias são eficazes, mas a cidade enfrenta resistência devido ao custo. Como você lida com isso?",
            choices: [
                { text: "Implementar um programa de conscientização para educar a população sobre os benefícios.", nextStep: 7 },
                { text: "Procurar apoio financeiro de investidores e do governo.", nextStep: 8 },
                { text: "Reduzir o escopo das tecnologias para reduzir custos.", nextStep: 9 }
            ]
        },
        {
            text: "Você decidiu focar em iniciativas comunitárias. A participação da comunidade aumentou, mas a coordenação entre grupos é um desafio. Qual é o próximo passo?",
            choices: [
                { text: "Estabelecer uma coordenação centralizada para gerenciar as iniciativas.", nextStep: 10 },
                { text: "Aumentar o financiamento para os grupos comunitários.", nextStep: 11 },
                { text: "Redefinir as metas e prioridades das iniciativas comunitárias.", nextStep: 12 }
            ]
        },
        {
            text: "Obrigado por jogar! Volte sempre para tomar mais decisões.",
            isEnd: true
        }
    ];

    let currentStep = 0;

    function startGame() {
        console.log('Iniciando o jogo');
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        showStep(currentStep);
    }

    function showStep(step) {
        console.log(`Mostrando passo: ${step}`);
        const currentStory = story[step];
        storyText.textContent = currentStory.text;
        choicesContainer.innerHTML = '';
        if (currentStory.choices) {
            currentStory.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.addEventListener('click', () => handleChoice(choice.nextStep));
                choicesContainer.appendChild(button);
            });
        }
    }

    function handleChoice(nextStep) {
        console.log(`Escolha feita, indo para o passo: ${nextStep}`);
        if (nextStep >= story.length || story[nextStep].isEnd) {
            showEndScreen();
        } else {
            currentStep = nextStep;
            showStep(currentStep);
        }
    }

    function showEndScreen() {
        console.log('Mostrando tela de finalização');
        gameScreen.style.display = 'none';
        endScreen.style.display = 'block';
    }

    function restartGame() {
        console.log('Reiniciando o jogo');
        endScreen.style.display = 'none';
        startScreen.style.display = 'block';
        currentStep = 0;
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
});
