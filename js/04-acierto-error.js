const success = (cardsElements) => {
    cardsElements.forEach(function(element){
        element.classList.add('correct');
    });
}

const error = (cardsElements) => {
    cardsElements.forEach(function(element){
        element.classList.add('error');
    });

    setTimeout(function() {
            cardsElements.forEach(function(element){
            element.classList.remove('discovered');
            element.classList.remove('error');
        });
    }, 1000);
}
