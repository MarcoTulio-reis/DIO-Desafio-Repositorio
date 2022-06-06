 function palindromo() {
    let value = prompt("Digite uma frase: ")

    if (value === value.split('').reverse().join('')){console.log(true)}
    else{console.log(false)}

    repeticao();
 }

function repeticao() {
    let repetir = prompt("Repetir? (S/N)")
    if (repetir === "S" || "s") {palindromo();}
    else{alert("Programa Finalizado.")}
}

palindromo(); 
