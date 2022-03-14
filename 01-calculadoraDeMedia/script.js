function Calcular() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  var resultado = null;
  var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaFixada = notaFinal.toFixed(1);

  if (document.getElementById("nota1").value.length == 0) {
    resultado = document.getElementById('result').innerHTML = "Você precisa preencher todos os campos."
    notaFixada = "inválida"
    document.getElementById('result').style.backgroundImage="url('https://c.tenor.com/9gXMxFb4sOMAAAAj/stitch-alone.gif')";
  } else if (notaFixada >= 6) {
    resultado = "Parabéns, você foi aprovade! &#128526";
    document.getElementById('result').style.backgroundImage="url('https://c.tenor.com/kE2G0EC_4f0AAAAj/stitch-happy-new-year.gif')";
  } else {
    resultado = "Infelizmente você foi reprovade &#128532";
    document.getElementById('result').style.backgroundImage="url('https://c.tenor.com/T1Sjs8hXXLsAAAAj/stitch-cry.gif')";
  }

  document.getElementById("result").innerHTML = "Sua nota final é " + notaFixada + ". " + resultado;

}
/*

#TODO: validar input vazio >>> 
resultado = document.getElementById('result').innerHTML = "Atenção! Você precisa preencher todos os campos."

#TODO: enter pra enviar resposta
input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn-calcular").click();
      }
    });

*/