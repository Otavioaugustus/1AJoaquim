let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("16");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 18) {
    if (idade >= 18) {
      return "Breaking Bad";
    } else {
      if (idade >= 16) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Cidade de Deus";          
        } else{
         return "Snowfall";
        }
      } else {
        if (gostaDeFantasia) {
          return "SuperBad";
        } else {
          return "Projeto X";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Este é Meu garoto";
    } else {
      return "Gente Grande";
    }
  }
}
