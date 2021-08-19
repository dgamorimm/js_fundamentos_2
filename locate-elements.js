const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// Arrow Function
const exibeNomeNota = (nomeDoAluno) => {
    // includes = verifica se o nome do aluno esta na lista de nomes
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        // indexOf = pega o valor do indice através do nome
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' 
        + listaDeNotasEAlunos[1][indice] 
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('Juliana')); 