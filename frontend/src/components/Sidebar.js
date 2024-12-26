import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col">
            <h2 className="text-lg font-bold mb-4">菜单</h2>
            <ul className="space-y-2">
                <li>
                    <a href="#" className="hover:text-gray-300">首页</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-300">文章</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-300">关于</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-300">联系我们</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;