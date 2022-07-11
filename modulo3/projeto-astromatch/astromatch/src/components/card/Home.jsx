import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardLayout = styled.section`
    height: 720px;
    width: 400px;
    max-height: 100vh;
    max-width: 100%;
    display: grid;
    grid-template-rows: 85% 15%;

    .middle {
      height: 40%;
      width: 100%;
      background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
      display: flex;
      align-items: flex-end;
    }

    .card2 {
      grid-row: 1/2;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 130%;
      color: #fff;

      .text {
        padding: 3px 10px;
      }

      span {
        font-size: 80%;
      }
    }

    .card3 {
      grid-row: 2/3;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .dislike {
      background-color: transparent;
      font-size: 250%;
      border: 3px solid red;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform .1s;

    &:hover {
      transform: scale(1.2);
    }
    }

    .like {
      background-color: transparent;
      font-size: 300%;
      border: 3px solid green;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      color: green;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform .1s; 

      &:hover {
      transform: scale(1.2);
    }
    }
`;

const SectionErro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const P = styled.p`
  color: #fff;
`;

const Button = styled.button`
      height: 60px;
      width: 60px;
      border-radius: 50%;
      cursor: pointer;
      background-color: transparent;
      font-weight: 700;
      transition: transform .1s;
      color: #fff;
      border-color: #fff;
      &:hover {
      transform: scale(1.1);
  }
`;

export function Home(props) {
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [age, setAge] = useState(0)
  const [id, setId] = useState(0)

  useEffect(() => {
    getNewProfile()
  }, [])

  const getNewProfile = () => {
    axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:andre-eletherio-alves/person"
    ).then((res) => {
      setPhoto(res.data.profile.photo)
      setName(res.data.profile.name)
      setBio(res.data.profile.bio)
      setAge(res.data.profile.age)
      setId(res.data.profile.id)
    }).catch((err) => setPhoto(''))
  }

  const choosePerson = (choice) => {
    axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:andre-eletherio-alves/choose-person",
      {
        "id": id,
        "choice": choice
      }
    ).then((res) => console.log(res)).catch((err) => console.log(err.response))
    getNewProfile()
  }

  const resetAll = () => {
    axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:andre-eletherio-alves/clear"
    ).then((res) => {
      console.log(res)
      getNewProfile()
    }).catch((err) => console.log(err.response))
  }

  return (
    photo ? <CardLayout>
      <div className="card2" style={{ backgroundImage: "url(" + photo + ")" }}>
        <div className="middle">
          {photo &&
            <div className="text">
              <h1>{name}, <span>{age}</span></h1>
              <p>{bio}</p>
            </div>
          }
        </div>
      </div>
      <div className="card3">
        <button onClick={() => choosePerson(false)} className="dislike">X</button>
        <button onClick={() => choosePerson(true)} className="like">♡</button>
      </div>
    </CardLayout> : <SectionErro>
      <P>Sem mais pessoas</P>
      <Button onClick={resetAll}>Reset</Button>
    </SectionErro>
  )
}
