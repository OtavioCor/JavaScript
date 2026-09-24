// EXERCÍCIO 03 - Cadastro e segunda leitura do
// array

// Array, push(), length e
// segundo percurso
// Cadastre 5 nomes de operadores e, depois de terminar o cadastro, faça uma segunda passagem pelo
// array para exibir a lista numerada.
// O programa deve:
// Criar um array vazio.
// Usar um laço para solicitar 5 nomes.
// Usar push() dentro do laço de cadastro.
// Depois do cadastro, criar outro laço para percorrer o array.
// Usar length no segundo laço.
// Exibir no formato: 1 - Nome, 2 - Nome, etc.

const entrada = require('readline-sync');

const operadores = [];

for (let i = 0; i <= 5; i++) {
    const nome = entrada.question(`Digite o nome do ${i}o operador: `);
    operadores.push(nome);
}

console.log('--- LISTA DE OPERADORES ---');
for (let i = 0; i < operadores.length; i++) {
    console.log(`${i + 1} - ${operadores[i]}`);
}
console.log(operadores)
