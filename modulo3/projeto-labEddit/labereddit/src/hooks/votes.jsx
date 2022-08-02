import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"

export const createPostVote = (id) => {
    // event.stopPropagation();
    axios.post(
        BASE_URL + "/posts/" + id + "/votes", {"direction": 1}, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((res)=>console.log(res)).catch((err)=>console.log(err))
}

export const changePostVote = (id) => {
    // event.stopPropagation();
    axios.put(
        BASE_URL + "/posts/" + id + "/votes", {"direction": -1}, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((res)=>console.log(res)).catch((err)=>console.log(err))
}

export const deletePostVote = (id) => {
    // event.stopPropagation();
    axios.delete(
        BASE_URL + "/posts/" + id + "/votes", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((res)=>console.log(res)).catch((err)=>console.log(err))
}