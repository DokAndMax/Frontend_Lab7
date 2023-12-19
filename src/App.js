import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import React from "react";
import GoodsCard from "./components/GoodsCard";
import GoodsGallery from "./components/GoodsGallery";

function App() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

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
