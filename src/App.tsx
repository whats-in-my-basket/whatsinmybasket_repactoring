import "./styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<Category />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
