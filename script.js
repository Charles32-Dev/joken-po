const result = document.querySelector('.result')
const HumanScore = document.querySelector('#your-score')
const MachineScore = document.querySelector('#machine-score')

let ScoreHuman = 0
let ScoreMachine = 0

const PlayerHuman = (Humanchoice) => {

    PlayerTheGame(Humanchoice, PlayerMachine())
}

const OPTIONS_GAME = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const PlayerMachine = () => {
    const Choice = [OPTIONS_GAME.ROCK, OPTIONS_GAME.PAPER, OPTIONS_GAME.SCISSORS]

    const NumberRandon = Math.floor(Math.random() * 3)

    return Choice[NumberRandon]
}


const PlayerTheGame = (human, machine) => {
    console.log(' Human: ' + human + ' Machine: ' + machine)

    if (human === machine) {
        result.innerHTML = "Empatou!"
        result.style.color = "#fe0909"
    }

    else if (
        (human === OPTIONS_GAME.PAPER && machine === OPTIONS_GAME.ROCK) ||
        (human === OPTIONS_GAME.ROCK && machine === OPTIONS_GAME.SCISSORS) ||
        (human === OPTIONS_GAME.SCISSORS && machine === OPTIONS_GAME.PAPER)
    ) {
        ScoreHuman++
        HumanScore.innerHTML = ScoreHuman
        result.style.color = "#87E906"
        result.innerHTML = "Você ganhou, Parabéns!"


    } else {
        ScoreMachine++
        MachineScore.innerHTML = ScoreMachine
        result.style.color = "#fe0909"
        result.innerHTML = "Você perdeu para a Alexa"
    }
}

function Reload() {
    window.location.reload();
}


