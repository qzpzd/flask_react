import React from 'react';
import Navbar from './components/Navbar'; // 添加顶部菜单栏组件
import Sidebar from './components/Sidebar';
import BlogContent from './components/BlogContent'; // 添加BlogContent导入
import DataDisplay from './components/DataDisplay'; // 假设DataDisplay已经存在
import DataInput from './components/DataInput'; // 假设DataInput已经存在

const App = () => {
    return (
        <div>
            <DataDisplay />
            <DataInput />
        </div>
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Navbar /> {/* 添加顶部菜单栏 */}
            <div className="flex flex-1">
                <div className="w-1/4">
                    <Sidebar/>
                </div>
                <div className="w-3/4 p-4">
                    <BlogContent />
                    <DataDisplay />
                    <DataInput />
                </div>
            </div>
        </div>
    );
};

export default App;