let contador = 0;
let res = document.getElementById('resultado');

function contar(){
    contador = contador + 1;
    res.innerHTML = `<p>O contador esta com <mark>${contador}</mark> cliques.</p>`
}

function zerar(){
    contador = 0;
    res.innerHTML = `<p>O contador esta em ${contador} cliques</p>`
}