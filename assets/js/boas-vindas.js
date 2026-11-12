const cores = [
    'avatar-blue', 'avatar-red', 'avatar-green', 'avatar-yellow',
    'avatar-blue', 'avatar-red', 'avatar-green', 'avatar-yellow',
    'avatar-blue', 'avatar-red', 'avatar-green', 'avatar-yellow',
    'avatar-blue'
];

const html = alunos
.filter(aluno => aluno.ativo)
.map((aluno, index) => {
    return `
        <li>
            <div class="student">
                <div class="avatar ${ cores[index] }">${aluno.avatar}</div>
                <a href="${aluno.urlBoasVindas}" target="_blank">${aluno.nome}</a>
            </div>
            <i class="chevron-right" data-lucide="chevron-right" width="20" height="20"></i>
        </li>
    `;
}).join("");

document.getElementById('alunos').innerHTML = html;