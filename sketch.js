// comédia, drama, ação, romance

// 
// Gente Grande 1 e 2,+12, comédia, aventura
// Este é meu garoto, +16, comédia, aventura
// Como se fosse a primeira vez, +12, romance, comédia
// Projeto X, +16, comédia, aventura
// Cidade de Deus, +18, ação, drama
// Breaking Bad, +16, drama, ação
// Snowfall, +16, drama

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let recomendacao = geraRecomendacao();
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 10) {
    return "Snowfall"
  } else {
    return "Gente grande";
    }
  }
    