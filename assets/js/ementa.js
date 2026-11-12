const spanPeriodo = document.querySelector('#periodo');

if(spanPeriodo) {
    spanPeriodo.textContent = `[${turma.periodo}]`;
}

const spanCargaHoraria = document.querySelector('#carga-horaria');

if(spanCargaHoraria) {
    spanCargaHoraria.textContent = `[${turma.cargaHoraria}]`;
}

const spanModalidade = document.querySelector('#modalidade');

if(spanModalidade) {
    spanModalidade.textContent = `[${turma.modalidade}]`;
}

const nomeLocal = document.querySelector('#nome-local');

if(nomeLocal) {
    nomeLocal.textContent = turma.local.nome;
}

const enderecoLocal = document.querySelector('#endereco-local');

if(enderecoLocal) {
    enderecoLocal.textContent = turma.local.endereco;
}

const conteudo = [
    {
        dia: 'Dia 1',
        assunto: 'Fundamentos da Web',
        conteudo: 'Tecnologias por trás de uma página Web e arquitetura cliente/servidor. Origem e evolução do HTML. Noções de programação e anatomia básica de um documento HTML.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 2',
        assunto: 'Tags de texto e listas',
        conteudo: 'Tags de título e parágrafo, formatação de texto com negrito, itálico e sublinhado, e criação de listas ordenadas e não ordenadas.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 3',
        assunto: 'Links, mídias, tabelas e tags semânticas',
        conteudo: 'Criação de links, inserção de imagens, áudio e vídeo, construção de tabelas e estruturação da página com tags semânticas.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 4',
        assunto: 'Construindo uma Loja virtual',
        conteudo: 'Desenvolvimento de uma loja virtual com quatro páginas interligadas, aplicando navegação entre páginas, imagens, tags de texto e tabelas na organização dos produtos e do carrinho de compras.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 5',
        assunto: 'Formulários',
        conteudo: 'A tag form e seus atributos, campos de entrada de dados (texto, senha e seleção), botões e envio de formulários.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 6',
        assunto: 'Introdução ao CSS',
        conteudo: 'Origem e evolução do CSS. Conceito e finalidades do CSS. Formas de aplicação do CSS (inline, interno e externo), sintaxe, primeiras regras CSS.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 7',
        assunto: 'Seletores e paleta de cores',
        conteudo: 'Seleção de elementos com CSS e os principais tipos de seletores: universal, de tag, de ID, de classe, de filho direto e de descendente. Definição de cores por nome, RGB e hexadecimal, com o seletor de cores do Visual Studio Code.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 8',
        assunto: 'Box Model, altura, largura e cor de fundo',
        conteudo: 'Modelo de caixa (conteúdo, padding, borda e margin), outline, dimensionamento de elementos e aplicação de cor de fundo.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 9',
        assunto: 'Posicionando elementos com Flexbox',
        conteudo: 'Display block e inline, contêiner e itens flexíveis, direção dos eixos, alinhamento, responsividade e distribuição dos itens e espaçamento entre eles.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 10',
        assunto: 'Estilizando telas de login e cadastro',
        conteudo: 'Formatação de textos: tamanho, peso, cor, alinhamento e espaçamento. Organização do CSS em arquivos com @import e uso de variáveis CSS. Ícones e fontes do Google. Transições suaves. Construção de dois formulários completos, com os estados hover, focus e disabled.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 11',
        assunto: 'Noções de JavaScript',
        conteudo: 'O que é a linguagem e como ela é executada no navegador. Inclusão de scripts em páginas HTML. Variáveis, tipos de dados e operadores aritméticos e de comparação. Estruturas condicionais com if/else e switch/case. Funções. Seleção de elementos HTML pelo DOM.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 12',
        assunto: 'Implementação do projeto final - Parte I',
        conteudo: 'Planejamento e início do projeto final da turma: definição das páginas e funcionalidades, criação da estrutura HTML e dos primeiros estilos.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 13',
        assunto: 'Implementação do projeto final - Parte II',
        conteudo: 'Conclusão do projeto final: implementação das funcionalidades com JavaScript, ajustes de layout, testes e apresentação dos resultados.',
        cargaHoraria: '3 horas'
    },
    {
        dia: 'Dia 14',
        assunto: 'Apresentação do projeto final',
        conteudo: 'Apresentação dos projetos pelos alunos, devolutiva do professor e encerramento do curso.',
        cargaHoraria: '1 hora'
    }
];

const ul = document.querySelector('#conteudo-programatico');

conteudo.forEach(c => {

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="badge badge-info">${c.dia}</span>
        <h2>${c.assunto}</h2>
        <p class="text">${c.conteudo}</p>
        <p class="hours">
            <i data-lucide="timer" width="18" height="18"></i>
            ${c.cargaHoraria}
        </p>
    `;

    ul.appendChild(li);
    
});

lucide.createIcons();