/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Boas vindas ao usuário
console.log("Boas vindas ao jogo de Blackjack!");

// Declaracao objetos
let usuario = {};
let computador = {};

// Escolhendo cartas
if (confirm("Quer iniciar uma nova rodada?")) {
   usuario = {
      carta1: comprarCarta(),
      carta2: comprarCarta()
   }
   computador = {
      carta1: comprarCarta(),
      carta2: comprarCarta()
   }
} else {
   console.log("O jogo acabou.");
}

// Validando cartas
while (usuario.carta1.valor === 11 && usuario.carta2.valor === 11) {
   usuario.carta2 = comprarCarta();
}
while (computador.carta1.valor === 11 && computador.carta2.valor === 11) {
   computador.carta2 = comprarCarta();
}

// Array com as cartas
const cartasUsuario = [usuario.carta1.texto, usuario.carta2.texto];
const cartasComputador = [computador.carta1.texto, usuario.carta2.texto];

// Pontuacao
let pontuacaoUsuario;
for (let i = 0; i < cartasUsuario.length; i++) {
   pontuacaoUsuario += cartasUsuario[i];
}
console.log(pontuacaoUsuario);

// Alert com informacoes
// while()
//    if (confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${computador.carta1.texto}.\nDeseja comprar mais uma carta?`)) {
//       usuario.carta3 = comprarCarta();
//       cartasUsuario.push(usuario.carta3.texto);
//       //pontuacao
//    }