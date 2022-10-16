import { choosePicture } from "../../hoocks/choosePicture";
import { LogoPizza, Middle, Minus, Name, Plus, Price, Qnt, Right, StyleCart } from "./style";

export function CardCart({ item, addToCart }) {
    const img = choosePicture(item?.name);

    return (
        <StyleCart>
            <LogoPizza src={img} />
            <Middle>
                <Name>{item?.name}</Name>
                <Price>R${(item?.price * item?.quantity).toFixed(2)}</Price>
            </Middle>
            <Right>
                <Minus onClick={()=> addToCart(item, "minus")}>-</Minus>
                <Qnt>{item?.quantity}</Qnt>
                <Plus onClick={()=> addToCart(item, "plus")}>+</Plus>
            </Right>
        </StyleCart>
    )
}