import styled from "styled-components";

export const StyleCard = styled.section`
    width: 100%;
    height: 960px;
    margin-top: 0px;
    /* background-color: #103188; */
    /* background-image: linear-gradient(rgba(0,0,0,0.46), rgba(0,0,0,0.66)); */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -60px;
`;

export const ImgContainer = styled.section`
    width: 340px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`;

export const CardImg = styled.img`
    width: 340px;
    max-width: 600px;
`;

export const UserPhoto = styled.img`
    position: absolute;
    width: 262px;
    top: 321px;
`;

export const Name = styled.p`
    position: absolute;
    top: 260px;
    left: 26px;
    font-weight: 900;
    font-size: 120%;
`;

export const Email = styled.p`
    position: absolute;
    top: 607px;
    left: 26px;
    font-weight: 700;
    font-size: 80%;
    width: 83%;
    text-transform: uppercase;
`;
export const Bio = styled.p`
    position: absolute;
    top: 623px;
    left: 26px;
    font-weight: 400;
    font-size: 100%;
    width: 83%;
`;
export const Id = styled.p`
    position: absolute;
    top: 706px;
    left: 14px;
    font-weight: 900;
    font-size: 66%;
    width: 83%;
`;