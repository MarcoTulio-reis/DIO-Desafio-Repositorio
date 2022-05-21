function returnevenvalues(array) {
    let evenNums = []
    for (let i = 0; i < array.lenght; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log("Corno: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnevenvalues(array);