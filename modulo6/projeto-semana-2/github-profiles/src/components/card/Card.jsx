import { Bio, CardImg, Email, Id, ImgContainer, Name, StyleCard, UserPhoto } from "./style";
import card from "../../assets/img/card.jpg"

export function Card({ res }) {

    return (
        <StyleCard>
            {res &&
                <ImgContainer>
                    <CardImg src={card} alt="" />
                    <UserPhoto src={res?.avatar_url} alt="" />
                    <Name>{res.name}</Name>
                    <Email>{`[${res.type}]`}</Email>
                    <Bio>{res.bio}</Bio>
                    <Id>{res.id}</Id>
                </ImgContainer>
            }
        </StyleCard>
    )
}