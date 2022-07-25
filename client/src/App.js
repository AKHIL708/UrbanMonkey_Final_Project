import "./App.css";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import MainPage from "./Components/MainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import CartItems from "./Components/CartItems";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </>
  );
}

export default App;
