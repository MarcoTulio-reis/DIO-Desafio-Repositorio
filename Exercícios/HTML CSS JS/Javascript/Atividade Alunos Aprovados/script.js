/* var Alunos = []

function addaluno() {
    let aluno_id = prompt(`Nome do ${Alunos.length + 1}° Aluno:`)
    let aluno_nota = prompt("Nota dele: ")
    Alunos.push([aluno_id, aluno_nota])
    console.log(Alunos)
}

function organizanota() {
    Alunos.sort((a, b) => a - b)
}
addaluno() */

/*ar Alunos = {
    nome: "",
    nota: 0,
    id: 1
} */

var alunosRegistrados = [];
var numbRegistrados = 0;

function addaluno() {
    numbRegistrados++;
    let alunoId = prompt(`Nome do ${numbRegistrados}° Aluno:`)
    let capitalizeAlunoId = alunoId.toUpperCase().charAt(0) + alunoId.slice(1)
    let alunoNota = Number(prompt("Nota dele: "))
    alunosRegistrados.push([capitalizeAlunoId, alunoNota, numbRegistrados])
    console.log(alunosRegistrados)
    repetir();
}

function repetir() {
    let dnv = prompt("Adicionar mais alunos?")
    switch (dnv){
        case "Sim":
            addaluno();
            break;
        default:
            alunospassados();
            break;
    }
}

var alunosaprovados = []
var alunosreprovados = []
function alunospassados() {
    for (var i = 0; i < alunosRegistrados.length; i++) {
        if (alunosRegistrados[i][1] >= 7) {alunosaprovados.push(alunosRegistrados[i][0]);}
        else {alunosreprovados.push(alunosRegistrados[i][0]);}
    }
    return alert(`Os alunos com média 7 para cima são: ${alunosaprovados.join(", ")}. \nOs alunos abaixo da média são: ${alunosreprovados.join(", ")}.`)
}

addaluno() 