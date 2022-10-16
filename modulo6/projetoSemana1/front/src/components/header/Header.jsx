import { Cart, Dice, HeaderStyle, Logo, Nav } from "./styled";
import dice from "../../assets/img/dice.png"
import cart from "../../assets/img/cart.png"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/Coordinator";

export function Header() {

    const navigate = useNavigate()

    return (
        <HeaderStyle>
            <Nav>
                <Logo onClick={() => goToHomePage(navigate)}>
                    <Dice src={dice} alt="logo dados" />
                    <h1>Dados</h1>
                </Logo>
            </Nav>
        </HeaderStyle>
    )
}