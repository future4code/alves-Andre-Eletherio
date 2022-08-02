import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 800px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Welcome = styled.h1`
    position: absolute;
    height: 86px;
    top: 8.53%;
    width: 85%;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 43px;

    color: #373737;
`;

export const Inputs = styled.section`
    width: 85%;
    position: absolute;
    top: 38.76%;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
    }

    input {
        width: 100%;
        height: 60px;
        padding: 20px 16px;
        font-size: 16px;
        border: 1px solid #D5D8DE;
        border-radius: 4px;
    }
`;

export const Contracts = styled.p`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    width: 100%;

    color: #000000;

    span {
        color: #4088CB;
    }
`;

export const Register = styled.button`
    width: 85%;
    max-width: 365px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;

    position: absolute;
    height: 51px;
    top: 83.02%;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    border-radius: 27px;
`;

export const Check = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        width: 100%;
    }
`;

export const Bottom = styled.section`
    width: 85%;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 66.95%;
    gap: 17px;
`;