import React, { useState } from'react';

const DataInput = () => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    // 验证邮箱格式的函数（简单示例，可根据实际更严格的要求完善）
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 验证name字段不为空
        if (!newName.trim()) {
            alert('姓名不能为空，请输入姓名');
            return;
        }

        // 验证email字段格式是否正确
        if (!validateEmail(newEmail)) {
            alert('请输入正确的邮箱格式');
            return;
        }

        // 发送POST请求到后端的 /add_user_data 路由，传递包含name和email字段的JSON数据
        fetch('http://localhost:5000/add_user_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                email: newEmail
            })
        })
        .then(() => {
                setNewName('');
                setNewEmail('');
                // 这里简单通过重新加载页面来刷新（后续可优化为更优雅的方式，比如只更新相关组件状态来触发重新渲染）
                window.location.reload();
            })
        .catch(error => console.error('Error adding data:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                id="name-input"
                name="name"
                autoComplete="name" // 添加autoComplete属性，设置为适合姓名输入的属性值
            />
            <input
                type="text"
                placeholder="Enter email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                id="email-input"
                name="email"
                autoComplete="email" // 添加autoComplete属性，设置为适合邮箱输入的属性值
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataInput;