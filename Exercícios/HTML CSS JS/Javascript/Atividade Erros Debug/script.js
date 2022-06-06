function validaArray(arr, num) {
    try {
        if (!arr && !num) {throw new ReferenceError('Erro de Referência')}
        if (typeof arr != 'object') {throw new TypeError('Erro de Tipo')}
        if (typeof num != 'number') {throw new TypeError('Erro de Tipo')}
        if (arr.length !== num) {throw new RangeError('Erro de Alcance')}
        return arr;
    }catch(error) {
        if (error instanceof RangeError) {
			console.log('RangeError!');
            error.name = 'Deu erro ai'
            console.log(error.stack)
		} else if (error instanceof ReferenceError) {
			console.log('ReferenceError!');
            error.name = 'Deu erro ai'
            console.log(error.stack)
		} else {
			console.log('TypeError!');
            error.name = 'Deu erro ai'
            console.log(error.stack)
		}
    }
}
console.log(validaArray([0, 2, 4], 2))