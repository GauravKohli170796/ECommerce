import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import ProductsViewer from "./components/product/ProductsViewer";
import CarouselProvider from "./components/carousel/CarouselProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Drawer></Drawer>
      <CarouselProvider/>
      <Routes>
        <Route path="/showProducts" element={<ProductsViewer />} />
      </Routes>
    </div>
  );
}

export default App;
