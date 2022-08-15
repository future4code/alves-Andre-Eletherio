// Exercício 1
function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(20, 20, 20))


// Exercício 2
function imprimeTresCoresFavoritas(): void {
    const cor1: string = prompt("Insira sua primeira cor favorita")
    const cor2: string = prompt("Insira sua segunda cor favorita")
    const cor3: string = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }  


// Exercício 3
function checaAnoBissexto(ano: number): boolean {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }


// Exercício 4
function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero: number;
    let menorNumero: number;

    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }

    const diferenca: number = maiorNumero - menorNumero;

    return diferenca 
  }


// Exercício 5
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
    let idade: number = anoAtual - anoNascimento
    let tempoCarteira: number = anoAtual - anoEmissao

     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

       }else {
           return "error"
       }
   }


// Exercício 6
function exercicio6(num1: number, num2: number): void {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    num1 > num2 ? console.log(num1) : console.log(num2)
}

exercicio6(2, 3)


// Exercício 7
function exercicio7(dna: string): string{
    dna = dna.replace(/A/g, 'U')
    dna = dna.replace(/T/g, 'A')
    dna = dna.replace(/C/g, 'g')
    dna = dna.replace(/G/g, 'C')
    return dna.toUpperCase()
}

console.log(exercicio7("ATCG"))

// Exercício 8
function exercicio8(str: string): string {
    let reverse: string = '';
    for (let i = str.length - 1; i > -1; i--) {
        reverse += str[i]
    }
    return reverse;
}

console.log(exercicio8("Eae meu bom, tudo bem com voce?"))

// Exercício 9
function exercicio9(age: number, em:boolean, hours: number, period: string): boolean{
    return period === 'integral' && age >= 18 && em && hours > 40 || period === 'noturno' && age >= 18 && em && hours > 20
}

console.log(exercicio9(20, true, 22, 'integral'))