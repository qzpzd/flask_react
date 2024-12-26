import React from 'react';
import { Link } from 'react-router-dom';

const BlogContent = () => {
    const articles = [
        { id: 1, title: '文章主题1', image: 'image1.jpg', date: '2023-10-01' },
        { id: 2, title: '文章主题2', image: 'image2.jpg', date: '2023-10-02' },
        { id: 3, title: '文章主题3', image: 'image3.jpg', date: '2023-10-03' },
        { id: 4, title: '文章主题4', image: 'image4.jpg', date: '2023-10-04' },
        { id: 5, title: '文章主题5', image: 'image5.jpg', date: '2023-10-05' },
        { id: 6, title: '文章主题6', image: 'image6.jpg', date: '2023-10-06' },
    ];

    return (
        <div className="grid-container">
            {articles.map(article => (
                <Link to={`/article/${article.id}`} key={article.id} className="blog-content hover:shadow-lg transition duration-300">
                    <img src={article.image} alt={article.title} className="w-full h-auto" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                        <p className="text-gray-600 text-sm">{article.date}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogContent;