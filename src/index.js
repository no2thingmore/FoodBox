import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 페이지의 root 요소에 대한 React 루트를 생성
root.render( // React 애플리케이션을 DOM의 root 요소에 렌더링
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter를 사용하여 App 컴포넌트 감싸기 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
