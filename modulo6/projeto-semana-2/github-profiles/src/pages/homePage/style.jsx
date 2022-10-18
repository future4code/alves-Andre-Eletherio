import styled from "styled-components"

export const StyleHome = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const Top = styled.section`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.36), rgba(0,0,0,0.46)), url(https://i.pinimg.com/originals/bc/f8/08/bcf8084b4ddd4084c907dbef2f31e50e.png) fixed;
    background-position: center;
    background-size: cover;
`;

export const Title = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    text-shadow: 0 3px 10px #000;

    .one, .two {
        font-size: 200%;
    }

    .tree {
        font-size: 260%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 66px;
`;

export const Name = styled.input`
    width: 80%;
    height: 46px;
    border-radius: 20px;
    font-size: 120%;
    text-align: center;
    border: none;
    font-weight: 600;
    box-shadow: 0px 3px 20px #000;
`;

export const Button = styled.button`
    border-radius: 20px;
    width: 120px;
    height: 40px;
    border: none;
    font-weight: 600;
    color: #fff;
    background-color: #103188;
    box-shadow: 0px 3px 20px #000;
`;