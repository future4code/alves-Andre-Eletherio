import { Header } from "../../components/header/Header";
import pizza from "../../assets/img/pizza.jpg"
import { Body, Bottom, Img, Logo, Pizzas, Top } from "./style";
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { useEffect, useState } from "react";
import { CardPizza } from "../../components/cardPizza/CardPizza";
import { Cart } from "../../components/cart/Cart";
import github from "../../assets/img/github.png"
import linkedin from "../../assets/img/linkedin.png"
import instagram from "../../assets/img/instagram.png"

export function HomePage() {
    const [pizzas, setPizzas] = useState([]);
    const [updateCart, setUpdateCart] = useState(false);

    useEffect(() => {
        getPizzas();
    }, [])

    const getPizzas = () => {
        axios.get(
            BASE_URL + "/pizzas"
        ).then((res) => setPizzas(res.data));
    }

    const addToCart = (pizza, operation) => {
        const cart = !localStorage.getItem("cart") ? [] : JSON.parse(localStorage.getItem("cart"));
        let newCart = [...cart];
        if (cart.length === 0) {
            newCart = [...cart, { name: pizza.name, quantity: 1, price: pizza.price }];
        } else {
            const alreadyInList = cart.find((a) => a.name === pizza.name);

            if (alreadyInList) {
                operation === "plus" ? alreadyInList.quantity += 1 : alreadyInList.quantity -= 1;
                if (alreadyInList.quantity <= 0){
                    const index = newCart.findIndex(item => item === alreadyInList);
                    newCart.splice(index, 1)
                }
            } else {
                newCart = [...cart, { name: pizza.name, quantity: 1, price: pizza.price }];
            }
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        setUpdateCart(!updateCart);
    }

    const pizzaList = pizzas.map((pizza, i) => <CardPizza key={i} pizza={pizza} addToCart={addToCart}/>);

    return (
        <section>
            <Header />
            <Body>
                <Top>
                    <Logo src={pizza} alt="" onClick={getPizzas} />
                    <Cart updateCart={updateCart} addToCart={addToCart} />
                </Top>
                <Pizzas>
                    {pizzaList}
                </Pizzas>
            </Body>
            <Bottom>
                <a href="https://linkedin.com/in/andre-eletherio"><Img src={linkedin} alt="" /></a>
                <a href="https://github.com/andre-eletherio"><Img src={github}/></a>
                <a href="https://www.instagram.com/andre_eletherio/"><Img src={instagram}/></a>
            </Bottom>
        </section>
    )
}