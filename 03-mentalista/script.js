var secretNumber = parseInt(Math.random() * 11);

function guessTheNumber() {
  let result = document.getElementById("result");
  let guess = parseInt(document.getElementById("valor").value);
  let alert = document.getElementById("alert");
  if (guess == secretNumber){
    result.innerHTML = "Você acertou"
    // add img
    alert.innerHTML = ""
  } else if (guess > 10 || guess < 0) {
    alert.innerHTML = "Você deve digitar um número de 0 a 10"
    result.innerHTML = ""
  } else {
    result.innerHTML = "Errou"
    alert.innerHTML = ""
    // add img
  }
}