class PersonagemJogo {
	constructor(nome, idade, tipo, ataque) {
		this.nomeHeroi = nome;
		this.idadeHeroi = idade;
		this.tipoHeroi = tipo;
		this.ataqueHeroi = ataque;
	}

	descreverHeroi() {
		console.log(`O herói ${this.nomeHeroi}, do tipo ${this.tipoHeroi}, atacou usando: ${this.ataqueHeroi}`);
	}
}

// Corrigido: agora com 4 parâmetros
let heroi = new PersonagemJogo("Marcos", 30, "mago", "magia");

heroi.descreverHeroi();
