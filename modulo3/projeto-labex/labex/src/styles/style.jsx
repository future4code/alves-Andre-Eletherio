import styled from "styled-components";

// Screen
export const Screen = styled.section`
    display: grid;
    grid-template-rows: auto 1fr;
    background-image: linear-gradient(#00000016, #00000066);
`;

// Header
export const HeaderStyle = styled.section`
    height: 56px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    color: red;
    font-size: 150%;

    h1 {
        cursor: pointer;
        font-size: 140%;
    }

    button {
        padding: 4px;
        font-size: 70%;
        border-radius: 6px;
        margin-right: 10px;
        background-color: #eaeaea;
        border: none;
    }
`;

// Home Page
export const HomePageStyle = styled.section`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    min-height: calc(100vh - 56px);
    height: auto;
    padding: 30px;

    .title {
        font-size: 30px;
        margin-bottom: 40px;
    }

    .cardsSection {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        display: flex;
        max-width: 970px;
        margin: 0 auto;
    }
`;

// CardsHomePage
export const CardsHomePageStyle = styled.section`
    height: 200px;
    width: 310px;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 60px 1fr auto;
    border: 2px solid #c5c5c5;
    background-image: linear-gradient(#00000033, #00000025);
    color: #eaeaea;
    
    .title {
        height: 60px;
        text-align: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-row: 1/2;
        
        h1 {
            font-size: 90%;
            align-self: center;
            width: 310px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 10px;
            color: #f6f9ff;
        }
    }

    .body {
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;

        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 100%;
            width: 280px;
        }
        
    }

        .buttonDiv {
            grid-row: 3/4;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
        }

        button {
            padding: 6px;
            font-size: 107%;
            border-radius: 6px;
            margin-right: 10px;
            background-color: #f6f9ff;
            color: red;
            border: none;
        }
`;

// ApplicationFormPage
export const FormPageStyle = styled.section`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    min-height: calc(100vh - 56px);
    height: auto;
    padding: 30px;
    align-items: center;
    color: #f6f9ff;

    .card {
        background-color: transparent;
        height: 600px;
        width: 500px;
        padding: 20px;
        display: grid;
        grid-template-rows: 30% 1fr;
        border-radius: 20px;
        border: 1px solid #c5c5c5;

        h1 {
            font-size: 200%;
            align-self: center;
            justify-self: center;
            width: 450px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }

        .form {
            display: flex;
            flex-direction: column;
            width: 80%;
            align-items: center;
            justify-self: center;
            gap: 20px;

            input {
                width: 100%;
                padding: 7px;
                border-radius: 10px;
                border: 1px solid #c5c5c5;
                font-size: 106%;
            }

            button {
                background-color: #f6f9ff;
                color: red;
                padding: 5px;
                font-size: 150%;
                width: 40%;
                border-radius: 10px;
                margin-top: 24px;
            }

            button:hover {
                background-color: red;
                color: #000;
            }
        }
    }
`;


// Admin Home Page
export const AdminPageStyle = styled.section`
    min-height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: 65% 35%;
    padding: 30px 0 0 0;
`;

export const AdimHomePage = styled.section`
        justify-self: center;
        width: 500px;
        min-height: 600px;
        background-color: transparent;
        text-align: center;
        display: grid;
        grid-template-rows: 60px 1fr;
        border: 1px solid #c5c5c5;
        border-radius: 20px;
        margin-bottom: 20px;

        .title {
        font-size: 240%;
        height: 100%;

        h1 {
            margin-top: 14px;
            color: #f6f9ff;
        }
    }

    .cards {
        padding: 20px;
        color: #eaeaea;

        p {
            font-size: 110%;
        }
    }

    .createTrip {
        justify-self: center;
    }
`;

export const CardAdm = styled.section`
    display: flex;
    justify-content: space-between;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    height: 60px;
    margin-bottom: 10px;

    .click {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

        p {
            margin-left: 20px;
            width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: start;
        }
    }

    button {
        margin-right: 20px;
        background-color: #f6f9ff;
        color: red;
        font-size: 100%;
        border-radius: 10px;
        height: 60%;
        width: 80px;
        align-self: center;
    }
    
`;

export const CreateTrip = styled.section`
    width: 370px;
    background-color: transparent;
    height: 600px;
    text-align: center;
    display: grid;
    grid-template-rows: 60px 1fr;
    border: 1px solid #c5c5c5;
    border-radius: 20px;
    
    .title {
        font-size: 240%;
        height: 100%;
        color: #f6f9ff;

        h1 {
            margin-top: 14px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 20px;
        margin-top: 40px;
        align-items: center;

        input, select {
            width: 100%;
            padding: 7px;
            border-radius: 10px;
            border: 1px solid #c5c5c5;
            font-size: 106%;
        }

        button {
            background-color: #f6f9ff;
            color: red;
            padding: 5px;
            font-size: 150%;
            width: 50%;
            border-radius: 10px;
            margin-top: 24px;
        }
    }
`;

// Login
export const LoginStyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);

    .card {
        height: 500px;
        width: 400px;
        border: 1px solid #c5c5c5;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px;
        border-radius: 20px;

        h1 {
            font-size: 160%;
            margin-top: 40px;
            color: #f6f9ff;
        }

        .form {
            margin-top: 90px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            input {
                width: 100%;
                padding: 7px;
                border-radius: 10px;
                border: 1px solid #c5c5c5;
                font-size: 106%;
            }
        }

        button {
            padding: 10px 18px;
            font-size: 107%;
            border-radius: 6px;
            margin-right: 10px;
            background-color: #f6f9ff;
            color: red;
            border: none;
            margin-top: 80px;
            align-self: flex-end;
            transition: transform .2s;
            cursor: pointer;
            font-weight: 900;
        }

        button:hover{
            transform: scale(1.03);
            background-color: red;
            color: #000;
            border: 1px solid #000;
        }
    }
`;

// Trip Details
export const TripDetailsStyle = styled.section`
    min-height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    color: #c5c5c5;

    .choose {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }

    .buttonPerson {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .card {
        min-height: 500px;
        width: 700px;
        border: 1px solid #eaeaea;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 20px;

        h1 {
            color: #f6f9ff;
        }

        .title {
            font-size: 180%;
            text-align: center;
            margin-top: 20px;
            width: 650px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }

        .infos {
            margin-top: 30px;
            p {
                margin-top: 6px;
            }
        }

        .candidates {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100%;
            margin-top: 30px;

            .pendents, .approved {
                justify-self: center;
                text-align: center;

                h1 {
                    font-size: 110%;
                }
            }
        }
    }
`;