// creo una griglia 10x10 qunado l'utente clicca un bottone, ogni casella che viene cliccata cambia colore e mostra il suo numero
// collego elemento bottone e elemento container
const btnPlay = document.getElementById("play");
const squareContainer = document.querySelector(".row");
const result = document.querySelector("h2");
// creo array per sapere quante celle blu sono state cliccate
let squareBlue = document.getElementsByClassName("blue clicked");
let squareRed = document.getElementsByClassName("square red clicked");

let gameOver = false;
// aggiungo evento click 
btnPlay.addEventListener ('click',
    function () {
        squareContainer.innerHTML = '';
        result.innerHTML = '';
        // aggiungo bordo alla griglia
        squareContainer.classList.add("black-border");
        let gameOver = false;
        // creo 16 bombe da inserire casualmente nella griglia
        const bomb = []

        while (bomb.length < 16) {
            
            // creo numero random da 1 a 100
            let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)
            // evito che esca lo stesso numero
            if (!bomb.includes(randomNumber)) {
                bomb.push(randomNumber)
            }
        }

        // ciclo da 100 giri
        for (let i = 1; i <= 100; i++) {
            // creo un elemento "quadrato"
            let square = document.createElement("div");
            square.classList.add("square");
            square.append(i)
            // aggiungo click all'elemento per dare classe e far apparire il numero index
            square.addEventListener('click', 
                function () {
                    if (gameOver || square.classList.contains("clicked")) return;
                    square.classList.add("clicked");
                    // se viene cliccata una bomba faccio vedere il punteggio
                    if (bomb.includes(i)) {
                        square.classList.add("red");
                        result.append(`Hai perso, il tuo punteggio è: ${squareBlue.length}. Premi gioca per ricominciare`);
                        gameOver = true;
                    } else if (!bomb.includes(i)) {
                        square.classList.add("blue");
                    } else if (squareBlue.length === 84) {
                        result.append(`Hai vinto, il tuo punteggio è: ${squareBlue.length}. Premi gioca per ricominciare`);
                        gameOver = true;
                    }
                }
            )
            squareContainer.append(square);
        } 
    }
)








