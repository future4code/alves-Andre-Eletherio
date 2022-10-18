import calabresa from "../assets/img/calabresa.jpg"
import marguerita from "../assets/img/marguerita.jpg"
import pepperoni from "../assets/img/pepperoni.jpg"
import portuguesa from "../assets/img/portuguesa.jpg"
import quatro_queijos from "../assets/img/quatro_queijos.jpg"
import frango from "../assets/img/frango.jpg"
import brigadeiro from "../assets/img/brigadeiro.jpg"
import catuperoni from "../assets/img/catuperoni.jpg"
import cal_esp from "../assets/img/cal_esp.jpg"


export const choosePicture = (pizza) => {
    switch (pizza){
        case "Calabresa":
            return calabresa;
        case "Marguerita":
            return marguerita;
        case "Pepperoni":
            return pepperoni;
        case "Portuguesa":
            return portuguesa
        case "Quatro queijos":
            return quatro_queijos
        case "Frango com Catupiry":
            return frango;
        case "Brigadeiro":
            return brigadeiro;
        case "Catuperoni":
            return catuperoni;
        case "Calabresa Especial":
            return cal_esp;
        default:
            return calabresa;
    }
}