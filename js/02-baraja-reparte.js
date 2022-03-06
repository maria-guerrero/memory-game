// FUNCIÓN PARA QUE LAS TARJETAS SE COLOQUEN EN DISTINTAS POSICIONES AL ACTUALIZAR LA PÁGINA.
function deckCards() {
    let resultado;

    resultado = totalCards.sort(function() { // <-- 'sort' devuelve una función Random y ordena de forma ascendente
            return 0.5 - Math.random(); // <-- partimos de la posición de medio y restamos el número al azar
    });

    return resultado;
}

// CREAMOS UNA FUNCIÓN PARA RECORRER CADA ELEMENTO DE GROUPOFCARDS, HACIENDO UN FOREACH QUE TENGA DENTRO OTRA FUNCIÓN.
const cardsDistribute = () => {
    let tableElement = document.querySelector('#table');
    let shuffledCards = deckCards();
    
    tableElement.innerHTML = '';

    /*antes: totalCards*/ shuffledCards.forEach(function(element) { 
        //------- se crea el div con DOM avanzado -------
        let cardElement = document.createElement('div');

        cardElement.innerHTML = 
            "<div class='card' data-value= " + 
            element + 
            ">" +
            "<div class='card-content'>" + 
            element +
            "</div>" +
            "</div>";

        tableElement.appendChild(cardElement);
        //------- hasta aquí -------
    });

    /***** Otra forma de hacerlo, con FOR OF
    for(const eachCard of groupOfCards) {
        let cardElement = document.createElement('div');
        cardElement.innerHTML = 
        '<div class="card">' +
            '<div class="card-content">' + 
            eachCard +
            '</div>' +
            '</div>';
        tableElement.appendChild(cardElement);
    } *******/
}