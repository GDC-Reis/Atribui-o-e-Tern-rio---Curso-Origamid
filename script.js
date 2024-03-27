let x = 5;
let y = 10;

x += y; // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (9765625)

// Operador Ternário
// Abreviação de condicionais com if e else

let idade = 19;
let podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

// condição (idade => 18) ? true 'Pode beber' : false 'Não pode beber';

// If Abreviado
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

let possuiFaculdade = true;

if(possuiFaculdade) console.log('Possui Faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
    console.log('Possui faculdade');
 else
    console.log('Não possui faculdade');

// Exercícios

// Some 500 ao valor de scroll abaixo, atribuidno o novo valor a scroll
let scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variavel darCredito, caso o cliente possua carro e casa.
// E false caso o contrário.

let possuiCarro = true;
let possuiCasa = true;
let darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito ao cliente' : 'Negar crédito'; // Apenas caso tenha que ser apresentado alguma String ou algum numero.

console.log(darCredito);