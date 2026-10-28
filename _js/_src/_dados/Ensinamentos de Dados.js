// Monta uma frase usando interpolação de variáveis.
const nome = 'Lucas';
const idade = 25;
const cidade = 'São Paulo';


const frase = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
console.log(frase);

// Declara valores literais de diferentes tipos.
123;
15.5;
('Olá, mundo!');
true;

// Exibe valores numéricos, texto e booleano no console.
console.log(123); 
console.log(15.5); 
console.log('Olá, mundo!'); 
console.log(true); 

// Realiza operações aritméticas.



console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);


let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


let z = 10;
z++;

console.log(z++); 
console.log(z);
console.log(++z);
console.log(z);

console.log(z--);
console.log(--z);
console.log(z);

let a = 10;
a *= 5; 
console.log(a);

// Compara valores usando operadores relacionais.



console.log(10 > 5); 
console.log(10 < 5); 
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 == 5);
console.log(10 != 5);
console.log(10 == '10');
console.log(10 === '10');


let x = 10;
let y = 5;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x == '10');
console.log(x === '10');
console.log(x !== '10');

// Combina condições com operadores lógicos.



const planejamentoConcluido = true;
const estaSol = true;
const todosEstaoBem = true;

const temPicnic = planejamentoConcluido && estaSol && todosEstaoBem; 
console.log('Vamos fazer um picnic?', temPicnic);


const estudei = true;
const liUmLivro = false;

const diaProdutivo = estudei || liUmLivro; 
console.log('Foi um dia produtivo?', diaProdutivo);


const estouCansado = false;
console.log('Vou para a academia?', !estouCansado); 


const usandoCalca = true; 
const usandoBermeuda = true;

const vestidoCorretamente = usandoCalca !== usandoBermeuda;
console.log('Estou vestindo corretamente?', vestidoCorretamente);

// Declara variáveis e soma seus valores.
let x = 10;
let y = 20;

console.log(x + y);

x = x + 10;
console.log(x + y);

console.log(x, y);

// Calcula e exibe a soma de duas constantes.
const x = 10;
const y = 20;

const resultadoDaSoma = x + y;

console.log(resultadoDaSoma);

const xAlterado = x + 10;
console.log(x, xAlterado, y);

