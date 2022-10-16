import styled from "styled-components";

export const StyleCart = styled.section`
    width: 333px;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 333px;
    min-height: 60px;
    background-color: #1c4579;
    color: #fff;
    font-weight: bold;
    font-size: 160%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 3px 10px rgba(0,0,0,.16);
`;

export const Items = styled.div`
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    align-items: center;
    padding: 14px 0;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Total = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fff;
    align-self: center;
    font-weight: bold;
    padding: 0 2.5%;
    box-shadow: 0px -1px 10px rgba(0,0,0,.16);
    display: flex;
    align-items: center;
`;

export const Buy = styled.div`
    width: 100%;
    height: 60px;
    background-color: #e31837;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 120%;
    box-shadow: 0px 0px 10px rgba(0,0,0,.1);
    cursor: pointer;
`;