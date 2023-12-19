import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Image from "./Components/Image";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header name="Кривенок Максим Геннадійович"/>
      <Content/>
      <Image url="https://kyivcity.gov.ua/"
             src="KyivStreet.jpg"
             alt="Вулиця Києва"/>
    </div>
  );
}

export default App;
