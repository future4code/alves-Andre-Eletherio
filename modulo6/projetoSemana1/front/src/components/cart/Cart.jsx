import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import { CardCart } from "../cardCart/CardCart";
import { Buy, Header, Items, StyleCart, Total } from "./style";
import { OrderAlert } from "../../components/orderAlert/OrderAlert";

export function Cart({ updateCart, addToCart }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [update, setUpdate] = useState(false);
    const [orderRes, setOrderRes] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const getCartStorage = () => {
        const cartStorage = !localStorage.getItem("cart") ? [] : JSON.parse(localStorage.getItem("cart"));
        setCart(cartStorage)
    }

    useEffect(() => {
        getCartStorage()
    }, [updateCart, update])

    useEffect(()=> {
        getTotal()
    })

    const getTotal = () => {
        let totalPrice = 0;
        for (let pizza of cart) {
            totalPrice += pizza.price * pizza.quantity;
        }
        setTotal(totalPrice);
    }

    const order = () => {
        axios.post(
            BASE_URL + "/orders", {pizzas: cart}
        ).then((res)=> setOrderRes(res.data.order)
        ).then(localStorage.setItem("cart", [])
        ).then(setUpdate(!update)
        ).then(setShowAlert(!showAlert));
    }

    const items = cart?.map((item, i) => <CardCart key={i} item={item} addToCart={addToCart} />)

    return (
        <StyleCart>
            <Header>
                <p>CARRINHO</p>
            </Header>
            <Items>
                {items}
            </Items>
            <Total>
                <p>Total: R${total.toFixed(2)}</p>
            </Total>
            <Buy onClick={order}>
                <p>FINALIZAR PEDIDO</p>
            </Buy>
            {showAlert && <OrderAlert order={orderRes} setShowAlert={setShowAlert} ></OrderAlert>}
        </StyleCart>
    )
}