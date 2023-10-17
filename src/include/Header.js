import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header_up">
                <ul id="header_left">
                    <li className="upload"><NavLink to ='/upload'>상품등록하기</NavLink></li>
                    <li className="products"><NavLink to ='/products'>상품보기</NavLink></li>
                </ul>
                <ul id="header_right">
                    <li className="login"><NavLink to ='/login'>로그인</NavLink></li>
                    <li className="signup"><NavLink to ='/signup'>회원가입</NavLink></li>
                </ul>
            </div>
            <div id="header">
                <div className="inner">
                    <div className="logo-and-search">
                        <div className="logo">
                            <h1><NavLink to ='/'>FoodBox</NavLink></h1>
                        </div>
                        <form className="search">
                            <input type="search" placeholder='물품 검색'></input>
                        </form>
                    </div>
                </div>
                <ul className="navber">
                    <li><NavLink to ='/navber/korean/korean'>한식</NavLink></li>
                    <li><NavLink to ='/navber/western/western'>양식</NavLink></li>
                    <li><NavLink to ='/navber/japanese/japanese'>일식</NavLink></li>
                    <li><NavLink to ='/navber/chinese/chinese'>중식</NavLink></li>
                    <li><NavLink to ='/navber/snacks/snacks'>분식</NavLink></li>
                    <li><NavLink to ='/navber/fried/fried'>튀김</NavLink></li>
                    <li><NavLink to ='/navber/dessert/dessert'>디저트</NavLink></li>
                    <li><NavLink to ='/navber/salad/salad'>샐러드</NavLink></li>
                    <li><NavLink to ='/navber/others/others'>기타</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;