import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // 引入自定义样式

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="title">我的博客</h1>
                <ul className="nav-links">
                    <Link to="/" className="nav-link">首页</Link>
                    <Link to="/articles" className="nav-link">文章</Link>
                    <Link to="/about" className="nav-link">关于</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;