/* Universidad del Valle de Guatemala
// Autora: Andrea Maria Cordon Mayen
// Carne: 16076
// Fecha: 16/07/2018
// client.js */

const playerState = {
    playerId: ['player1', 'player2'],
    currentPlayer: 0,
    cellState: 0,
};

/*const cellState = {
    filled: 0,
};*/

const render = plState => {
    const title = document.createElement('div');
    title.className = 'title'
    title.innerHTML = 'TIC TAC TOE';

    // Images
    const xImage = document.createElement('img');
    xImage.className = 'x';

    const oImage = document.createElement('img');
    oImage.className = 'o';

    // Tic tac toe's matrix display

    const matrix1a = document.createElement('div');
    matrix1a.className = 'matrix1a';
    matrix1a.innerHTML = '<img src = "blank.png">'
    matrix1a.onclick = () => {
        playerState.currentPlayer++;
        console.log(playerState.cellState);
        console.log("cell1");
        if(playerState.currentPlayer % 2 == 0){
            matrix1a.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix1a.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }

    };

    const matrix1b = document.createElement('div');
    matrix1b.className = 'matrix1b';
    matrix1b.innerHTML = '<img src = "blank.png">'
    matrix1b.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell2");
        if(playerState.currentPlayer % 2 == 0){
            matrix1b.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
            
        } 
        else {
            matrix1b.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    const matrix1c = document.createElement('div');
    matrix1c.className = 'matrix1c';
    matrix1c.innerHTML = '<img src = "blank.png">'
    matrix1c.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell3");
        if(playerState.currentPlayer % 2 == 0){
            matrix1c.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix1c.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    const matrix2a = document.createElement('div');
    matrix2a.className = 'matrix2a';
    matrix2a.innerHTML = '<img src = "blank.png">'
    matrix2a.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell4");
        if(playerState.currentPlayer % 2 == 0){
            matrix2a.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix2a.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    const matrix2b = document.createElement('div');
    matrix2b.className = 'matrix2b';
    matrix2b.innerHTML = '<img src = "blank.png">'
    matrix2b.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell5");
        if(playerState.currentPlayer % 2 == 0){
            matrix2b.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix2b.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };
    
    const matrix2c = document.createElement('div');
    matrix2c.className = 'matrix2c';
    matrix2c.innerHTML = '<img src = "blank.png">'
    matrix2c.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell6");
        if(playerState.currentPlayer % 2 == 0){
            matrix2c.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix2c.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    const matrix3a = document.createElement('div');
    matrix3a.className = 'matrix3a';
    matrix3a.innerHTML = '<img src = "blank.png">'
    matrix3a.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell7");
        if(playerState.currentPlayer % 2 == 0){
            matrix3a.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix3a.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    const matrix3b = document.createElement('div');
    matrix3b.className = 'matrix3b';
    matrix3b.innerHTML = '<img src = "blank.png">'
    matrix3b.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell8");
        if(playerState.currentPlayer % 2 == 0){
            matrix3b.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix3b.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    const matrix3c = document.createElement('div');
    matrix3c.className = 'matrix3c';
    matrix3c.innerHTML = '<img src = "blank.png">'
    matrix3c.onclick = () => {
        playerState.currentPlayer++;
        console.log("cell9");
        if(playerState.currentPlayer % 2 == 0){
            matrix3c.innerHTML = '<img src = "O.png">';
            turnText.innerHTML = `Turn: Player 1`;
        } 
        else {
            matrix3c.innerHTML = '<img src = "X.png">';
            turnText.innerHTML = `Turn: Player 2`;
        }
    };

    // Says whos turn is it
    const turnText = document.createElement('div');
    turnText.className = 'turnText';
    turnText.innerHTML = `Turn: Player 1`;

    // Button to restart the match
    const restartBtn = document.createElement('button');
    restartBtn.className = 'restartBtn';
    restartBtn.innerHTML = 'Restart';
    restartBtn.onclick = () => {
        console.log("restart");
            matrix1a.innerHTML = '<img src = "blank.png">';
            matrix2a.innerHTML = '<img src = "blank.png">';
            matrix3a.innerHTML = '<img src = "blank.png">';
            matrix1b.innerHTML = '<img src = "blank.png">';
            matrix2b.innerHTML = '<img src = "blank.png">';
            matrix3b.innerHTML = '<img src = "blank.png">';
            matrix1c.innerHTML = '<img src = "blank.png">';
            matrix2c.innerHTML = '<img src = "blank.png">';
            matrix3c.innerHTML = '<img src = "blank.png">';
            playerState.currentPlayer = 0;
    };

    // Clear previous root content
    if (root.hasChildNodes()){
        root.innerHTML = null;
    }

    // Main rendering
    root.appendChild(title);
    root.appendChild(matrix1a);
    root.appendChild(matrix1b);
    root.appendChild(matrix1c);
    root.appendChild(matrix2a);
    root.appendChild(matrix2b);
    root.appendChild(matrix2c);
    root.appendChild(matrix3a);
    root.appendChild(matrix3b);
    root.appendChild(matrix3c);
    root.appendChild(turnText);
    root.appendChild(restartBtn);

    // On click function
    /*matrix1a.onClick = () => {
        playerState.currentPlayer++;
        console.log("hola");
        if(playerState.currentPlayer % 2 == 0){
            matrix1a.innerHTML = '<img src = "X.png">'
        } 
        
        else {
            
        }
    };*/

    // Winning conditions: (this is waaaaaay to long and could be better...sorry)

}

render(playerState);