import styled from "styled-components"
import UpArrow from '../pages/FeedPage/img/upArrow.svg'
import DownArrow from '../pages/FeedPage/img/downArrow.svg'
import like from '../pages/FeedPage/img/like.png'
import liked from '../pages/FeedPage/img/liked.png'
import Chat from '../pages/FeedPage/img/chat.svg'
import { goToPostPage } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from "../constants/BASE_URL"

const Section = styled.section`
  width: 85%;
  background-color: gray;
  padding: 9px 10px;

  background: #FBFBFB;
  border: 1px solid #E0E0E0;
  border-radius: 12px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    
    color: #6F6F6F;
  }

  p {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin: 18px 0;
    overflow-wrap: break-word ;
  }
`;

const BottomSection = styled.section`
    width: 100%;
    height: 28px;
    /* background-color: green; */
    display: flex;
    align-items: center;
    gap: 11px;

    p{
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 9.5px;
        line-height: 12px;
        color: #6F6F6F;
      }

    .like {
      width: 98px;
      height: 100%;
      border: 1px solid #E0E0E0;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px;

      img {
        width: 13.94px;
      }
    }

    .chat {
      border: 1px solid #E0E0E0;
      border-radius: 12px;
      height: 100%;
      width: 65px;
      padding: 0 12px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`;

export function Post(props) {

  const navigate = useNavigate()

  return (
    <Section>
      <h1 onClick={()=> goToPostPage(navigate, props.post.id, props.page, props.size)}>Enviado por: {props.post.username}</h1>
      <p onClick={()=> goToPostPage(navigate, props.post.id, props.page, props.size)}>{props.post.body}</p>
      <BottomSection>
        <div className="like">
          <img src={UpArrow} onClick={() => props.createPostVote(props.post.id)} />
          {/* <p onClick={upArrowClicked ? () => deletePostVote(props.post.id) : () => createPostVote(props.post.id)}>{upArrowClicked ? "b" : "a"}</p> */}
          <p>{props.post.voteSum === null ? 0 : props.post.voteSum}</p>
          <img src={DownArrow} onClick={() => props.changePostVote(props.post.id)} />
        </div>
        <div className="chat" onClick={()=> goToPostPage(navigate, props.post.id, props.page, props.size)}>
          <img src={Chat} />
          <p>{props.post.commentCount === null ? 0 : props.post.commentCount}</p>
        </div>
      </BottomSection>
    </Section>
  )
}
