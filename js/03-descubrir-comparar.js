// HACEMOS QUE LA TARJETA SE DESCUBRA AL SELECCIONARLA. // COMPARAMOS VALORES AL HACER CLICK Y MARCAMOS CORRECTO O INCORRECTO.
function discoverCardClick() {
    let discovered;
    let pendingCards;
    let totalDiscovered = document.querySelectorAll('.discovered:not(.correct)');
    
    if(totalDiscovered.length > 1) {
        return;
    }

    this.classList.add('discovered');

    discovered = document.querySelectorAll('.discovered:not(.correct)');
        if(discovered.length < 2) {
            return;
        }

    compare(discovered);
    updateCounter();
    pendingCards = document.querySelectorAll(".card:not(.correct)");
    if(pendingCards.length === 0) {
        setTimeout(finish, 1000);
    }
}

const compare = (cardsToCompare) => {
    // si el valor de data de la posición 0 de discovered es igual al valor de data de la posición 1 de discovered, acertamos, sino, fallamos:
    if(cardsToCompare[0].dataset.value === cardsToCompare[1].dataset.value) {
        success(cardsToCompare);
    } else {
        error(cardsToCompare);
    }
}