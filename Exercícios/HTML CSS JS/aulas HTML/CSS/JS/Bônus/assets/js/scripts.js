function dobro() {
    var dobro = prompt("Digite o valor para ser dobrado:")
    alert("O dobro é: " + dobro*2)
}
function soma2num(){
    var valor1 = Number(prompt("Primeiro valor: "))
    var valor2 = Number(prompt(("Segundo valor: ")))
    var resultado = 0
    resultado = valor1 + valor2;
    alert("A soma é: " + resultado)
}
function juros() {
    var preçototal = Number(prompt("Preço do Jantar: "))
    var taxa = Number(prompt("Valor da taxa à ser cobrada (%): "))
    var resultado = 0
    var taxacao = 0
    taxacao = preçototal * taxa / 100
    resultado = preçototal + taxacao
    alert("Preço a se pagar: R$" + resultado + ",00.")
}
function duracao() {
    var numdias = Number(prompt("N° de Dias: "))
    var numhoras = Number(prompt("N° de Horas: "))
    var total = (numdias*24) + numhoras

    alert("Total de Horas: " + total)
}
function vizin() {
    var numesc = Number(prompt("Digite um numero: "))
    var result = (numesc - 1) + (numesc + 1)
    alert("O resultado de seus vizinhos é: " + result)
}
function distr() {
    var conta = Number(prompt("Valor da Conta: "))
    var pessoas = Number(prompt("Pessoas à pagar: "))
    var result = conta / pessoas

    alert("Cada pessoa terá que pagar:" + result)
}