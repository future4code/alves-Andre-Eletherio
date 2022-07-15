import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
<<<<<<< HEAD
import { PrivateRoutes } from './PrivateRoutes'
=======
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
<<<<<<< HEAD
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/admin/trips/list" element={<AdminHomePage />} />
                        <Route path="/admin/trips/create" element={<CreateTripPage />} />
                        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                    </Route>
=======
                    <Route path="/admin/trips/list" element={<AdminHomePage />} />
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/trips/create" element={<CreateTripPage />} />
                    <Route path="/tripDetails" element={<TripDetailsPage />} />
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53
            </Routes>
            </BrowserRouter>
        </div>
    )
}
