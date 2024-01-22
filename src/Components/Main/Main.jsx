import { useContext } from "react";
import Header from "../HeaderTemplate/Header";
import Content from "../Content/Content";
import { ThemeContext } from "../../ThemeContext";
import "./Main.css";
import React from 'react';
import { Routes,Route } from "react-router-dom";
import Admin  from '../Users/Admin/Admin';


const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header />
      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='/admin/*' element={<Admin/>}></Route>
      </Routes>
    </div>
  );
};

export default Main;
