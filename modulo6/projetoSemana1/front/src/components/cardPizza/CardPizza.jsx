import { Button, CardStyle, Img, Ingredient, Ingredients, Text, NameAndPrice } from "./style.";
import { choosePicture } from "../../hoocks/choosePicture";

export function CardPizza({ pizza, addToCart }) {
    
    const ingredients = pizza.ingredients.map((item, i) => <Ingredient key={i}>{item}</Ingredient>);
    const picture = choosePicture(pizza.name);

    return (
        <CardStyle>
            <Img src={picture} alt="Imagem da pizza" />
            <Button onClick={() => addToCart(pizza, "plus")}>ADICIONAR PIZZA</Button>
            <NameAndPrice>
                <Text>{pizza.name}</Text>
                <Text>R${pizza.price.toFixed(2)}</Text>
            </NameAndPrice>
            <Ingredients>
                {ingredients}
            </Ingredients>
        </CardStyle>
    )
}