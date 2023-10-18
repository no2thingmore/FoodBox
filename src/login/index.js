import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container login">
      <form className="login">
        <h1>Login</h1>
        <span className="field">아이디</span>
        <input type="email" placeholder="ID" />
        {/* 아이디 입력창 */}
        <span className="field">비밀번호</span>
        <input type="password" placeholder="Password" />
        {/* 비밀번호 입력창 */}

        <input type="button" value="로그인" className="LoginBtn"/>
        <div className="save-info">
          <label>
            <input type="checkbox" className="check" />
          </label>
          <div className="auto_login">
            자동 로그인
          </div>
        </div>
        <div className="sns-info">
          또는
          <div className="sns">
            <a href="#none">
              <i className="xi-google"></i>
            </a>
            <a href="#none">
              <i className="xi-facebook"></i>
            </a>
            <a href="#none">
              <i className="xi-naver"></i>
            </a>
            <a href="#none">
              <i className="xi-kakaotalk"></i>
            </a>
          </div>
        </div>
        <div className="signup-info">
          <ul>
            <li>
              <a href="#none">아이디 찾기</a> {/* 아이디 찾기 링크 */}
            </li>
            <li>
              <a href="#none">비밀번호 찾기</a> {/* 비밀번호 찾기 링크 */}
            </li>
            <li>
              <a href="#none">회원가입</a> {/* 회원가입 링크 */}
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Login;
