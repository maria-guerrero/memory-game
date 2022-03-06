// ESTA FUNCIÓN DEBERÍA DE IR EN OTRO FICHERO. SIRVE PARA QUE EL CONTADOR DE MOVIMIENTOS VAYA SUMANDO SEGÚN FALLAMOS EN EL JUEGO.
function updateCounter() {
    let movementsText;
    movements++;
    movementsText = movements;

    if(movements < 10) {
        movementsText = "0" + movements;
    }
    document.querySelector('.movements-element').innerText = movementsText;

}