import './App.css';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main';
import ProductPage from './product';
import { Routes, Route, useLocation } from 'react-router-dom';
import Uploadpage from './upload';
import SignupPage from './signup';
import LoginPage from './login';

function App() {
  const location = useLocation(); // 현재 페이지의 위치 정보 가져오기

  return (
    <div className="App"> 
      {/* 파일이름으로 부르는 것이 아니라 component 이름을 부르기 */}
      {location.pathname !== '/login' && <Header />} {/* 로그인 페이지가 아닐 경우 Header 컴포넌트를 렌더링 */}
      <Routes>
        <Route path="/" element={<MainPage/>}/> {/* 라우팅 컨테이너 */}
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/upload" element={<Uploadpage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      {location.pathname !== '/login' && <Footer />} {/* 로그인 페이지가 아닐 경우 Footer 컴포넌트를 렌더링 */}
    </div>
  );
}

export default App;