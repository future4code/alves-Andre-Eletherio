import styled from "styled-components"

const Card = styled.section`
    height: 15%;
    width: 95%;
    margin-top: 7px;
    background-color: #2f2f2f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 130%;
    border-radius: 20px;
    cursor: pointer;
    transition: transform .2s; 

    &:hover {
        background-color: #4b4b4b;
        transform: scale(1.03);
    }

    .myimg{
        height:80px;
        width:80px;
        object-fit:cover;
        border-radius:50%;
}
`;

export default function CardMatches(props) {
    return (
        <Card>
            <img className="myimg" src={props.person.photo} alt="" />
            <h1>{props.person.name}</h1>
        </Card>
    )
}
