function verificador() {
    var numero1 = Number(prompt("Primeiro Número: "))
    var numero2 = Number(prompt("Segundo Número: "))
    let igualdade = "";
    let soma = numero1 + numero2;
    let soma10 = "";
    let soma20 = "";

    if (numero1 === numero2) {igualdade = "são números iguais";}
    else{igualdade = "não são iguais";}

    if (soma < 10) {soma10 = "menor que";}
    else if (soma > 10) {soma10 = "maior que";}
    else if (soma == 10) {soma10 = "igual à";}

    if  (soma < 20) {soma20 = "menor que";}
    else if (soma > 20) {soma20 = "maio que";}
    else if (soma == 20) {soma20 = "igual à";}

    alert(`Os números ${numero1} e ${numero2} ${igualdade}. Sua soma é ${soma} que é ${soma10} 10 e ${soma20} 20.`)

    repetirprograma();
}

function repetirprograma() {
    let again = prompt("Deseja somar novamente? (S/N)")
    switch (again) {
        case "S":
            verificador();
            break;
        case "N":
            alert("Programa finalizado.");
            break;
        default:
            alert("Erro. Digite novamente");
            repetirprograma()
            break;
    }
}

verificador()