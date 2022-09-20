// const day = 10
// const month = 10
// const year = 2000

// const dayN = 20
// const monthN = 11
// const yearN = 2022


// function opa(day, month, year, dayN, monthN, yearN) {
//     if (yearN - year < 18) {
//         return "User age must be 18+"
//     } else if (yearN - year === 18) {
//         if (monthN - month < 0) {
//             return "User age must be 18+"
//         } else if (monthN - month === 0) {
//             if (dayN - day < 0) {
//                 return "User age must be 18+"
//             }
//         }
//     }
//     return "Maior"
// }
// console.log(opa(10, 11, 2004, 10, 10, 2022))



const opa = ['maria', 'josé']

const opaaa = opa.find((item)=> item == 'josé')

if (!opaaa) {
    console.log("opa")
} else {
    console.log("opaaa")
}