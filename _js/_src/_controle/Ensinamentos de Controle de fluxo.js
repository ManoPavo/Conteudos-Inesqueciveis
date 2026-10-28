// Repete um bloco de código cinco vezes com for.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('Fim');

// Percorre produtos e quantidades usando laços.


const nomes = ['Camisa', 'Calça', 'Tênis', 'Boné'];
const quantidades = [2, 1, 1, 3];
const precos = [50, 120, 200, 30];
console.log('Arrays:', nomes, quantidades, precos);

const item = { nome: 'Camisa', quantidade: 2, preco: 50.0 };
console.log('Objeto:', item);


const carrinho = [
    { nome: 'Camisa', quantidade: 2, preco: 50.0 },
    { nome: 'Calça', quantidade: 1, preco: 120.0 },
    { nome: 'Tênis', quantidade: 1, preco: 200.0 },
    { nome: 'Boné', quantidade: 3, preco: 30.0 },
];

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++) {
    let item = carrinho[i];
    let subtotal = item.quantidade * item.preco;
    totalCompra = totalCompra + subtotal;
    console.log(`Item: ${item.nome} | Quantidade: ${item.quantidade} | Subtotal: R$${subtotal.toFixed(2)}`);
}

console.log(`Valor total da compra: R$${totalCompra.toFixed(2)}`);

// Percorre pedidos e verifica o status de cada um.
const pedidos = [
    { id: 1, status: 'pendente' },
    { id: 2, status: 'enviado' },
    { id: 3, status: 'entregue' },
    { id: 4, status: 'cancelado' },
    { id: 5, status: 'pendente' },
];

for (let i = 0; i < pedidos.length; i++) {
    let pedido = pedidos[i];

    if (pedido.status === 'pendente') {
        console.log(`Pedido ${pedido.id}: Aguardando pagamento ou confirmação.`);
    } else if (pedido.status === 'enviado') {
        console.log(`Pedido ${pedido.id}: Pedido foi enviado, acompanhe o rastreamento.`);
    } else if (pedido.status === 'entregue') {
        console.log(`Pedido ${pedido.id}: Pedido entregue com sucesso!`);
    } else if (pedido.status === 'cancelado') {
        console.log(`Pedido ${pedido.id}: O pedido foi cancelado.`);
    } else {
        console.log(`Pedido ${pedido.id}: Status desconhecido.`);
    }
}

// Filtra pedidos de acordo com o status.
const pedidos = [
    { id: 1, status: 'pendente' },
    { id: 2, status: 'enviado' },
    { id: 3, status: 'entregue' },
    { id: 4, status: 'cancelado' },
    { id: 5, status: 'pendente' },
];

for (const pedido of pedidos) {
    if (pedido.status === 'pendente') {
        console.log(`Pedido ${pedido.id}: Aguardando pagamento ou confirmação.`);
    } else if (pedido.status === 'enviado') {
        console.log(`Pedido ${pedido.id}: Pedido foi enviado, acompanhe o rastreamento.`);
    } else if (pedido.status === 'entregue') {
        console.log(`Pedido ${pedido.id}: Pedido entregue com sucesso!`);
    } else if (pedido.status === 'cancelado') {
        console.log(`Pedido ${pedido.id}: O pedido foi cancelado.`);
    } else {
        console.log(`Pedido ${pedido.id}: Status desconhecido.`);
    }
}

// Executa um bloco quando a condição é verdadeira.
let expressao = true;

if (expressao) {
    console.log('A condição é verdadeira!');
    console.log('O código dentro do bloco é executado!');
}

console.log('Fim');

// Verifica se há chave e coragem antes de agir.
let chave = true;
let corajoso = true;

if (chave && corajoso) {
    console.log('O herói usa a chave e abre o baú! Tesouro encontrado!');
}

if (!chave && corajoso) {
    console.log('O herói tenta abrir o baú com as próprias mãos! Sem sucesso, mas foi uma tentativa valente.');
}

if (chave && !corajoso) {
    console.log('O herói tem a chave, mas fica com medo de abrir o baú... vai que tem uma maldição lá dentro!');
}

if (!chave && !corajoso) {
    console.log('O herói não tem chave e também não tem coragem... Melhor deixar esse baú pra lá.');
}



// Executa uma ação quando as duas condições são verdadeiras.
let fome = true;
let boloMagico = false;

if (fome && boloMagico) {
    console.log('O herói come o bolo mágico e ganha superpoderes!');
} else {
    console.log('O herói decide não comer o bolo... e continua a jornada.');
}

// Mostra uma mensagem conforme o status do usuário.
let statusUsuario = 'banido'; 

if (statusUsuario === 'ativo') {
    console.log('Bem-vindo de volta! Acesso permitido.');
} else if (statusUsuario === 'inativo') {
    console.log('Sua conta está inativa. Por favor, entre em contato com o suporte.');
} else if (statusUsuario === 'banido') {
    console.log('Acesso negado! Sua conta foi banida por violar as políticas.');
} else if (statusUsuario === 'pendente') {
    console.log('Sua conta ainda não foi verificada. Por favor, verifique seu e-mail para ativação.');
} else {
    console.log('Status de usuário desconhecido. Por favor, tente novamente mais tarde.');
}

console.log('Fim');

// Repete o bloco enquanto o número for menor ou igual a cinco.
let numero = 1;

while (numero <= 5) {
    console.log('Código foi executado!');
    numero++;
}

for (let numero = 1; numero <= 5; numero++) {
    console.log('Código foi executado!');
}

