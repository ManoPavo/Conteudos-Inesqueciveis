// Define uma classe Aula com propriedades tipadas.
interface AulaProps {
    id: number;
    nome: string;
    duracaoEmSegundos: number;
}

class Aula {
    constructor(readonly props: AulaProps) {}

    get id(): number {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get duracaoEmSegundos(): number {
        return this.props.duracaoEmSegundos;
    }

    duracaoEmHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600) / 60);
        return `${horas}h ${minutos}m`;
    }
}

const aula = new Aula({
    id: 1,
    nome: 'Introdução ao TypeScript',
    duracaoEmSegundos: 6000,
});
console.log(aula.nome);
console.log(aula.duracaoEmHM());
console.log(aula.props);

// Cria uma classe Curso com dados e métodos.
class Curso {
    constructor(readonly id: number, public nome: string, public duracaoEmSegundos: number) {}

    duracaoEmHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600) / 60);
        return `${horas}h ${minutos}m`;
    }
}

const curso = new Curso(1, 'TypeScript', 78467);
console.log(curso);
console.log(curso.nome);
console.log(curso.duracaoEmHM());

// Define uma classe Usuario com propriedades tipadas.
class Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string | null;
    ativo: boolean;

    constructor(id: number, nome: string, email: string, ativo: boolean, senha: string | null = null) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha = senha;
    }
}

const usuario: Usuario = new Usuario(1, 'João', 'joao@empresa.com.br', true);
console.log(usuario);

