//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let maiorIdade = 24;

if((maiorIdade >=18) ){
    console.log("Tu tem mais de 18 anos.");
}else{
    console.log("Menor de idade");
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let idade = 24;
let humano = true;

if ((idade >=18) && (humano === true)){
    console.log("Tu é maior de idade e é humano");
}else{
    console.log("Tem menos de 18 e/ou não é humano");
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario = "Janeiro";

if((aniversario === "Janeiro") || (aniversario === "Dezembro")){
        console.log("É Capricorniano");
    }else{
        console.log("Não é Capricorniano");
    }

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome = "Renata"

if (nome.charAt(0) === "R"){
    console.log(`O nome ${nome} começa com a letra R.`);
}else{
    console.log(`O nome ${nome} não incia com a letra R.`);
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = "Feltrin";

if ((sobrenome.length >= 6) || sobrenome.charAt(0) === "E"){
    console.log(`Seu sobrenome ${sobrenome} tem seis ou mais letras OU inicia com a letra E.`);
}else{
    console.log(`Seu sobrenome ${sobrenome} tem menos de cinco letras e/ou não incia com a letra E.`);
}