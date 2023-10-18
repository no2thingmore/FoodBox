import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container login">
      <form className="login">
        <h1>Login</h1>
        <span className="field">ID</span>
        <input type="email" placeholder="아이디를 입력하세요" />{" "}
        {/* 아이디 입력창 */}
        <span className="field">PW</span>
        <input type="password" placeholder="비밀번호를 입력하세요" />{" "}
        {/* 비밀번호 입력창 */}
        <div className="save-info">
          <label>
            <input type="checkbox" id="save-email" />{" "}
            {/* 자동 로그인 체크박스 */}
            <em></em>자동 로그인
          </label>
        </div>
        <input type="button" value="로그인" />
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
