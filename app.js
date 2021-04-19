let cartaNumero = [2,3,4,5,6,7,8,9,10,'A','J','Q','K'];
let icon = ["♥", "♦", "♠", "♣"];
let cardRandom1 = document.querySelector('#cartas');
let cardRandom2 = document.querySelector('#cartas2');
let cardRandom3 = document.querySelector('#numero');
let figura = icon[Math.floor(Math.random()*icon.length)];
let numeros = cartaNumero[Math.floor(Math.random()*cartaNumero.length)];


if (figura === "♥"  || figura === "♦" ) {
    cardRandom1.style.color = "red"
    cardRandom2.style.color = "red"
} else {
    cardRandom1.style.color = "black"
    cardRandom2.style.color = "black"
}

cardRandom2.innerHTML = figura;
cardRandom1.innerHTML = figura;
cardRandom3.innerHTML = numeros;

