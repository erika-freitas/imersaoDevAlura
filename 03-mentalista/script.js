var secretNumber = parseInt(Math.random() * 11);

function guessTheNumber() {
  let result = document.getElementById("result");
  let guess = parseInt(document.getElementById("valor").value);
  let alert = document.getElementById("alert");
  let image = document.getElementsByClassName("container__image")[0];
  if (guess == secretNumber){
    result.innerHTML = "Parabéns, você acertou!"
    result.style.display = "inline";
    alert.style.display = "none";
    image.src = "https://imgur.com/8UzOOkx.png"
  } else if (guess > 10 || guess < 0) {
    alert.innerHTML = "Você deve digitar um número de 0 a 10"
    alert.style.display = "inline";
    result.style.display = "none";
    image.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/318/550/e2d.jpg"
  } else {
    result.innerHTML = "Errou, tente novamente!"
    result.style.display = "inline";
    alert.style.display = "none";
    image.src = "https://imgur.com/KASnxm9.png";
  }
}

// #TODO: add guesses?