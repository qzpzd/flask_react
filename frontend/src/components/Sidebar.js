// Sidebar.js
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import '../styles/styles.css';
import 'react-resizable/css/styles.css';

const Sidebar = () => {
  const [width, setWidth] = useState(200);

  return (
    // <Resizable
    //   width={width}
    //   height={window.innerHeight - 100}
    // //   handle={<span className="react-resizable-handle" />}
    //   onResize={(e, { size }) => {
    //     console.log('Resizing:', size.width);
    //     setWidth(size.width);
    //   }}
    //   draggableOpts={{ enableUserSelectHack: false }}
    // >
      <div className="sidebar">
        <h2>菜单</h2>
        <ul>
          <li><a href="#" className="hover:text-gray-300">首页</a></li>
          <li><a href="#" className="hover:text-gray-300">文章</a></li>
          <li><a href="#" className="hover:text-gray-300">关于</a></li>
          <li><a href="#" className="hover:text-gray-300">联系我们</a></li>
        </ul>
      </div>
    // </Resizable>
  );
};

export default Sidebar;