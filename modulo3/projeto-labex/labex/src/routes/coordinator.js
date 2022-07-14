export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
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
    // Discover how to pass by path when clicking item on list of trips, it has to appear the details of the selected one
}