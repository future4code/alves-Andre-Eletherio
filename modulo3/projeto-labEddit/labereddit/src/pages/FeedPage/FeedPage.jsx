import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Screen, Top, Title, TextArea, Bottom } from './Style'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { useForm } from '../../hooks/useForm'
import { Post } from '../../components/Post'
import { goToLoginPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function FeedPage() {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)
  const [posts, setPosts] = useState([])
  const [reload, setReload] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(()=> {
    getPosts()
    postRender()
  }, [reload])

  const getPosts = () => {
    setIsLoading(true)
    axios.get(
      BASE_URL + "/posts", {
      headers: {
        Authorization: localStorage.getItem("token")
      },
      params: {
        page: page,
        size: size
      }
    }
    ).then((res) => {
      setPosts(res.data)
      setIsLoading(false)
    })
  }

  const { form, onChange, clean } = useForm({ "title": "", "body": "" })

  const createPost = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/posts", form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      setReload(!reload)
      clean()
    })
  }

  const logout = () => {
    localStorage.clear()
    goToLoginPage(navigate)
  }

  const createPostVote = (id) => {
    // event.stopPropagation();
    axios.post(
      BASE_URL + "/posts/" + id + "/votes", { "direction": 1 }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      setReload(!reload)
    })
  }

  const deletePostVote = (id) => {
    // event.stopPropagation();
    axios.delete(
      BASE_URL + "/posts/" + id + "/votes", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      setReload(!reload)
    })
  }

  const changePostVote = (id) => {
    // event.stopPropagation();
    axios.put(
      BASE_URL + "/posts/" + id + "/votes", { "direction": -1 }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    ).then((res) => {
      setReload(!reload)
    })
  }

  const postRender = () => {
    return posts.map((post, i) => <Post key={i} createPostVote={createPostVote} deletePostVote={deletePostVote} changePostVote={changePostVote} page={page} size={size} post={post} />)
  }

  return (
    <Screen>
      <Header onClick={logout} login="Logout" />
      <form onSubmit={createPost}>
        <Top>
          <Title required type="text" name="title" placeholder='Título do post' onChange={onChange} value={form.title} />
          <TextArea required placeholder='Escreva seu post...' onChange={onChange} name="body" value={form.body} cols="30" rows="6"></TextArea>
          <button>Postar</button>
          <hr />
        </Top>
      </form>
        <Bottom>
          {postRender()}
        </Bottom>
    </Screen>
  )
}
