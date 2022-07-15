import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1f1f1f;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 720px;
    max-height: 100vh;
    margin-left: 5px;
    gap: 5px;

    button {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        cursor: pointer;
        background-color: transparent;
        font-weight: 700;
        transition: transform .1s;
        color: #fff;
        border-color: #fff;
        &:hover {
        transform: scale(1.1);
    }
    }
`;