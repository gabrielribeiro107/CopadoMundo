const prompt = require("prompt-sync")();

console.log("Desafio Copa do Mundo - Anos em que o Brasil foi campeão");
console.log("===================================================");

const anosCampeao = [1958, 1962, 1970, 1994, 2002];
let tentativas = 0;
let acertos = 0;

while (acertos < 5){
    const perguntas = `Em que ano o Brasil foi campeão da Copa do Mundo? (${acerto + 1/5})`;
    const respotaUsuario = Number(prompt(perguntas));
    tentativas++;

    if (anosCampeao.includes(respostaUsuario)) {
        console.log("parabens! REsposta correta!");
        acertos++;
    } else {
        console.log("resposta incorreta. Tente novamente!");
    }
}

console.log(`Parabéns! Você Acertou todas as 5 perguntas em ${tentativas} tentativas.`);