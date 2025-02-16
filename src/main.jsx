import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/Aboutus.jsx";
import LostandFound from "./pages/LostandFound.jsx";
import Busease from "./pages/Busease.jsx";
import Checkout from "./pages/Checkout.jsx";
import FAQ from "./pages/FAQ.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Reservation from "./pages/Reservation.jsx";
import Header from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Detail from "./pages/Detail.jsx";
import { HeroUIProvider } from "@heroui/react";
import Invoice from "./pages/Invoice.jsx";
import Found from "./pages/Found.jsx";
import Lost from "./pages/Lost.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/busease" element={<Busease />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/lost-n-found" element={<LostandFound />} />
          <Route path="/lost-n-found/lost" element={<Lost />} />
          <Route path="/lost-n-found/found" element={<Found />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/busease/seat" element={<Detail />} />
          <Route path="/busease/checkout" element={<Checkout />} />
          <Route path="/busease/payment" element={<Invoice />} />
        </Routes>
        <Footer />
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
