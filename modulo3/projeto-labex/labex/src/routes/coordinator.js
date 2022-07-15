<<<<<<< HEAD
export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
=======
export const goToAdminHomePage = (navigate, logged) => {
    logged ? navigate("/admin/trips/list") : navigate("/login")
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53
}

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}