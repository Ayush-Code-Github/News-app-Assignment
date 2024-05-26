// src/pages/ListingPage.js
import React, { useState, useEffect } from 'react';
import { fetchNews } from '../api';
import { Link } from 'react-router-dom';

const ListingPage = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const articles = await fetchNews(query);
        setNews(articles);
        setError('');
      } catch (err) {
        setError('Failed to fetch news');
      }
      setLoading(false);
    };
    loadNews();
  }, [query]);

  return (
    <div className="listing-page">
      <h1>News Listing</h1>
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {news.length === 0 && !loading && <p>No results found</p>}
      <div className="news-grid">
        {news.map((article, index) => (
          <div className="news-card" key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/details/${index}`}>View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
