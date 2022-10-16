import styled from "styled-components";

export const HeaderStyle = styled.section`
    width: 100%;
    height: 76px;
    background-color: #006491;
    padding: 0 15px;
    box-shadow: 0 0 .8125rem rgba(0,0,0,.75);
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: 930px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
    margin: 0 auto;
`;

export const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 120%;
    text-transform: uppercase;
    font-style: bold;

    h1 {
        cursor: pointer;
    }
`;

export const Dice = styled.img`
    height: 60%;
    cursor: pointer;
`;

export const Cart = styled.img`
    height: 46%;
    cursor: pointer;
`;