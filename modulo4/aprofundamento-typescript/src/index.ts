// // Exercicio 1
// // a)
// let minhaString: string = "opa"
// // b)
// let meuNumero: number | string = 10
// // c) d)
// enum colors{
//     VERMELHO = "vermelho",
//     LARANJA = "laranja",
//     AMARELO = "amarelo",
//     VERDE = "verde",
//     AZUL = "azul",
//     AZULESCURO = "azul escuro",
//     VIOLETA = "violeta"
// }

// let pessoa: object = {
//     nome: "Marcia",
//     idade: 40,
//     corFavorita: colors.VERDE
// }

// type Person = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// let rodrigo: Person = {
//     nome: "Rodrigo",
//     idade: 23,
//     corFavorita: colors.VIOLETA
// }

// let carlos: Person = {
//     nome: "Carlos",
//     idade: 25,
//     corFavorita: colors.AZUL
// }

// let jonas: Person = {
//     nome: "Jonas",
//     idade: 22,
//     corFavorita: colors.VERMELHO
// }





// Exercicio 2
// a) b)
function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c)
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {obterEstatisticas: object}
}






// Exercicio 3
// a)
type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  // b)
  function buscarPostsPorAutor(posts: Post[], autorInformado: string): Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }