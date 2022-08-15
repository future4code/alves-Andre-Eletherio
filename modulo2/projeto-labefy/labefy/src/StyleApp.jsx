import styled from "styled-components"

export const Page = styled.body`
    display: flex;
    background-color: green;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    flex-direction: column;
    font-family: 'Nunito', sans-serif;
`;

export const Header = styled.header`
    background-color: #0f0f0f;
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const H1Header = styled.h1`
    color: #fff;
    margin-left: 30px;
    font-size: 40px;
    font-weight: 900;
`;

export const H1 = styled.h1`
    font-size: 25px;
    font-weight: 900;
`;

export const Main = styled.main`
    display: flex;
    width: 100%;
`;

export const Nav = styled.nav`
    background-color: #0f0f0f;
    width: 200px;
    height: calc(100vh - 56px);
    color: #fff;
    list-style-type: none;
    padding: 0 10px;
`;

export const Section = styled.section`
    background-color: #121212;
    width: 100%;
`;

export const DetailAndAdd = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
`;

export const Detail = styled.div`
    justify-content: center;
`;

export const Add = styled.div`
    margin: 20px 200px 0 100px;
`;