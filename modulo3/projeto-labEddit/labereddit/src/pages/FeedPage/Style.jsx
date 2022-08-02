import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    min-height: 667px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const Top = styled.section`
    display: flex;
    flex-direction: column;
    width: 85%;

    margin-top: 28px;

    button {
    height: 47px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    border: none;
    margin-top: 12px;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    }

    hr {
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        height: 1px;
        border: none;
        margin-top: 22px;
        margin-bottom: 26px;
    }
`;

export const Title = styled.input`
    height: 53px;
    background: #EDEDED;
    border-radius: 12px;
    border: none;

    padding: 6px 17px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    margin-bottom: 12px;
`;

export const TextArea = styled.textarea`
    height: 131px;
    background: #EDEDED;
    border-radius: 12px;
    border: none;

    padding: 14px 17px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

export const Bottom = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
`;