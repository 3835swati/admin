import { useContext } from "react";
import Header from "../HeaderTemplate/Header";
import Content from "../Content/Content";
import { ThemeContext } from "../../ThemeContext";
import "./Main.css";
import React from 'react';


const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header />
      <Content />
    </div>
  );
};

export default Main;
