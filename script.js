const firebaseConfig = {
    apiKey: "AIzaSyBPVD5yq5Pzb65ZADkjhqyaC06Vf9xPbYQ",
  authDomain: "show-do-milhao-79270.firebaseapp.com",
  databaseURL: "https://show-do-milhao-79270-default-rtdb.firebaseio.com",
  projectId: "show-do-milhao-79270",
  storageBucket: "show-do-milhao-79270.firebasestorage.app",
  messagingSenderId: "94789466204",
  appId: "1:94789466204:web:e7ad59dab239a0cad00e99",
  measurementId: "G-BDPQQRPRWK"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const gameRef = database.ref('game');

// As perguntas e respostas do seu documento
const questions = [
    { q: "1. A inovação em serviços não se restringe apenas à tecnologia, podendo envolver mudanças em processos, atendimento ao cliente e novos modelos de entrega de valor.", options: ["a) É falso, pois só existe inovação se houver tecnologia digital.", "b) É verdadeiro, pois envolve aspectos organizacionais, culturais e de relacionamento.", "c) É falso, já que inovação é apenas criar novos produtos físicos."], ans: "b" },
    { q: "2. Toda inovação em serviços exige grandes investimentos financeiros e infraestrutura tecnológica de ponta.", options: ["a) É verdadeiro, porque sem altos recursos não há inovação.", "b) É falso, pois muitas inovações surgem de ajustes simples e criativos.", "c) É verdadeiro, já que apenas multinacionais podem inovar."], ans: "b" },
    { q: "3. A personalização do atendimento ao cliente pode ser considerada uma inovação em serviços porque:", options: ["a) Não tem impacto na experiência do cliente.", "b) Cria valor diferenciado e fortalece o relacionamento.", "c) É apenas um recurso estético."], ans: "b" },
    { q: "4. Inovar em serviços significa apenas copiar práticas de concorrentes.", options: ["a) É verdadeiro, pois copiar já é inovar.", "b) É falso, pois copiar não é inovação; é necessário diferencial.", "c) É verdadeiro, porque o mercado aceita repetições."], ans: "b" },
    { q: "5. Serviços digitais como bancos online e streaming são exemplos claros de:", options: ["a) Inovação incremental.", "b) Inovação disruptiva.", "c) Inovação de posição."], ans: "b" },
    { q: "6. Pequenas empresas podem inovar em serviços?", options: ["a) Não, pois apenas grandes empresas têm recursos para isso.", "b) Sim, muitas vezes inovam em nichos e criam diferenciais competitivos.", "c) Não, porque falta estrutura organizacional."], ans: "b" },
    { q: "7. O design de serviços busca:", options: ["a) Criar propagandas mais atraentes.", "b) Mapear a jornada do cliente e melhorar sua experiência.", "c) Eliminar o contato humano por completo."], ans: "b" },
    { q: "8. Automatizar processos de atendimento com chatbots pode ser considerado inovação porque:", options: ["a) Melhora a eficiência e acessibilidade.", "b) Reduz apenas os custos da empresa sem afetar clientes.", "c) É uma simples modernização sem valor."], ans: "a" },
    { q: "9. Inovação incremental em serviços significa:", options: ["a) Fazer pequenas melhorias contínuas em algo já existente.", "b) Criar algo totalmente novo e disruptivo.", "c) Apenas copiar práticas externas."], ans: "a" },
    { q: "10. Inovação disruptiva em serviços ocorre quando:", options: ["a) Uma empresa copia práticas de outra maior.", "b) Há ruptura no mercado com um novo modelo.", "c) Se altera apenas o visual do serviço."], ans: "b" },
    { q: "11. Programas de fidelidade digitais são considerados inovações porque:", options: ["a) Não afetam diretamente o consumidor.", "b) Oferecem recompensas personalizadas e aumentam engajamento.", "c) São apenas marketing sem valor real."], ans: "b" },
    { q: "12. A sustentabilidade pode ser considerada inovação em serviços quando:", options: ["a) Não impacta em nada o consumidor.", "b) Empresas oferecem opções mais ecológicas, como entregas verdes.", "c) É apenas um discurso sem prática."], ans: "b" },
    { q: "13. A inovação em serviços depende da cultura organizacional?", options: ["a) Não, é um processo isolado.", "b) Sim, a cultura é essencial para sustentar a inovação.", "c) Não, depende apenas de tecnologia."], ans: "b" },
    { q: "14. Serviços baseados em assinaturas, como academias e plataformas digitais, representam:", options: ["a) Inovação incremental.", "b) Inovação de processo.", "c) Inovação em modelo de receita."], ans: "c" },
    { q: "15. Digitalização de processos burocráticos em órgãos públicos é:", options: ["a) Apenas modernização estética.", "b) Um exemplo de inovação em serviços governamentais.", "c) Um gasto desnecessário sem impacto no cidadão."], ans: "b" },
    { q: "16. (TECNOLOGIA) Qual foi a principal invenção que permitiu a Revolução Industrial?", options: ["a) Telégrafo.", "b) Eletricidade.", "c) Máquina a vapor."], ans: "c" },
    { q: "17. A inovação aberta ocorre quando:", options: ["a) Empresas criam tudo sozinhas.", "b) Há co-criação com clientes, startups e universidades.", "c) Há apenas compra de ideias prontas."], ans: "b" },
    { q: "18. A inovação em serviços gera vantagem competitiva porque:", options: ["a) Foca apenas em reduzir custos.", "b) Depende exclusivamente de tecnologia de ponta.", "c) Diferencia empresas em mercados competitivos."], ans: "c" },
    { q: "19. Inovar em serviços significa:", options: ["a) Apenas usar inteligência artificial.", "b) Copiar modelos de concorrentes sem adaptação.", "c) Transformar ideias em soluções práticas que gerem valor."], ans: "c" },
    { q: "20. A inovação em serviços é um processo:", options: ["a) Isolado e pontual.", "b) Que se encerra após a primeira mudança.", "c) Contínuo de adaptação às necessidades do mercado."], ans: "c" },
    { q: "21. O auto check-in em aeroportos é considerado inovação porque:", options: ["a) Substituiu todo o atendimento humano.", "b) Reduziu filas e deu mais autonomia ao passageiro.", "c) Apenas mudou o layout do balcão."], ans: "b" },
    { q: "22. (TECNOLOGIA) Qual invenção é considerada o marco inicial da era da informação?", options: ["a) Telefone.", "b) Rádio.", "c) Computador."], ans: "c" },
    { q: "23. A integração de canais presencial, online e telefone é chamada de:", options: ["a) Multicanalidade simples.", "b) Omnicanalidade.", "c) Disrupção tecnológica."], ans: "b" },
    { q: "24. (TECNOLOGIA) Quem é considerado o criador da World Wide Web (WWW)?", options: ["a) Bill Gates.", "b) Tim Berners-Lee.", "c) Steve Jobs."], ans: "b" },
    { q: "25. (TECNOLOGIA) Qual dessas tecnologias está diretamente ligada à Indústria 4.0?", options: ["a) Impressora gráfica.", "b) Internet das Coisas (IoT).", "c) Fax."], ans: "b" }
];

let currentQuestionIndex = 0;
let players = {};
let gameStatus = 'waiting';
let countdownInterval;

// Sons do jogo
const soundCorrect = new Audio('sounds/correct.mp3');
const soundIncorrect = new Audio('sounds/incorrect.mp3');
const soundCountdown = new Audio('sounds/countdown.mp3');
const soundStart = new Audio('sounds/start_game.mp3');

// Função para exibir a tela correta com base no dispositivo
function showScreen() {
    const isMobile = window.innerWidth <= 768;
    document.getElementById('mobile-screen').style.display = isMobile ? 'flex' : 'none';
    document.getElementById('tv-screen').style.display = isMobile ? 'none' : 'flex';
    if (isMobile) {
        document.getElementById('mobile-screen').classList.add('active');
    } else {
        document.getElementById('tv-screen').classList.add('active');
    }
}
showScreen();
window.addEventListener('resize', showScreen);

// Geração do QR Code na TV
const gameUrl = window.location.href;
const qrcode = new QRCode(document.getElementById("qr-code"), {
    text: gameUrl,
    width: 200,
    height: 200
});

// Conexão dos Jogadores (Celular)
document.getElementById('join-game-btn').addEventListener('click', () => {
    const playerName = document.getElementById('player-name-input').value.trim();
    if (playerName) {
        localStorage.setItem('playerName', playerName);
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('game-mobile').classList.add('active');
        gameRef.child('players').child(playerName).set({ score: 0 });
    }
});

// Início do Jogo (TV)
document.getElementById('start-game-btn').addEventListener('click', () => {
    soundStart.play();
    gameRef.update({
        status: 'playing',
        currentQuestion: 0,
        countdown: 15
    });
});

// Lógica de atualização do jogo pelo Firebase (TV e Celular)
gameRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        gameStatus = data.status;
        currentQuestionIndex = data.currentQuestion;
        players = data.players || {};

        if (gameStatus === 'playing') {
            const currentQ = questions[currentQuestionIndex];
            if (window.innerWidth <= 768) { // Celular
                document.getElementById('mobile-question-text').textContent = currentQ.q;
                document.querySelectorAll('.mobile-option-btn').forEach((btn, index) => {
                    btn.textContent = currentQ.options[index];
                    btn.disabled = false;
                });
                document.getElementById('waiting-message').style.display = 'none';
                document.getElementById('login-screen').classList.remove('active');
                document.getElementById('game-mobile').classList.add('active');
            } else { // TV
                document.getElementById('intro-tv').classList.remove('active');
                document.getElementById('game-tv').classList.add('active');
                document.getElementById('question-number').textContent = `Questão ${currentQuestionIndex + 1}/${questions.length}`;
                document.getElementById('question-text').textContent = currentQ.q;
                document.getElementById('option-a').textContent = currentQ.options[0];
                document.getElementById('option-b').textContent = currentQ.options[1];
                document.getElementById('option-c').textContent = currentQ.options[2];
                document.getElementById('countdown-timer').textContent = `Tempo: ${data.countdown}s`;
            }
        } else if (gameStatus === 'finished') {
            if (window.innerWidth > 768) {
                showScoreboard();
            }
        }
    }
});

// Envio de Respostas (Celular)
document.querySelectorAll('.mobile-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const playerName = localStorage.getItem('playerName');
        const selectedOption = btn.getAttribute('data-option');
        if (playerName && gameStatus === 'playing') {
            gameRef.child('answers').child(playerName).set({
                answer: selectedOption,
                time: Date.now()
            });
            document.querySelectorAll('.mobile-option-btn').forEach(b => b.disabled = true);
            document.getElementById('waiting-message').style.display = 'block';
        }
    });
});

// Lógica do Cronômetro e Pontuação (APENAS NA TV)
if (window.innerWidth > 768) {
    gameRef.child('countdown').on('value', (snapshot) => {
        const countdown = snapshot.val();
        if (countdown !== null) {
            document.getElementById('countdown-timer').textContent = `Tempo: ${countdown}s`;
            if (countdown > 0) {
                if (countdown === 5) {
                    soundCountdown.play();
                }
                setTimeout(() => {
                    gameRef.child('countdown').set(countdown - 1);
                }, 1000);
            } else {
                checkAnswers();
            }
        }
    });
}

function checkAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    gameRef.child('answers').once('value', (snapshot) => {
        const answers = snapshot.val() || {};
        for (const playerName in answers) {
            const playerAnswer = answers[playerName].answer;
            if (playerAnswer === currentQuestion.ans) {
                soundCorrect.play();
                const score = players[playerName] ? players[playerName].score + 1000 : 1000;
                gameRef.child('players').child(playerName).update({ score: score });
            } else {
                soundIncorrect.play();
            }
        }
        // Exibe a resposta correta por 3 segundos na TV
        document.getElementById(`option-${currentQuestion.ans}`).classList.add('correct-answer-highlight');
        
        setTimeout(() => {
            document.getElementById(`option-${currentQuestion.ans}`).classList.remove('correct-answer-highlight');
            gameRef.child('answers').remove();
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                gameRef.update({ currentQuestion: currentQuestionIndex, countdown: 15 });
            } else {
                gameRef.update({ status: 'finished' });
            }
        }, 3000);
    });
}

// Placar Final (APENAS NA TV)
function showScoreboard() {
    document.getElementById('game-tv').classList.remove('active');
    document.getElementById('scoreboard').classList.add('active');
    const scoreList = document.getElementById('score-list');
    scoreList.innerHTML = '';
    const sortedPlayers = Object.entries(players).sort((a, b) => b[1].score - a[1].score);
    sortedPlayers.forEach(([name, data]) => {
        const li = document.createElement('li');
        li.textContent = `${name}: ${data.score} pontos`;
        scoreList.appendChild(li);
    });
}
