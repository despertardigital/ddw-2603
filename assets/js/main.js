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
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98146&entry.608306432=DDW-2603&entry.1908647358=GUSTAVO%20SANTOS%20DE%20OLIVEIRA&entry.1827692846=127.334.943-17",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 2,
        avatar: 'MJ',
        nome: "MARIA JANAINA MARTINS VIEIRA RODRIGUES DO NASCIMENTO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98155&entry.608306432=DDW-2603&entry.1908647358=MARIA%20JANAINA%20MARTINS%20VIEIRA%20RODRIGUES%20DO%20NASCIMENTO&entry.1827692846=616.616.433-53",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 3,
        avatar: 'ED',
        nome: "EMERSON DAVI LIMA DE MELO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98147&entry.608306432=DDW-2603&entry.1908647358=EMERSON%20DAVI%20LIMA%20DE%20MELO&entry.1827692846=089.367.853-89",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 4,
        avatar: 'AA',
        nome: "ANGELO AUGUSTO NOGUEIRA DA SILVA FILHO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98148&entry.608306432=DDW-2603&entry.1908647358=ANGELO%20AUGUSTO%20NOGUEIRA%20DA%20SILVA%20FILHO&entry.1827692846=038.785.913-65",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 5,
        avatar: 'PK',
        nome: "PAULO KERLON DA SILVA FERREIRA",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98156&entry.608306432=DDW-2603&entry.1908647358=PAULO%20KERLON%20DA%20SILVA%20FERREIRA&entry.1827692846=097.122.963-50",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 6,
        avatar: 'BK',
        nome: "BRUNA KELLY CARDOSO DE ARAUJO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98157&entry.608306432=DDW-2603&entry.1908647358=BRUNA%20KELLY%20CARDOSO%20DE%20ARAUJO&entry.1827692846=113.878.613-60",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 7,
        avatar: 'JL',
        nome: "JOSE LUAN LIMA LUZ",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98149&entry.608306432=DDW-2603&entry.1908647358=JOS%C3%89%20LUAN%20LIMA%20LUZ&entry.1827692846=093.722.193-71",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 8,
        avatar: 'CD',
        nome: "CÁCIO DAVI SIQUEIRA BARROSO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98150&entry.608306432=DDW-2603&entry.1908647358=CACIO%20DAVI%20SIQUEIRA%20BARROSO&entry.1827692846=093.849.303-50",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 9,
        avatar: 'AP',
        nome: "ANA PATRÍCIA ROMÃO BELO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98151&entry.608306432=DDW-2603&entry.1908647358=ANA%20PATRICIA%20ROM%C3%83O%20BELO&entry.1827692846=003.936.203-52",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 10,
        avatar: 'GC',
        nome: "GUSTAVO DO CARMO SILVA",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98152&entry.608306432=DDW-2603&entry.1908647358=GUSTAVO%20DO%20CARMO%20SILVA&entry.1827692846=091.040.343-09",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 11,
        avatar: 'IF',
        nome: "ISAAC FELIPE DA SILVA FERREIRA",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98153&entry.608306432=DDW-2603&entry.1908647358=ISAAC%20FELIPE%20DA%20SILVA%20FERREIRA&entry.1827692846=623.438.223-10",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 12,
        avatar: 'DR',
        nome: "DJALMA RONCY QUEIROZ FILHO",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98154&entry.608306432=DDW-2603&entry.1908647358=DJALMA%20RONCY%20QUEIROZ%20FILHO&entry.1827692846=085.933.973-44",
        urlEncerramento: "#",
        ativo: true
    },
    {
        numero: 13,
        avatar: 'BK',
        nome: "BRENA KAREN MARTINS XAVIER",
        urlBoasVindas: "https://docs.google.com/forms/d/e/1FAIpQLSesbuT5L8l4Bum8yilpP9qSyh4YBMJ4GaPvH0eqJdRY3sPSCg/viewform?usp=pp_url&entry.1988089040=98183&entry.608306432=DDW-2603&entry.1908647358=BRENA%20KAREN%20MARTINS%20XAVIER&entry.1827692846=074.359.523-89",
        urlEncerramento: "#",
        ativo: true
    }
];

alunos.sort((a, b) =>
    a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" })
);

const turma = {
    codigo: 'ddw-2603',
    curso: 'Desenvolvimento Web I',
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