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
// enum SETORES {
//     MARKETING = "marketing",
//     VENDAS = "vendas",
//     FINANCEIRO = "financeiro",
// }

// type Person = {
//     nome: string,
//     salário: number,
//     setor: SETORES,
//     presencial: boolean
// }

// const x: Person[] = [
// 	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
// ]

// function exercicio3(array: Person[]): Person[]{
//     return array.filter((item)=> item.setor === SETORES.MARKETING && item.presencial === true)
// }

// console.log(exercicio3(x))

// Exercicio 5
// enum OFICCE{
//     USER = "user",
//     ADMIN = "admin"
// }

// type Person = {
//     name: string,
//     email: string,
//     role: OFICCE
// }

// const list: Person[] = [
// 	{name: "Rogério", email: "roger@email.com", role: OFICCE.USER},
// 	{name: "Ademir", email: "ademir@email.com", role: OFICCE.ADMIN},
// 	{name: "Aline", email: "aline@email.com", role: OFICCE.USER},
// 	{name: "Jéssica", email: "jessica@email.com", role: OFICCE.USER},  
// 	{name: "Adilson", email: "adilson@email.com", role: OFICCE.USER},  
// 	{name: "Carina", email: "carina@email.com", role: OFICCE.ADMIN}      
// ] 

// function exercicio5(list: Person[]): string[]{
//     let x: string[] = []
//     list.map((item)=>item.role === OFICCE.ADMIN && x.push(item.email))
//     return x
// }

// console.log(exercicio5(list))

// Exerciico 6
// type Client = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: number[]
// }

// let lista: Client[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// function exercicio6(list: Client[]): Client[] {
//     let debitoTotal: number = 0
//     return list.filter((item) => {
//         item.debitos.map((deb) => debitoTotal += deb)
//         item.saldoTotal -= debitoTotal
//         item.debitos = [0];
//         debitoTotal = 0
//         return item.saldoTotal < 0 && console.log(item)
//     })
// }

// console.table(exercicio6(lista))



// Exercicio 7
// const ajustaPreco = (preco: number): string => {
//     const valorAjustado: string = preco.toFixed(2).replace('.', ',')
//     return "R$ " + valorAjustado
// }

// type Product = {
//     nome: string,
//     quantidade: number,
//     valorUnitario: string | number
// }

// const list = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
// ]

// function exercicio8(list: Product[]) {
//     return list.map((item) => {
//         item.valorUnitario = ajustaPreco(item.valorUnitario as number)
//         return item
//     }).sort((a, b)=> a.quantidade - b.quantidade)
// }

// console.table(exercicio8(list))
// exercicio8(list)


// Exercicio 8
function exercicio8(nasc: string, id: string): boolean {
    let todayDay: number = new Date().getDate()
    let todayMonth: number = new Date().getUTCMonth() + 1
    let todayYear: number = new Date().getFullYear()

    let nascMM: string[] = nasc.split("/", 3)
    let nascDay: number = +nascMM[0]
    let nascMonth: number = +nascMM[1]
    let nascYear: number = +nascMM[2]

    let idMM: string[] = id.split("/", 3)
    let idDay: number = +idMM[0]
    let idMonth: number = +idMM[1]
    let idYear: number = +idMM[2]

    let personAge: number = getAge(todayDay, todayMonth, todayYear, nascDay, nascMonth, nascYear)
    let idAge: number = getAge(todayDay, todayMonth, todayYear, idDay, idMonth, idYear)
    console.log(idAge)

    let renew: boolean = false;

    if (personAge <= 20) {
        if (idAge >= 5) {
            renew = true
        }
    } else if (personAge > 20 && personAge <= 50) {
        if (idAge >= 10) {
            renew = true
        }
    } else {
        if (idAge >= 15) {
            renew = true
        }
    }

    return renew
}

function getAge(a: number, b: number, c: number, x: number, y: number, z: number): number{
    let age: number;
    if (b - y > 0) {
        age = c - z;
    } else if (b - y === 0) {
        if (a - x > -1) {
            age = c - z
        } else {
            age = c - z - 1
        }
    } else {
        age = c - z - 1
    }
    return age
}
exercicio8("15/08/2001", "15/08/2017")


// Exercicio 9
// function exercicio9(word: string): number{
//     let ana: number = word.length
//     let len: number = word.length;
//     //verificações
//     if (ana === 0) {
//         return 1
//     }

//     for (let i = len - 1; i > 0; i--) {
//         ana = ana * i
//     }
//     return ana
// }
// console.log(exercicio9("opa"))


// Exercicio 10
// function exercicio10(n:string): boolean {
//     let cpf: string = n.replace(/\.|-/gm,'')
//     let sum: number = 0
//     let sum2: number = 0
//     let j: number = 10
//     let k: number = 11
//     let ver: boolean = false
//     let first: number = +cpf[0]
//     let check: number = 0

//     // verificações
//     if (cpf.length !== 11) {
//         return false
//     }

//     for (let i = 0; i < 11; i++){
//         if (first !== +cpf[i]){
//             check += 1
//         }
//     }
    
//     if (check === 0){
//         return false
//     }

//     for (let i = 0; i < 9; i++){
//         sum += +cpf[i] * j
//         j--
//     }
//     for (let i = 0; i < 10; i++){
//         sum2 += +cpf[i] * k
//         k--
//     }

//     let mod: number = sum  % 11
//     let sub: number = 11 - mod

//     let mod2: number = sum2 % 11
//     let sub2: number = 11 - mod2
    
//     if ((sub === +cpf[9] || sub > 10 && +cpf[9] === 0) && sub2 === +cpf[10] || sub > 10 && +cpf[10] === 0) {
//         ver = true
//     }
//     return ver
// }
// console.log(exercicio10("111.111.111-11"))



// Exercicio 11
// function exercicio11(normal: number): string {
//     let x: string = normal.toString()
//     let y: string = ''
//     let j: number = x.length;

//     for (let i = 0; i < x.length; i++) {
//         if (j === 4) {
//             switch (x[i]) {
//                 case "1":
//                     y += "M"
//                     break
//                 case "2":
//                     y += ("MM")
//                     break
//                 case "3":
//                     y += ("MMM")
//                     break
//             }
//             j = 3
//         } else if (j === 3) {
//             switch (x[i]) {
//                 case "1":
//                     y += ("C")
//                     break
//                 case "2":
//                     y += ("CC")
//                     break
//                 case "3":
//                     y += ("CCC")
//                     break
//                 case "4":
//                     y += ("CD")
//                     break
//                 case "5":
//                     y += ("D")
//                     break
//                 case "6":
//                     y += ("DC")
//                     break
//                 case "7":
//                     y += ("DCC")
//                     break
//                 case "8":
//                     y += ("DCCC")
//                     break
//                 case "9":
//                     y += ("CM")
//                     break
//             }
//             j = 2
//         } else if (j === 2) {
//             switch (x[i]) {
//                 case "1":
//                     y += ("X")
//                     break
//                 case "2":
//                     y += ("XX")
//                     break
//                 case "3":
//                     y += ("XXX")
//                     break
//                 case "4":
//                     y += ("XL")
//                     break
//                 case "5":
//                     y += ("L")
//                     break
//                 case "6":
//                     y += ("LX")
//                     break
//                 case "7":
//                     y += ("LXX")
//                     break
//                 case "8":
//                     y += ("LCCC")
//                     break
//                 case "9":
//                     y += ("XC")
//                     break
//             }
//             j = 1
//         } else if (j === 1) {
//             switch (x[i]) {
//                 case "1":
//                     y += ("I")
//                     break
//                 case "2":
//                     y += ("II")
//                     break
//                 case "3":
//                     y += ("III")
//                     break
//                 case "4":
//                     y += ("IV")
//                     break
//                 case "5":
//                     y += ("V")
//                     break
//                 case "6":
//                     y += ("VI")
//                     break
//                 case "7":
//                     y += ("VII")
//                     break
//                 case "8":
//                     y += ("VIII")
//                     break
//                 case "9":
//                     y += ("IV")
//                     break
//             }
//             j = 0
//         }
//     }
//     return y
// }

// console.log(exercicio11(874))