import React, { useEffect, useState } from'react';

const DataDisplay = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 这里假设后端提供了获取数据的API接口，比如 /data 这个路由
        fetch('http://localhost:5000/user')
         .then(response => response.json())
         .then(jsonData => setData(jsonData))
         .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <table className="data-table"> {/* 使用类名应用外部CSS文件中定义的样式 */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataDisplay;