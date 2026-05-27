const numeros = [1, 2, 3, 4];

console.log(numeros);

const numerosFiltrados = numeros.filter((n) => n !== 3 )

console.log(numerosFiltrados);

const numerosFiltrados2 = numeros.map((n) => n === 3);

console.log(numerosFiltrados2);

const numerosFiltrados3 = numeros.forEach((n)=> n === 3);

console.log(numerosFiltrados3);