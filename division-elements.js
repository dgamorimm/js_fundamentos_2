const nomes = ['João', 'Juliana',
'Ana', 'Caio', 'Lara', 'Marjorie',
'Guilherme', 'Aline', 'Fabiana',
'Andre', 'Carlos', 'Paulo', 'Bia',
'Vivian', 'Isabela', 'Vinícius',
'Renan', 'Renata', 'Daisy', 'Camilo']

// pegando a metadade dos valosres da lista
const sala1 = nomes.slice(0, nomes.length/2)
// se mão passar nada ele vai até o final do array
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);
