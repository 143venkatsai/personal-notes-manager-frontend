import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import NotesManager from "./NoteDetails/NotesManager"
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("token"));

  useEffect(() =>{
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  },[]);

  const handleLoginSuccess = () => setIsAuthenticated(true);
  const handleSignupSuccess = () => window.location.href = "/login";

  return(
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <NotesManager /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp onSignupSuccess={handleSignupSuccess} />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      </Routes>
    </Router>
  )
}
export default App