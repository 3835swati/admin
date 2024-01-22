import React from 'react';
import { useState } from "react";
import "./App.css";
import Admin from './Components/Users/Admin/Admin';
import Navigation from "./Components/NavigationTemplate/Navigation";
import Main from "./Components/Main/Main";
import { ThemeContext } from "./ThemeContext";
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowAdmin from './Components/Users/Admin/ShowAdmin';
import AddAdmin from './Components/Users/Admin/AddAdmin';

function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={
          <div className='home'>
            <Navigation />
            <Main/>
            
          </div>
        } />
        
      </Routes>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
