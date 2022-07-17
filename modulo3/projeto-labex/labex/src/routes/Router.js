import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
import { PrivateRoutes } from './PrivateRoutes'

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/trips/application/:name/:id" element={<ApplicationFormPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/admin/trips/list" element={<AdminHomePage />} />
                        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                    </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
