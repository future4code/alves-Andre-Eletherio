import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Symbol } from "./Symbol";

const Head = styled.section`
    height: 50px;
    width: 100%;
    background-color: #EDEDED;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    .true {
        position: absolute;
        left: 34px;
        width: 24px;
        height: 24px;
        /* background-color: green; */

      .oi {
        width: 100%;
        height: 1px;
        position: absolute;
        top: 10px;

        border: 2px solid #A3A3A3;
        transform: rotate(-45deg);
        background-color: #A3A3A3;
      }

      .opa {
        width: 100%;
        height: 1px;
        position: absolute;
        top: 10px;

        border: 2px solid #A3A3A3;
        transform: rotate(45deg);
        background-color: #A3A3A3;
    }
    }
`;

const Login = styled.p`
  position: absolute;
  height: 25px;
  right: 29px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  text-align: center;

  color: #4088CB;
`;

export default function Header(props) {

  const navigate = useNavigate()

  return (
    <Head>
      <div className={props.left} onClick={()=>navigate(-1)}>
        <div className="oi"></div>
        <div className="opa"></div>
      </div>
      <Symbol class={"small"} />
      <Login onClick={props.onClick}>{props.login}</Login>
    </Head>
  )
}
