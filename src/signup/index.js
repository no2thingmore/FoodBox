import React from 'react';
import "./index.css";

const Signup = () => {
  return (
    <form className="signup-form">
      <h3>회원가입</h3>

      <div className="form-group">
        <label>성</label>
        <input type="text" className="form-control" placeholder="First name" />
        {/* 성 입력창 */}
      </div>

      <div className="form-group">
        <label>이름</label>
        <input type="text" className="form-control" placeholder="Last name" />
        {/* 이름 입력창 */}
      </div>

      <div className="form-group">
        <label>이메일</label>
        <input type="email" className="form-control" placeholder="Enter email" />
        {/* 이메일 입력창 */}
      </div>

      <div className="form-group">
        <label>비밀번호</label>
        <input type="password" className="form-control" placeholder="Enter password" />
        {/* 비밀번호 입력창 */}
      </div>

      <div>
        <div><button type="submit" className="btn-signup"> {/* 가입하기 버튼 */}
          가입하기
        </button></div>
        <div><button type="submit" className="btn-kakao"> {/* 카카오 로그인 버튼 */}
          KaKao Login
        </button></div>
        <div><button type="submit" className="btn-google"> {/* 구글 로그인 버튼 */}
          GoogleLogin
        </button></div>
      </div>
      <p>
        Already registered <a href="/sign-in">sign in?</a> {/* 로그인 창으로 넘어가는 링크 */}
      </p>
    </form>
  )
}

export default Signup;
