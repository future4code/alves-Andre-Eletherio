type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b)   Utilizaria o comando tsc, seguido ou não por seu nome

// c)   Se estivesse dentro de uma pasta, teria que indicar esse caminho ao colocar o nome do arquivo, ou abrir o teminal específico dessa pasta, ou utilizar o tsc sem parâmetros.

// d) Para transpilar múltiplos arquivos de uma só vez, basta utilizar o comando 'tsc', que transpila todos os arquivos .ts que encontra.