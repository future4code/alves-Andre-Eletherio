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
let usuario = [];
let computador = [];

// Escolhendo cartas
if (confirm("Quer iniciar uma nova rodada?")) {
   for (let i = 0; i < 2; i++) {
       usuario.push(comprarCarta());
       computador.push(comprarCarta());
   }
      // Validando cartas
      while (usuario[0].valor === 11 && usuario[1].valor === 11) {
         usuario[1] = comprarCarta();
      }
      while (computador[0] === 11 && computador[1].valor === 11) {
         computador[1] = comprarCarta();
      }
   
      // Array com as cartas
      const cartasUsuario = [usuario[0].texto, usuario[1].texto];
      const cartasComputador = [computador[0].texto, computador[1].texto];
   
      // Pontuacao
      let pontuacaoUsuario = 0;
      let pontuacaoComputador = 0;
      for (let i = 0; i < usuario.length; i++) {
         pontuacaoUsuario += usuario[i].valor;
      }
      for (let i = 0; i < computador.length; i++) {
         pontuacaoComputador += computador[i].valor;
      }
   
      // Funcao para finalizar o jogo
      const finalizaJogo = () => {
         if (pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador <= 21|| pontuacaoUsuario > 21) {
            vencedor = "Computador";
         } else if (pontuacaoComputador < pontuacaoUsuario || pontuacaoComputador > 21) {
            vencedor = "Usuario";
         } else if (pontuacaoUsuario === pontuacaoComputador) {
            vencedor = "empate";
         }
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}\nO ${vencedor} ganhou!`)
      }
   
      // Alert com informacoes
      let numeroCartasUsuario = 2;
      let numeroCartasComputador = 2;
      let pararDeSortear = false;
   
      while (pararDeSortear === false) {
         if (confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${computador[0].texto}.\nDeseja comprar mais uma carta?`)) {
            usuario.push(comprarCarta());
            cartasUsuario.push(usuario[numeroCartasUsuario].texto);
            pontuacaoUsuario += usuario[numeroCartasUsuario].valor;
            numeroCartasUsuario++;
            if (pontuacaoUsuario > 21) {
               pararDeSortear = true;
            }
         } else {
            pararDeSortear = true;
         }
      }
      
      if (pontuacaoUsuario <= 21) {
         while (pontuacaoComputador < pontuacaoUsuario) {
            computador.push(comprarCarta());
            cartasComputador.push(computador[numeroCartasComputador].texto);
            pontuacaoComputador += computador[numeroCartasComputador].valor;
            numeroCartasComputador++;
         }
      }
      finalizaJogo();
} else {
   console.log("O jogo acabou.");
}