// creo una griglia 10x10 qunado l'utente clicca un bottone, ogni casella che viene cliccata cambia colore e mostra il suo numero
// collego elemento bottone e elemento container
const btnPlay = document.getElementById("play");
const squareContainer = document.querySelector(".row");
// aggiungo evento click 
btnPlay.addEventListener ('click',
    function () {
        squareContainer.innerHTML = '';
        // aggiungo bordo alla griglia
        squareContainer.classList.add("black-border");
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
        console.log(bomb);
        // ciclo da 100 giri
        for (let i = 1; i <= 100; i++) {
            // creo un elemento "quadrato"
            let square = document.createElement("div");
            square.classList.add("square");
            square.append(i)

            // aggiungo click all'elemento per dare classe e far apparire il numero index
            square.addEventListener('click', 
                function () {
                    square.classList.toggle("clicked");
                    console.log(i);
                }
            )
            
            if (bomb.includes(i)) {
                square.classList.add("red")  
            } else {
                square.classList.add("blue")  
            }
            
            squareContainer.append(square);
        } 
    }
)









