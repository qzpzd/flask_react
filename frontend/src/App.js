// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 添加顶部菜单栏组件
import Sidebar from './components/Sidebar';
import BlogContent from './components/BlogContent'; // 添加BlogContent导入
import DataDisplay from './components/DataDisplay'; // 假设DataDisplay已经存在
import DataInput from './components/DataInput'; // 假设DataInput已经存在
import './styles/styles.css'; // 引入自定义样式
import 'react-resizable/css/styles.css';
// import 'tailwindcss/tailwind.css';

const App = () => {
  return (
      <Router>
        <Navbar /> {/* Navbar位于页面顶部 */}
        <div className="flex flex-row h-screen"> {/* 设置为水平排列并占满整个屏幕高度 */}
          <Sidebar /> {/* Sidebar位于页面左侧 */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<BlogContent />} />
              <Route path="/articles" element={<BlogContent />} />
              <Route path="/about" element={<DataDisplay />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;