import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import Login from './pages/login'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}
