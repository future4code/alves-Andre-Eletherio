// Exercicio 5
// type Patient = {
//     nome: string,
//     idade: number,
//     dataDaConsulta: string
// }

// const arrayConsultas: Patient[] = [
//     { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
// ]

// function orderAppointment(appointentArray: Patient[]): void  {
//     console.table(appointentArray.sort((a, b)=>a.nome.localeCompare(b.nome)))
// }

// orderAppointment(arrayConsultas)







// Exercicio 6

function idade(y: number, s?: string): string{

    // validar entradas
    if (y < 0) {
        return "Insira um ano válido"
    } else if (s !== "AC" && s !== "DC" && s !== undefined) {
        return "Insira uma sigla válida"
    }

    if (s === 'AC'){
        if (y > 4000) {
            return "Pré-histórico"
        } else {
            return 'Idade Antiga'
        }
    } else {
        if (y < 476) {
            return 'Idade Antiga'
        } else if (y >= 476 && y < 1473) {
            return "Idade Média"
        } else if (y >= 1473 && y < 1789) {
            return "Idade Moderna"
        } else {
            return "Idade Contemporânea"
        }
    }    
}

console.log(idade(1400, 'AC'))


// Exercicio 7
// type Product = {
//     nome: string,
//     preco: number,
//     classificacao: string,
//     precoComDesconto?: number
// }

// const regata: Product = {
//     nome: "monitor",
//     preco: 1000,
//     classificacao: "verão"
// }

// const gorro: Product = {
//     nome: "monitor",
//     preco: 1000,
//     classificacao: "inverno"
// }

// const sunga: Product = {
//     nome: "monitor",
//     preco: 1000,
//     classificacao: "banho"
// }

// const cueca: Product = {
//     nome: "monitor",
//     preco: 1000,
//     classificacao: "íntimas"
// }

// function desconto(arrayProducts: Product[]): Product[] {
//     let x: number = 0
//     arrayProducts.map((item)=>{
//         switch(item.classificacao){
//             case "verão":
//                 x = 0.95
//                 break
//             case "inverno":
//                 x = 0.9;
//                 break
//             case "banho":
//                 x = 0.96
//                 break
//             case "íntimas":
//                 x = 0.93
//                 break
//         }
//         item.precoComDesconto = item.preco * x
//     })
//     return arrayProducts
// }

// console.table(desconto([regata, gorro, sunga, cueca]))






// Exercicio 8
// type Prato = {
//     nome: string,
//     custo: number,
//     valorDeVenda: number,
//     ingredientes: string[]
// }

// type Venda = {
//     nomeDoPrato: string,
//     nomeDoCliente: string
// }

// // a)
// const pizza: Prato = {
//     nome: 'Pizza',
//     custo: 50,
//     valorDeVenda: 80,
//     ingredientes: ['massa', 'queijo']
// }

// const miojo: Prato = {
//     nome: 'Miojo',
//     custo: 20,
//     valorDeVenda: 50,
//     ingredientes: ['macarrão']
// }

// let produtos: Prato[] = [pizza, miojo];

// function cadastro(produto: Prato): void{
//     produtos.push(produto)
// }

// cadastro(pizza)
// console.table(produtos)
// b)
// function procura(nome: string): number {
//     let produtoEncontrado: Prato[] = produtos.filter((item)=> item.nome === nome)
//     return produtoEncontrado[0].valorDeVenda
// }
// console.log(procura("Miojo"))

// // c)
// let vendas: Prato[] = [pizza, miojo]
// function venda(produto: Prato): void{
//     vendas.push(produto)
// }
// console.log(vendas)

// d)
// function lucro(itemsVendidos: Prato[]): number {
//     let custoProducao: number = 0;
//     let valorVenda: number = 0;

//     itemsVendidos.map((item)=>{
//         custoProducao += item.custo;
//         valorVenda += item.valorDeVenda;
//     })

//     return valorVenda - custoProducao
// }

// console.log(lucro(vendas))
