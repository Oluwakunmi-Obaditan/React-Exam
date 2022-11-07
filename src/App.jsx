import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProtectedRoute from './pages/Protected';
import AuthContextProvider from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import './App.css'

export default function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
         <Route path="/signin" element={
         <Signin />
         } />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  )
}
