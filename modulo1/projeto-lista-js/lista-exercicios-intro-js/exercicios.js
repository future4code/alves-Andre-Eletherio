// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura1 = +prompt("Altura: ");
  const largura1 = +prompt("Largura: ");
  const area1 = altura1 * largura1;
  
  console.log(area1);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual2 = +prompt("Ano atual: ");
  const anoNascimento2 = +prompt("Ano de nascimento: ");
  const idade2 = anoAtual2 - anoNascimento2;
  
  console.log(idade2);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc3 = peso / (altura * altura);

  return imc3;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome4 = prompt("Qual o seu nome? ");
  const idade4 = +prompt("Qual a sua idade? ");
  const email4 = prompt("Qual o seu e-mail? ");

  console.log(`Meu nome é ${nome4}, tenho ${idade4} anos, e o meu email é ${email4}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cores5 = []
  cores5.push(prompt("Cor: "));
  cores5.push(prompt("Cor: "));
  cores5.push(prompt("Cor: "));

  console.log(cores5);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const sup11 = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = sup11;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
   const anoAtual13 = +prompt("Ano atual: ");
   const anoNascimento13 = +prompt("Ano de Nascimento: ");
   const anoCarteira13 = +prompt("Ano de emissão da carteira de identidade: ");
   const idade13 = anoAtual13 - anoNascimento13;
   const carteiraIdade13 = anoAtual13 - anoCarteira13;

  // const condicao1 = idade <= 20;
  // const condicao2 = idade > 20 && idade <= 50;
  // const condicao3 = idade > 50;
  if (idade13 <= 20) {
    if (carteiraIdade13 >= 5) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
  if (idade13 > 20 && idade13 <= 50) {
    if (carteiraIdade13 >= 10) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
  if (idade13 > 50) {
    if (carteiraIdade13 >= 15) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  if (ano % 400 === 0) {
    return true;
  }
  if (ano % 4 === 0) {
    if (ano % 100 === 0) {
      if (ano % 400 !== 0) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maior18 = prompt("Você tem mais de 18 anos? ");
  const ensino = prompt("Você tem ensino médio completo? ");
  const disponibilidade = prompt("Você tem disponibilidade exclusiva durante os horários do curso? ");

  if (maior18 === "sim" && ensino === "sim" && disponibilidade === "sim") {
    console.log(true);
  }
  else {
    console.log(false);
  }
}