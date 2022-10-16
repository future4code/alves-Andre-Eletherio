import styled from "styled-components";

export const StyleCart = styled.section`
    width: 95%;
    background-color: rgba(213, 215, 220, 0.16);
    border-radius: 10px;
    display: flex;
`;

export const LogoPizza = styled.img`
    width: 28%;
    border-radius: 10px 0 0 10px;
`;

export const Middle = styled.div`
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
`;

export const Name = styled.p`
    color: #e31837;
    font-size: 120%;
    font-weight: bold;
`;

export const Price = styled.p`
    color: #0078ae;
`;

export const Right = styled.div`
    width: 22%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Minus = styled.p`
    font-size: 160%;
    cursor: pointer;
`;

export const Qnt = styled.p`
    color: #0078ae;
    font-size: 120%;
`;

export const Plus = styled.p`
    cursor: pointer;
`;