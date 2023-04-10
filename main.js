let timeRemaining = 25 * 60 * 1000;
let timerInterval;
let isRunning = false;

function updateTimer() {
    // Eu passo de milissegundos para minutos
    const minutos = Math.floor(timeRemaining / 1000 / 60);

    // Eu passo de milissegundos para segundos
    const segundos = Math.floor(timeRemaining / 1000) % 60;

    // Formatando o tempo em String
    const tempoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    // Atribuindo a string formatada ao conteúdo do elemento html 
    document.getElementById('timer').textContent = tempoFormatado;
}


function startTimer() {
    // Se já estiver rodando, não executar a função
    if (isRunning) return;

    isRunning = true;

    // Verifica se já existe um intervalo em execução e cancela se necessário
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        timeRemaining -= 1000;

        // Se o tempo do pomodoro for menor ou igual a zero (acabado)
        if (timeRemaining <= 0) {
            // Esse trecho é se o pomodoro tiver acabado
            clearInterval(timerInterval);
            timeRemaining = 0;
            updateTimer();
            document.getElementById('feedback').textContent = 'Pomodoro concluído!';
            isRunning = false;
        }
        // Se ainda tiver tempo a ser decrementado
        else if (isRunning) {
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    updateTimer();
}

//Adiciona um evento ao botao para quando clicado na opção ele mudar o background//
document.getElementById('btn-pomodoro').addEventListener('click', function() {
    document.body.style.background = ' rgb(163, 62, 62)';
  });
  
  document.getElementById('btn-short-break').addEventListener('click', function() {
    document.body.style.background = 'blueviolet';
  });
  
  