const notas = [10, 7, 8, 5, 10]
//deletando o ultimo elemento da lista
notas.pop()
console.log(notas);

let quantidadeDeNotas =  notas.length
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / quantidadeDeNotas
console.log(media);