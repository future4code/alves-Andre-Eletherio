import { Id, Li, OrderCard, OrderStyle, OrderSuc, Resume, Total, Ul } from "./style";

export function OrderAlert({ order, setShowAlert }) {

    const pizzas = order?.pizzas?.map((item) => <Li><p>{item.name}</p> <p>R${item.price.toFixed(2)}</p> x{item.quantity}</Li>)
    console.log(order)

    return (
        <OrderStyle onClick={()=> setShowAlert(false)}>
            {order?
            <OrderCard>
            <div>
                <OrderSuc>PEDIDO REALIZADO</OrderSuc>
                <Resume>Resumo do pedido</Resume>
            </div>
            <div>
                <Id><strong>Id:</strong> {order?.id}</Id>
                <Ul>
                    <strong>Pizzas:</strong>
                    {pizzas}
                </Ul>
            </div>
            <Total>Total: R${order?.total?.toFixed(2)}</Total>
        </OrderCard>:
        <OrderCard>
            <p>Carregando...</p>
        </OrderCard>
        }
        </OrderStyle>
    )
}