import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">我的博客</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white hover:text-gray-300">首页</Link></li>
                    <li><Link to="/articles" className="text-white hover:text-gray-300">文章</Link></li>
                    <li><Link to="/about" className="text-white hover:text-gray-300">关于</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;