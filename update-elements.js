const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', "Leo"]

// remove a Ana e o Caio e coloca o Rodrigo no lugar
// listaDeChamada.splice(1,2,'Rodrigo')

// se não quiser remover niguem e adicionar o Rodrigo na segunda posição do array
// o valos zero para este metodo faz isso
listaDeChamada.splice(2, 0, 'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`);