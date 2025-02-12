const result = document.querySelector('.result')
const HumanScore = document.querySelector('#your-score')
const MachineScore = document.querySelector('#machine-score')

let ScoreHuman = 0
let ScoreMachine = 0

const PlayerHuman = (Humanchoice) => {

    PlayerTheGame(Humanchoice, PlayerMachine())
}


const PlayerMachine = () => {
    const Choice = ['rock', 'paper', 'scissors']

    const NumberRandon = Math.floor(Math.random() * 3)

    return Choice[NumberRandon]
}


const PlayerTheGame = (human, machine) => {
    console.log(' Human: ' + human + ' Machine: ' + machine)

    if (human === machine) {
        result.innerHTML = "Empatou!"
        result.style.color = "#BC3E3E"
    }

    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        ScoreHuman++
        HumanScore.innerHTML = ScoreHuman
        result.style.color = "#87E906"
        result.innerHTML = "Você ganhou, Parabéns!"


    } else {
        ScoreMachine++
        MachineScore.innerHTML = ScoreMachine
        result.style.color = "#BC3E3E"
        result.innerHTML = "Você perdeu para a Alexa"
    }
}

function Reload() {
    window.location.reload();
}


