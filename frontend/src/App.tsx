import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Drawer from "./components/drawer/Drawer";
import Header from "./components/header/Header";
import AllProducts from "./components/product/AllProducts";
import ProductDetail from "./components/product/ProductDetail";
import { fetchProducts } from "./redux/actions/asyncActions";


function App() {
  const dispatch = useDispatch<any>();
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Jost',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  useEffect(() => {
    dispatch(fetchProducts("1"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Drawer></Drawer>
        <Routes>
          <Route path="/showProducts" element={<AllProducts />} />
        </Routes>
        <Routes>
          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
        </ThemeProvider>
    </div>
  );
}

export default App;
