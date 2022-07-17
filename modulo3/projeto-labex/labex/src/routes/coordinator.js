export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate, trip) => {
    navigate(`/trips/application/${trip.name}/${trip.id}`)
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToHomePage = (navigate) => {
    navigate("/")
}