// Soma dois valores usando uma função arrow.
const soma = (a, b) => a + b;

console.log(soma(5, 3));

// Dobra os valores de um array com map.
const dobro = (arr) => arr.map((n) => n * 2);

console.log(dobro([1, 2, 3, 4]));

// Define uma função que exibe uma saudação.
function saudacao() {
    console.log('Olá!');
    console.log('Tudo bem?');
}

saudacao();
saudacao();

function saudacaoPara(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacaoPara('Lucas');
saudacaoPara('Maria');
saudacaoPara('José');
saudacaoPara('Ana');

// Cria uma função que retorna a soma de dois números.
function soma(a, b) {
    return a + b;
}

const resultado = soma(2, 3);
console.log(resultado * 2);

// Retorna o maior entre dois números.
function maiorNumero(a, b) {
    return a > b ? a : b;
}

console.log(maiorNumero(59, 20));

function parOuImpar(numero) {
    return numero % 2 === 0 ? 'Par' : 'Ímpar';
}

console.log(parOuImpar(7));
console.log(parOuImpar(8));

// Conta as vogais de um texto.
function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (const letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais('javascript'));

// Soma uma quantidade variável de números.
function somarTodos(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
}

console.log(somarTodos(1, 2, 3, 4, 5));
console.log(somarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Executa várias funções recebidas como argumentos.
function executarTudo(...funcoes) {
    for (let funcao of funcoes) {
        funcao();
    }
}

const bomDia = () => console.log('Bom dia!');
const boaTarde = () => console.log('Boa tarde!');

function boaNoite() {
    console.log('Boa noite!');
}

executarTudo(bomDia, boaTarde, boaNoite);

// Retorna uma função que exibe uma saudação.
function retornarUmaFuncao() {
    return function () {
        console.log('Olá, mundo!');
    };
}

const souUmaFuncao = retornarUmaFuncao();
souUmaFuncao();

retornarUmaFuncao()();

