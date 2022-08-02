export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToRegistrationPage = (navigate) => {
    navigate("/registration")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToPostPage = (navigate, id, page, size) => {
    navigate("/post/" + id +"/" + page + "/" + size)
}