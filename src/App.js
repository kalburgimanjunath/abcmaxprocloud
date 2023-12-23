import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/";
import { Dashboard } from "./pages/";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
}
