let numero01 = prompt("Digite o 1° número: ")
let numero02 = prompt("Digite o 2° número: ")

let soma = Number(numero01) + Number(numero02)
let subtracao = Number(numero01) - Number(numero02)
let multiplicacao = Number(numero01) * Number(numero02)
let divisao = Number(numero01) / Number(numero02)
let restDiv = Number(numero01) % Number(numero02)

alert(`A soma dos dois números é: ${soma}`)
alert(`A subtração dos dois números é: ${subtracao}`)
alert(`A multiplicação dos dois números é: ${multiplicacao}`)
alert(`A divisão dos dois números é: ${divisao}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if (soma % 2 === 0) {
	alert(`A soma dos dois números é PAR: ${soma}`)
} else {
	alert(`A soma dos dois números é ÍMPAR: ${soma}`)
}

if (numero01 == numero02) {
	alert(`Os números inseridos são iguais.`)
} else {
	alert(`Os números inseridos são diferentes.`)
}