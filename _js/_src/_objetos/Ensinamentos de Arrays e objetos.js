// Cria um array de frutas e acessa seus itens.
const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas);

console.log(frutas[1]);
console.log(frutas.length);

frutas.push('uva');
console.log('push:', frutas);

console.log('pop:', frutas.pop());
console.log(frutas);

frutas.unshift('manga');
console.log('unshift:', frutas);

console.log('shift:', frutas.shift());
console.log(frutas);

// Junta arrays de frutas e vegetais com concat.
const frutas = ['maçã', 'banana', 'laranja', 'tomate'];
const vegetais = ['cenoura', 'tomate', 'batata'];

const comida = frutas.concat(vegetais);
console.log(comida);

const index = comida.indexOf('tomate');
if (index !== -1) {
    comida.splice(index, 1);
}

console.log(comida);
comida.sort();
console.log(comida);

console.log(typeof 123);
console.log(typeof 'texto');
console.log(typeof {});
console.log(typeof comida);

// Transforma nomes de pessoas usando map.
const pessoas = [
    { nomeCompleto: 'Lucas Silva' },
    { nomeCompleto: 'Ana Paula' },
    { nomeCompleto: 'Pedro Santos' },
    { nomeCompleto: 'Maria Oliveira' },
];

const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0]);

console.log(primeirosNomes);

// Filtra produtos de acordo com seus preços.
const produtos = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 120 },
    { nome: 'Tênis', preco: 200 },
    { nome: 'Boné', preco: 30 },
    { nome: 'Relógio', preco: 80 },
];

const maisBaratos = produtos.filter((produto) => produto.preco < 100);

console.log('Produtos com preço menor que 100 reais:');
console.log(maisBaratos);

// Cria um objeto com propriedades de uma pessoa.
const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

pessoa.nome = 'Maria';
pessoa.estado = 'RJ';

delete pessoa.idade;

console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa);

// Cria um objeto de livro com dados do autor.
const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: {
        nome: 'J.R.R. Tolkien',
        idade: 81,
    },
    generos: ['Fantasia', 'Aventura', 'Ficção'],
    publicado: true,
    anoPublicacao: 1954,
    generoPrincipal: function () {
        return this.generos[0];
    },
};

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor.nome}`);
console.log(`Publicado: ${livro.publicado ? 'Sim' : 'Não'}`);

if (livro.publicado) {
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
    console.log(`Gêneros: ${livro.generos.join(', ')}`);
}

console.log(`Gênero Principal: ${livro.generoPrincipal()}`);

console.log(JSON.stringify(livro, null, 4));

