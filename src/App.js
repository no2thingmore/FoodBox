import "./App.css";
import Footer from "./include/Footer";
import Header from "./include/Header";
import MainPage from "./main";
import ProductPage from "./product";
import { Routes, Route, useLocation } from "react-router-dom";
import Uploadpage from "./upload";
import SignupPage from "./signup/signup";
import Login from "./login";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* 파일이름으로 부르는 것이 아니라 component 이름을 부르기 */}
      {location.pathname !== "/signup" && location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/upload" element={<Uploadpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== "/signup" && location.pathname !== "/login" && <Footer />}

    </div>
  );
}

export default App;
