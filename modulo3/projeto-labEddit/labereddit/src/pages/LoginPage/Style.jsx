import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 750px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Top = styled.section`
    position: relative;
    top: 9.6%;

    display: flex;
    justify-content: center;

    width: 100%;
`;

export const Title = styled.h1`
    position: absolute;
    top: 95px;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    color: #373737;
`;

export const Des = styled.p`
    position: absolute;
    top: 142px;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
`;

// Middle


export const Middle = styled.section`
    position: absolute;
    top: 38.76%;
    width: 85%;
    position: absolute;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
        position: absolute;
    }

    input {
        height: 60px;
        padding: 20px 16px;
        font-size: 16px;
        border: 1px solid #D5D8DE;
        border-radius: 4px;
    }
`;

export const Bottom = styled.section`
    position: absolute;
    top: 58.63%;
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 18px;

    .continue {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;

        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        padding: 13px;
        border: none;
        border-radius: 27px;

        width: 100%;
        /* position: absolute; */
    }

    .line {
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        height: 1px;
        border: none;
    }
    
    .create {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #FE7E02;

        background-color: #fff;
        padding: 13px 0;
        border: 1px solid #FE7E02;
        border-radius: 27px;
        width: 100%;
    }
`;