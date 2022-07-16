import styled from "styled-components";

export const ScreenHome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 56px);

    .decide {
        display: flex;
    }
`;

export const ScrrenListTrips = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 56px);
`;

// Header

export const HeaderStyle = styled.section`
    height: 56px;
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
`;