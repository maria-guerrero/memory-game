function start() {
  movements = 0;
  cardsDistribute();

  document.querySelector(".feedback").classList.remove("visible");
  
  const movementsText = document.querySelector('.movements-element');
  movementsText.innerHTML = "00";

  document.querySelectorAll(".card").forEach(function (element) {
    element.addEventListener("click", discoverCardClick);
  });

  /* ¿POR QUÉ NO FUNCIONA? 

    function eachCardClick() {
        let allCardElements = document.querySelectorAll('.card');

        for(const eachCardElement of allCardElements) {
            eachCardElement.addEventListener('click', discoverCard);
        }
        
    } */

  // startChronometer();
}

start();

document.querySelector(".reset").addEventListener("click", start);
