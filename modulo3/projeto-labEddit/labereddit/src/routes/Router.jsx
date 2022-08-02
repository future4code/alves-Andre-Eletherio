import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import { PrivateRoutes } from './PrivateRoutes'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/post/:id/:page/:size" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
