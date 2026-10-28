// Espera o tempo indicado antes de continuar.
function esperarPor(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function executar() {
    console.log('Início');

    await esperarPor(2);
    console.log('Depois de 2 segundos');

    await esperarPor(3);
    console.log('Depois de 3 segundos');

    await esperarPor(5);
    console.log('Depois de 5 segundos');

    console.log('Fim');
}

executar();

// Busca uma piada aleatória usando async e await.
async function fatosDoChuckNorris() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await resp.json();
    return data.value;
}

const fato1 = fatosDoChuckNorris();
const fato2 = fatosDoChuckNorris();
const fato3 = fatosDoChuckNorris();

Promise.all([fato1, fato2, fato3]).then(console.log);

// Busca uma piada aleatória e processa a resposta da API.
async function fatosDoChuckNorris() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await resp.json();
    return data.value;
}

async function obterFatosEmSequencia() {
    const fato1 = await fatosDoChuckNorris();
    const fato2 = await fatosDoChuckNorris();
    const fato3 = await fatosDoChuckNorris();
    return ['Sequência', fato1, fato2, fato3];
}

function obterFatosEmParalelo() {
    const label = Promise.resolve('paralelo');
    const fato1 = fatosDoChuckNorris();
    const fato2 = fatosDoChuckNorris();
    const fato3 = fatosDoChuckNorris();
    return Promise.all([label, fato1, fato2, fato3]);
}

obterFatosEmSequencia().then(console.log);
obterFatosEmParalelo().then(console.log);

// Resolve uma promessa com uma mensagem.
const promessaSimples = new Promise((resolve, reject) => {
    resolve('Promessa resolvida!');
});

console.log('Antes da promessa');
promessaSimples.then((resultado) => console.log(resultado));
console.log('Depois da promessa');

// Rejeita uma promessa com uma mensagem.
const promessaRejeitada = new Promise((resolve, reject) => {
    reject('Promessa rejeitada!');
});

console.log('Antes da promessa');
promessaRejeitada.catch((error) => console.log(error));
console.log('Depois da promessa');

// Resolve uma promessa depois de cinco segundos.
const promessaComTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida após 5 segundos');
    }, 5000);
});

console.log('Antes da promessa');
promessaComTimeout.then((result) => console.log(result));
console.log('Depois da promessa');

// Valida uma nota usando uma promessa.
const verificarNota = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero >= 0 && numero <= 10) {
            resolve('É uma nota válida');
        } else {
            reject('Algo deu errado com a nota');
        }
    });
};

verificarNota(17)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// Busca uma piada encadeando as etapas com then.
function fatosDoChuckNorris() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => data.value);
}

const fato1 = fatosDoChuckNorris();
const fato2 = fatosDoChuckNorris();
const fato3 = fatosDoChuckNorris();

Promise.all([fato1, fato2, fato3]).then(console.log);

