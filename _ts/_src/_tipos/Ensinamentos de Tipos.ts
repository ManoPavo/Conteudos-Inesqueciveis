// Declara variáveis com tipos básicos do TypeScript.
let nome: string = 'João';
let numeros: number[] = [1, 2, 3, 4];

console.log(nome);
console.log(numeros);

export {};

// Cria e percorre um array de números tipado.
let nome: string = 'João';
let numeros: number[] = [1, 2, 3, 4];

console.log(nome);
console.log(numeros);

export {};

// Define uma função que não retorna valor.
function bomDia(): void {
    console.log('Bom dia!');
}

bomDia();

function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(10, 20);
console.log(resultado);

// Demonstra uma variável que aceita diferentes tipos com any.
let x: any = 5;
console.log(x);

x = 'João';
console.log(x);

x = [1, 2, 3, 4];
console.log(x);

// Deixa o TypeScript inferir o tipo da variável.
let valor = 30;
console.log(valor);


console.log(valor);

// Define um objeto com propriedades tipadas.
const pessoa: { nome: string; idade: number } = {
    nome: 'Maria',
    idade: 30,
};

pessoa.idade = 31;

console.log(pessoa.nome);
console.log(pessoa.idade);

// Cria um alias para um identificador textual ou numérico.
type ID = string | number;

let usuarioId: ID = 2112;
console.log(usuarioId);

usuarioId = 'a1b2c3d4-0b3b-4b3b-8b3b-0b3b4b3b8b3b';
console.log(usuarioId);

// Declara um identificador que aceita string ou number.
let id: string | number = 5;
console.log(id);

id = 'f4a460f0-0b3b-4b3b-8b3b-0b3b4b3b8b3b';
console.log(id);

