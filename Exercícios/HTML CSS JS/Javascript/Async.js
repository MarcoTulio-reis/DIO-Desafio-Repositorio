var p = new Promise((resolve, reject) => {
    const natal = 25
    const dia1 = 12
    const dia2 = 13
    const result = dia1 + dia2;
    if (result >= natal) {
        resolve("Sim, é mais que natal")
    }
    else {reject("Não, é menos que natal.")}
})

p.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
})
