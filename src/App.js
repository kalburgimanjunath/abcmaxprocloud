import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/";
import { Dashboard, Viewer } from "./pages/";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
}
