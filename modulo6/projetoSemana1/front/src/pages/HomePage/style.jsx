import styled from "styled-components";

export const Body = styled.section`
    max-width: 930px;
    min-height: calc(100vh - 266px);
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 60px;
`;

export const Top = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 371px;
`;

export const Logo = styled.img`
    width: 60%;
    border-radius: 10px;
`;

export const Pizzas = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Bottom = styled.section`
    width: 100%;
    height: 100px;
    background-color: #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Img = styled.img`
    width: 46px;
`;