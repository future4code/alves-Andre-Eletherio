import React, { useEffect, useState } from 'react'
import { Screen } from './Style'
import Header from '../../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { Post } from '../../components/Post'

import styled from "styled-components"
import UpArrow from '../FeedPage/img/upArrow.svg'
import DownArrow from '../FeedPage/img/downArrow.svg'
import Chat from '../FeedPage/img/chat.svg'
import { goToLoginPage } from '../../routes/Coordinator'
import { useForm } from '../../hooks/useForm'

const Port = styled.section`
  width: 85%;
  background-color: gray;
  padding: 9px 10px;

  background: #FBFBFB;
  border: 1px solid #E0E0E0;
  border-radius: 12px;

  display: flex;
  flex-direction: column;

  margin-top: 28px;

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

const TextArea = styled.textarea`
    height: 131px;
    width: 85%;
    padding: 13px 16px;
    margin-top: 12px;

    background: #EDEDED;
    border-radius: 12px;
    border: none;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: #6F6F6F;
`;

const Button = styled.button`
    height: 47px;
    width: 85%;
    margin-top: 8px;

    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    border: none;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;
`;

const Hr = styled.hr`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  height: 1px;
  border: none;
  width: 85%;
  margin-top: 16px;
  margin-bottom: 36px;
`;

const CommentSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
`;


export default function PostPage() {
  const [posts, setPosts] = useState([])
  const [showPost, setShowPost] = useState({})
  const [reload, setReload] = useState(false)
  const [comments, setComments] = useState([])

  const pathParams = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getPosts()
    getComments()
  }, [])

  useEffect(() => {
    setShowPost(posts.filter((item) => (item.id === pathParams.id)))
    commentList()
  }, [reload])

  const getComments = () => {
    axios.get(
      BASE_URL + "/posts/" + pathParams.id + "/comments", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => setComments(res.data))
  }

  //Parei vendo a lógica para exibir os comentários. Se vou ter que fazer um state e dar push, talvez.

  const getPosts = () => {
    axios.get(
      BASE_URL + "/posts", {
      headers: {
        Authorization: localStorage.getItem("token")
      },
      params: {
        page: pathParams.page,
        size: pathParams.size
      }
    }
    ).then((res) => {
      setPosts(res.data)
      setReload(!reload)
    })
  }

  const logout = () => {
    localStorage.clear()
    goToLoginPage(navigate)
  }

  const createComment = () => {
    axios.post(
      BASE_URL + "/posts/" + pathParams.id + "/comments", form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      clean()
      getComments()
    })
  }

  const { form, onChange, clean } = useForm({ "body": '' })

  const createCommentVote = (id) => {
    // event.stopPropagation();
    axios.post(
      BASE_URL + "/comments/" + id + "/votes", { "direction": 1 }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      setReload(!reload)
    })
  }

  const changeCommentVote = (id) => {
    // event.stopPropagation();
    axios.put(
      BASE_URL + "/comments/" + id + "/votes", { "direction": -1 }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      setReload(!reload)
    })
  }

  const commentList = () => {
    return comments.map((item, i) => <Post key={i} createPostVote={createCommentVote} changePostVote={changeCommentVote} post={item} />)
  }

  return (
    <Screen>
      <Header onClick={logout} login="Logout" left={"true"} />
      {showPost[0] &&
        <Port>
          <h1>Enviado por: {showPost[0].username}</h1>
          <p>{showPost[0].body}</p>
          <BottomSection>
            <div className="like">
              <img src={UpArrow} alt="" />
              <p>{showPost[0].voteSum === null ? 0 : showPost[0].voteSum}</p>
              <img src={DownArrow} alt="" />
            </div>
            <div className="chat">
              <img src={Chat} />
              <p>{showPost[0].commentCount === null ? 0 : showPost[0].commentCount}</p>
            </div>
          </BottomSection>
        </Port>
      }
      <TextArea placeholder='Adicionar comentario' name='body' onChange={onChange} value={form.body}></TextArea>
      <Button onClick={createComment}>Responder</Button>
      <Hr />
      <CommentSection>
        {commentList()}
      </CommentSection>
    </Screen>
  )
}
