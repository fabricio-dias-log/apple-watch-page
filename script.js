const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-cipreste',
    nomePastaImagens: 'imagens-verde-cipreste',
};
const azulInverno = {
    nome: 'Azul-inverno',
    nomePastaImagens: 'imagens-azul-inverno',
};
const meiaNoite = {
    nome: 'Meia-noite',
    nomePastaImagens: 'imagens-meia-noite',
    emEstoque: false,
};
const estelar = {
    nome: 'Estelar',
    nomePastaImagens: 'imagens-estelar',
};
const rosaClaro = {
    nome: 'Rosa-claro',
    nomePastaImagens: 'imagens-rosa-claro',
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ['41 mm', '45 mm'];

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;
