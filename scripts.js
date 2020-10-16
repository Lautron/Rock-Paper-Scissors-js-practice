let moves = {
            1: 'rock',
            2: 'paper',
            3: 'scissors'
}

let result = {
    'rock': {
        'paper': 'Lose',
        'scissors': 'Win'
    },
    'paper': {
        'rock': 'Win',
        'scissors': 'Lose'
    },
    'scissors': {
        'rock': 'Lose',
        'paper': 'Win'
    }
}

let aiScore = 0;
let playerScore = 0;

function aiChooseMove() {
    let ranNum = Math.floor(Math.random() * 3 + 1);
    console.log(moves[ranNum]);
    document.getElementById(moves[ranNum]).classList.add('ai-move');
    return moves[ranNum];
}

function changeText(result) {
    if (result == 'Lose') {
        document.getElementById('move-result').style.color = 'red';
    }
    else if (result == 'Win') {
        document.getElementById('move-result').style.color = 'green';
    }
    document.getElementById('move-result').innerHTML = result;
}

function changeScore(result) {
    if (result == 'Lose') {
        aiScore += 1;
        document.getElementById('ai-score').innerHTML = aiScore;
    }
    else {
        playerScore += 1;
        document.getElementById('player-score').innerHTML = playerScore;
    }
}

function resetValues() {
    document.getElementById('move-result').style.color = 'white';
    for (id in result)
        document.getElementById(id).classList.remove('ai-move')
}

function playMove(move) {
    resetValues()

    let aiMove = aiChooseMove()

    if (move == aiMove) {
        changeText('TIE')
        
    }
    else if (aiMove == 'rock') {
        changeText(result.rock[move])
        changeScore(result.rock[move])
    }
    else if (aiMove == 'paper') {
        changeText(result.paper[move])
        changeScore(result.paper[move])
    }
    else if (aiMove == 'scissors') {
        changeText(result.scissors[move])
        changeScore(result.scissors[move])
    }
}