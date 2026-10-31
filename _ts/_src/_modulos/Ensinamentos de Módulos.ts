// Calcula o total dos itens de um carrinho.
import Carrinho from '../model/Carrinho';
import ItemCarrinho from '../model/ItemCarrinho';

export function calcularTotal(carrinho: Carrinho): Carrinho {
    const total = carrinho.itens.reduce((total: number, item: ItemCarrinho) => {
        const totalItem = item.preco * item.quantidade;
        return total + totalItem;
    }, 0);
    return { ...carrinho, total };
}

export function calcularDesconto(carrinho: Carrinho): Carrinho {
    return {
        ...carrinho,
        totalComDesconto: carrinho.total - carrinho.total * (carrinho.cupom ?? 0),
    };
}

// Remove do carrinho os itens sem quantidade.
import Carrinho from '../model/Carrinho';

export default function removerItensZerados(carrinho: Carrinho): Carrinho {
    const itens = carrinho.itens.filter((item) => item.quantidade > 0);
    return { ...carrinho, itens };
}

// Importa módulos e executa operações no carrinho.
import { calcularDesconto, calcularTotal } from './functions/calcularTotal';
import removerItensZerados from './functions/removerItensZerados';
import Carrinho from './model/Carrinho';

const carrinhoOriginal: Carrinho = {
    itens: [
        { nome: 'Caneta', preco: 1.5, quantidade: 2 },
        { nome: 'Caderno', preco: 10, quantidade: 1 },
        { nome: 'Borracha', preco: 0.5, quantidade: 3 },
        { nome: 'Estojo', preco: 5, quantidade: 0 },
    ],
    cupom: 0.1,
    total: 0,
    totalComDesconto: 0,
};

const carrinhoSemItensZerados = removerItensZerados(carrinhoOriginal);
const carrinhoComTotal = calcularTotal(carrinhoSemItensZerados);
const carrinhoComDesconto = calcularDesconto(carrinhoComTotal);

console.log(carrinhoOriginal);
console.log(carrinhoComDesconto);

// Define a interface de um carrinho de compras.
import ItemCarrinho from './ItemCarrinho';

export default interface Carrinho {
    readonly itens: ItemCarrinho[];
    readonly cupom?: number;
    total: number;
    totalComDesconto: number;
}

// Define a interface de um item do carrinho.
export default interface ItemCarrinho {
    nome: string;
    preco: number;
    quantidade: number;
}

