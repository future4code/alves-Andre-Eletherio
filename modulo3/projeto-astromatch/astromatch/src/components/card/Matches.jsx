import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from "styled-components";
import CardMatches from './CardMatches';

const CardLayout = styled.section`
    height: 720px;
    width: 400px;
    max-height: 100vh;
    max-width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    color: #fff;

    .noMat {
        font-size: 40px;
        position: relative;
        bottom: -100px;
    }

    /* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

export function Matches() {
    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:andre-eletherio-alves/matches"
        ).then((res) => setMatchList(res.data.matches)).catch((err) => console.log(err.response))
    }

    console.log(matchList)

    const matches = matchList.map((person) => <CardMatches person={person} />)

    return (
        <CardLayout>
            {matches}
        </CardLayout>
    )
}
