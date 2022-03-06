function startChronometer() {
  let seconds = 0;
  let minutes = 1;
  let secondsText;
  let minutesText;
  let chronometer;

  function updateChronometer() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      seconds = 0;
      minutes = 0;
      clearInterval(chronometer);
    }
    // Recogemos los valores de segundos y minutos:
    secondsText = seconds;
    minutesText = minutes;

    // si segundos o minutos es menor a 10, le añadimos un 0 delante a secondsText o minutesText
    if (seconds < 10) {
      secondsText = "0" + seconds;
    }
    if (minutes < 10) {
      minutesText = "0" + minutes;
    }

    document.querySelector(".seconds").innerText = secondsText;
    document.querySelector(".minutes").innerText = minutesText;
  }
  chronometer = setInterval(updateChronometer, 1000); // <-- intervalo que va realizando la función cada vez que pasa un segundo
}
