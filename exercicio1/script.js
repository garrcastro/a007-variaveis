//const nome = "" 
//let idade = 
//console.log(typeof nome);
//console.log(typeof idade);
// A resposta do log nome foi string, devido as aspas que caracterizam esse tipo de entrada, o log da idade foi "undefined" pois não há um valor declarado. 
const nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
console.log(typeof nome);
console.log(typeof idade);
// A resposta de ambos logs foram strings, pois a pergunta realizada no prompt estão entre aspas.
console.log("Olá", nome, "você tem", idade, "anos.")

const perguntaUm = "Você está usando roupa vermelha?";
const perguntaDois = "Você está usando roupa azul?";
const perguntaTres = "Já trabalhou hoje?";

const respostaUm = prompt(perguntaUm);
const respostaDois = prompt(perguntaDois);
const respostaTres = prompt(perguntaTres);
console.log(perguntaUm, "-" ,respostaUm);