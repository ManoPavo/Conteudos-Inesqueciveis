// Define a estrutura de dados de um animal.
interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'Rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'Victor',
};

console.log(cachorro);

// Descreve as especificações de um computador.
interface Especificacoes {
    marca: string;
    modelo: string;
    placaDeVideo: string;
    memoria: string;
    processador: string;
    armazenamento: string;
    [extra: string]: string | number | boolean;
}

let computador: Especificacoes = {
    marca: 'Dell',
    modelo: 'Inspiron 15 3000',
    placaDeVideo: 'Intel UHD Graphics 620',
    memoria: '8 GB',
    processador: 'Intel Core i5',
    armazenamento: '256 GB SSD',
    bluetooth: true,
    hdmi: true,
};

console.log(computador);

// Define as propriedades de um produto.
interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

const produto1: Produto = {
    id: 1,
    nome: 'Smartphone',
    descricao: 'Um smartphone top de linha',
    preco: 2000,
    imagem: 'smartphone.jpg',
};

const produto2: Partial<Produto> = {
    id: 2,
    nome: 'Notebook',
    preco: 3000,
};

console.log(produto1);
console.log(produto2);

// Define as propriedades e tipos de um usuário.
interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string | null;
    ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'Fulano de Tal',
    email: 'fulano@empresa.com.br',
    ativo: true,
    senha: null,
};

console.log(usuario.nome);
console.log(usuario);

