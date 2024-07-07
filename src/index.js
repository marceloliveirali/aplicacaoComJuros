import readlineSync from 'readline-sync';

let divida = readlineSync.question("Informe o valor devido: R$ ");
let diasDeAtraso = readlineSync.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

if(divida <= 0) {
    console.log("O valor da divída deve ser maior que zero");
} else if(diasDeAtraso <= 0) {
    console.log("Você está em dia!");
} else {
    console.log(`Taxa de juros: ${(diasDeAtraso <= 15) ? 5 + "%" : 10 + "%"}`);
    console.log("O valor devido é: R$ " + ((diasDeAtraso <= 15) ? divida * 1.05 : divida * 1.1).toFixed(2));
}