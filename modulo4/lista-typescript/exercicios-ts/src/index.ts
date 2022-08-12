// Exercicio 1
// function exercicio1(username: string, date: string): string {
//     let arrayDate: string[] = date.split("/", 3)
//     let month: string;
//     switch (arrayDate[1]) {
//         case "01":
//             month = "Janeiro"
//             break
//         case "02":
//             month = "Fevereiro"
//             break
//         case "03":
//             month = "Março"
//             break
//         case "04":
//             month = "Abril"
//             break
//         case "05":
//             month = "Maio"
//             break
//         case "06":
//             month = "Junho"
//             break
//         case "07":
//             month = "Julho"
//             break
//         case "08":
//             month = "Agosto"
//             break
//         case "09":
//             month = "Setembro"
//             break
//         case "10":
//             month = "Outubro"
//             break
//         case "11":
//             month = "Novembro"
//             break
//         case "12":
//             month = "Dezembro"
//             break
//     }
//     return `Olá me chamo ${username}, nasci no dia ${arrayDate[0]} do mês de ${month} do ano de ${arrayDate[2]}`
// }

// Exerciio 2
// function exercicio2(param: any): any{
//     return typeof(param)
// }

// console.log(exercicio2(2))

// Exercicio 3
// enum GENERO {
//     ACAO = "ação",
//     DRAMA = "drama",
//     COMEDIA = "comédia",
//     ROMANCE = "romance",
//     TERROR = "terror"
// }
// type Movie = {
//     name: string,
//     year: number,
//     gender: GENERO,
//     points?: number
// }

// function exercicio3(name: string, year: number, gender: GENERO, points?: number): Movie {
//     let x: Movie;
//     if (points) {
//         x = {
//             name: name,
//             year: year,
//             gender: gender,
//             points: points
//         }
//     } else {
//         x = {
//             name: name,
//             year: year,
//             gender: gender,
//         }
//     }

//     return x
// }

// console.log(exercicio3("Duna", 2021, GENERO.ACAO, 2000))

// Exercicio 4
enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type Person = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean
}

const x: Person[] = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function exercicio3(array: Person[]): Person[]{
    return array.filter((item)=> item.setor === SETORES.MARKETING && item.presencial === true)
}

console.log(exercicio3(x))