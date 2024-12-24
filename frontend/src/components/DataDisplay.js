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
            {data.map(item => (
                <div key={item.id}>
                    <p>{item.id} {item.name} {item.email}</p>
                </div>
            ))}
        </div>
    );
};

export default DataDisplay;