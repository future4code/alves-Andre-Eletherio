import styled from "styled-components";

export const OrderStyle = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OrderCard = styled.div`
    width: 400px;
    height: 600px;
    background-color: #fdf5ab;
    padding: 20px;
    display: grid;
    grid-template-rows: 105px auto 100px;
    border-radius: 10px;
`;

export const OrderSuc = styled.h1`
    font-weight: bold;
    font-size: 200%;
    text-align: center;
`;

export const Resume = styled.p`
    margin-top: 30px;
    font-size: 150%;
`;

export const Id = styled.p`
    margin-top: 40px;
`;

export const Ul = styled.ul`
    margin-top: 30px;
`;

export const Li = styled.li`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 60% 30% 20%;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Total = styled.h1`
    font-size: 160%;
    position: relative;
    bottom: 0;
    margin-top: 26px;
`;