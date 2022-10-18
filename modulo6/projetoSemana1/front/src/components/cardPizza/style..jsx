import styled from "styled-components";

export const CardStyle = styled.section`
    width: 290px;
    margin-top: 20px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Button = styled.button`
    width: 100%;
    height: 38px;
    background-color: #e31837;
    border-radius: 3px;
    border: none;
    color: #fff;
    font-weight: bold;
    transition-duration: 0.7s;
    margin-top: 3px;
    :hover{
        background-color: #aa1229;
        cursor: pointer;
    }
`;

export const NameAndPrice = styled.div`
    width: 100%;
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }
`;

export const Text = styled.h1`
    color: #0078ae;
    font-size: 86%;
    :hover {
        color: #e31837;
    }
`;

export const Ingredients = styled.div`
    display: flex;
    gap: 6px;
`;

export const Ingredient = styled.p`
    font-size: 66%;
`;