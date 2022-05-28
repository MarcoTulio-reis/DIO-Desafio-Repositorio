/* class ContaBancaria {
	constructor (agencia, tipo, saldo) {
		this.agencia = agencia;
		this.tipo = tipo;
		this._saldo = 0;
	}

	get saldo() {
		return this._saldo
	}

	set saldo(val) {
		this._saldo = val;
	}
	
	Sacar(val) {
		if (val > this._saldo) {return console.log("Transação Negada. Pouco Saldo!")}
		this._saldo -= val;
		return this._saldo
	}

	Depositar(val) {
		this._saldo += val;
		return this._saldo
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, saldo, cartao) {
		super(agencia) 
		this.tipo = "Conta Corrente";
		this.cartao = cartao;
	}

	set cartao(valor) {
		this._cartao = valor;
	}

	get cartao() {
		return this._cartao;
	}
}

class ContaUniversitária extends ContaBancaria {
	constructor(agencia, saldo) {
		super(agencia) 
		this.tipo = "Conta Universitária";
	}

	Sacar(val) {
		if (val > 500) {return console.log("Não é possível fazer saques maiores que 500.")}
		this._saldo -= val;
		return console.log(`Valor sacado: ${val}. Saldo atual: ${this._saldo}`)
	}

}

var contacor1 = new ContaCorrente(2, 1000, true)
var contauniv1 = new ContaUniversitária(2, 1000) */
var estante = []

class Games {
	constructor(Nome, Tipo, Fa_Et, Preço) {
		this.Nome = Nome;
		this.Tipo = Tipo;
		this.Fa_Et = Fa_Et;
		this._Preço = 0;
	}

	get Preço() {
		return this._Preço;
	}

	set Preço(val) {
		this._Preço = val;
	}

	Library(att_game) {
		estante.push(att_game)
		return console.log(estante)
	}
}

class ActionGames extends Games {
	constructor(Nome, Fa_Et, Preço){
		super(Nome, Fa_Et)
		this.Tipo = "Action";
		this.Fa_Et = Fa_Et;
		this.Preço = Preço;
	}
}

class PlatformGames extends Games {
	constructor(Nome, Fa_Et, Preço){
		super(Nome, Fa_Et)
		this.Tipo = "Platform";
		this.Fa_Et = Fa_Et;
		this.Preço = Preço;
	}
}