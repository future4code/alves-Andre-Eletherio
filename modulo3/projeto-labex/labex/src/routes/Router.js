import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/admin/trips/list" element={<AdminHomePage />} />
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/trips/create" element={<CreateTripPage />} />
                    <Route path="/tripDetails" element={<TripDetailsPage />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
