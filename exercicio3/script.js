const perguntaNome = "Qual seu nome completo?";
const perguntaDataDeNascimento = "Qual sua data de nascimento?";
const perguntaEndereco = "Qual seu endereço?";
const perguntaCPF = "Qual seu CPF?";
const perguntaEscolaridade = "Qual seu nível de escolaridade?";
const perguntaCNH ="Possui CNH?";
const perguntaFilhos = "Tem quantos filhos?";
const perguntaCargoAtual = "Qual seu cargo atual?";
const perguntaSalario = "Qual seu salário atual?";
const perguntaComissao = "Recebe comissão? Se sim, informe a porcentagem, se não, zero.";
const perguntaAdmissao = "Em qual ano foi admitido pela empresa?";

const respostaNome = prompt(perguntaNome);
const respostaDataDeNascimento = prompt(perguntaDataDeNascimento);
const respostaEndereco = prompt(perguntaEndereco);
const respostaCPF = prompt(perguntaCPF);
const respostaEscolaridade = prompt(perguntaEscolaridade);
const respostaCNH = prompt(perguntaCNH);
const respostaFilhos = prompt(perguntaFilhos);
const respostaCargoAtual = prompt(perguntaCargoAtual);
const respostaSalario = prompt(perguntaSalario);
const respostaComissao = prompt(perguntaComissao);
const respostaAdmissao = prompt(perguntaAdmissao); 

Number(respostaCNH)
Number(respostaCPF);
Number(respostaDataDeNascimento);
Number(respostaComissao);
Number(respostaAdmissao);
Number(respostaFilhos);
Number(respostaSalario)

console.log(typeof respostaNome)
console.log(typeof Number(respostaDataDeNascimento))
console.log(typeof respostaEndereco)
console.log(typeof Number(respostaCPF))
console.log(typeof respostaEscolaridade)
console.log(typeof Number(respostaCNH))
console.log(typeof Number(respostaFilhos))
console.log(typeof respostaCargoAtual)
console.log(typeof Number(respostaSalario))
console.log(typeof Number(respostaComissao))
console.log(typeof Number(respostaAdmissao));

console.log("Nome:", respostaNome);
console.log("Data de nascimento:", respostaDataDeNascimento);
console.log("Endereço:", respostaEndereco);
console.log("CPF:", respostaCPF);
console.log("Escolaridade:", respostaEscolaridade);
console.log("Possui CNH?", respostaCNH);
console.log("Filhos:", respostaFilhos);
console.log("Cargo atual:", respostaCargoAtual);
console.log("Salário atual:", respostaSalario);
console.log("Porcentagem de comissão:", respostaComissao);
console.log("Ano de admissão:", respostaAdmissao)