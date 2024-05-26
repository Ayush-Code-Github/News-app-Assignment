import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = ({ news }) => {
  const { id } = useParams();
  const article = news[id];

  if (!article) return <p>Article not found</p>;

  return (
    <div className="details-page">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default DetailsPage;
