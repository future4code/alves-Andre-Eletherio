// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
};

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((number) => number % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((number) => number % 2 === 0).map((number) => number ** 2);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const exercicio7 = {};

    let maiorNumero;
    let menorNumero;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else if (num2 > num1) {
        maiorNumero = num2;
        menorNumero = num1;
    } else {
        maiorNumero = num1;
        menorNumero = num1;
    }

    let divisivelPor = maiorNumero % menorNumero === 0;

    let diferenca = maiorNumero - menorNumero;

    exercicio7.maiorNumero = maiorNumero;
    exercicio7.maiorDivisivelPorMenor = divisivelPor;
    exercicio7.diferenca = diferenca;

    return exercicio7;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const nPrimeirosPares = [];
    for (let i = 0; i < n; i++) {
        nPrimeirosPares.push(i * 2);
    }
    return nPrimeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno";
    } else {
        return "Isósceles";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b);
    const novoArray = [array[array.length - 2], array[1]];
    return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoObjeto;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5);
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5));
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let valorGasto = 0;
    for (let i = 0; i < contas.length; i++) {
        valorGasto = 0;
        for (let j = 0; j < contas[i].compras.length; j++) {
            valorGasto += contas[i].compras[j];
        }
        contas[i].saldoTotal -= valorGasto;
        contas[i].compras = [];
    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}