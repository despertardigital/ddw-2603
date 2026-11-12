// Habilita a biblioteca de ícones
lucide.createIcons();

const goTo = (target) => {
    window.location.href = target;
}

const home = document.querySelector('#home');

if(home) {
    home.addEventListener('click', () => goTo('index.html'));
}

const alunos = [
    {
        numero: 1,
        avatar: 'GS',
        nome: "GUSTAVO SANTOS DE OLIVEIRA",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 2,
        avatar: 'MJ',
        nome: "MARIA JANAINA MARTINS VIEIRA RODRIGUES DO NASCIMENTO",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 3,
        avatar: 'ED',
        nome: "EMERSON DAVI LIMA DE MELO",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 4,
        avatar: 'AA',
        nome: "ANGELO AUGUSTO NOGUEIRA DA SILVA FILHO",
        urlBoasVindas: "#",
        ativo: true
    },
    {
        numero: 5,
        avatar: 'JB',
        nome: "PAULO KERLON DA SILVA FERREIRA",
        urlBoasVindas: "#",
        ativo: true
    },
    {
        numero: 6,
        avatar: 'BK',
        nome: "BRUNA KELLY CARDOSO DE ARAUJO",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 7,
        avatar: 'JL',
        nome: "JOSE LUAN LIMA LUZ",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 8,
        avatar: 'CD',
        nome: "CÁCIO DAVI SIQUEIRA BARROSO",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 9,
        avatar: 'AP',
        nome: "ANA PATRÍCIA ROMÃO BELO",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 10,
        avatar: 'GC',
        nome: "GUSTAVO DO CARMO SILVA",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 11,
        avatar: 'IF',
        nome: "ISAAC FELIPE DA SILVA FERREIRA",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 12,
        avatar: 'DR',
        nome: "DJALMA RONCY QUEIROZ FILHO",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 13,
        avatar: 'DK',
        nome: "BRENA KAREN MARTINS XAVIER",
        urlBoasVindas: "#",
        urlEncerramento: "#",
        ativo: true
    }
];

const turma = {
    codigo: 'ddw-2603',
    curso: 'Devenvolvimento Web I',
    modalidade: 'Presencial',
    periodo: 'De 16/11/2026 à 08/12/2026',
    cargaHoraria: '40 horas',
    urlMaterialApoio: 'https://www.dropbox.com/scl/fo/ttqrmrha69hhytwwdlb9l/AF9wpNgL58wS2108FOHyLJo?rlkey=nq5rrwft58jpwyuhu15lrk0mw&st=9r2n5glc&dl=0',
    local: {
        nome: 'CVT - Centro Vocacional Tecnológico',
        endereco: 'Av. Antonieta Araújo Ferreira, 11 - Jereissati - Setor A, Maracanaú - CE, 61939-140'
    }
}

const spanTurma = document.querySelector('#turma');

if(spanTurma) {
    spanTurma.textContent = `Turma.: ${turma.codigo.toUpperCase()}`;
}

const pCurso = document.querySelector('.curso');

if(pCurso) {
    pCurso.textContent = turma.curso;
}