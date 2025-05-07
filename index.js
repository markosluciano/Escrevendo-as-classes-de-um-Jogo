class PersonagemJogo {
	constructor(nome, idade, tipo) {
		this.nomeHeroi = nome;
		this.idadeHeroi = idade;
		this.tipoHeroi = tipo;   
	}

    atacar(){
        let ataque
            if (this.tipoHeroi === "mago") {
                ataque = "Magia"
            } else if(this.tipoHeroi === "gerreiro") {
                ataque = "Espada"
            } else if(this.tipoHeroi === "monge") {
                ataque = "Artes marciais"
            }else if(this.tipoHeroi === "ninja") {
                ataque = "Shuriken"
            } else {
                ataque = "ataque indefinido"
            }

    console.log(`o ${this.tipoHeroi} atacou usando ${ataque}`);
	}
}

// Corrigido: agora com 4 parâmetros
let heroi = new PersonagemJogo("Marcos", 30, "mago");
heroi.atacar();
let heroi2 = new PersonagemJogo("Jão ", 25, "ninja");
heroi2.atacar();
let heroi3 = new PersonagemJogo("Lui", 18, "gerreiro");
heroi3.atacar();
let heroi4 = new PersonagemJogo("Lucas", 70, "monge");
heroi4.atacar();

