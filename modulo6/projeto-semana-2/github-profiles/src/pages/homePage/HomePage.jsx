import { Button, Form, Name, StyleHome, Title, Top } from "./style";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { Card } from "../../components/card/Card"

export function HomePage() {
    const [username, setUsername] = useState("");
    const [response, setResponse] = useState({});

    const onChange = (e) => {
        setUsername(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(
            BASE_URL + "/users/" + username
        ).then((res) => setResponse(res.data));
    }
    
    return (
        <StyleHome id="a">
            <Top>
            {/* style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.69), rgba(0,0,0,0.69)), url(${guy})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#103188" }} */}
                <Title>
                    <h1 className="one">Busque pela carta</h1>
                    <h1 className="two">do usuário</h1>
                    <h1 className="tree">GitHub</h1>
                </Title>
                <section>
                    <Form onSubmit={onSubmit}>
                        <Name onChange={onChange} type="text" name="name" id="name" placeholder="Nome Usuário" autoComplete="off" />
                        <Button type="submit">Buscar</Button>
                    </Form>
                </section>
            {response.avatar_url && <Card id="card" res={response}/>}
            </Top>
        </StyleHome>
    )
}