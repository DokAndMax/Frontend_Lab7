import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import React from "react";
import GoodsGallery from "./components/GoodsGallery";

function App() {
  return (
    <div className="App">
      <Header name="Кривенок Максим Геннадійович"/>
      <Content/>
      <Image url="https://kyivcity.gov.ua/"
             src="KyivStreet.jpg"
             alt="Вулиця Києва"/>
      <GoodsGallery/>
    </div>
  );
}

export default App;
