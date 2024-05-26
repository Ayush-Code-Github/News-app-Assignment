import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingPage from './components/ListingPage';
import DetailsPage from './components/DetailsPage';
import "./App.css"

const App = () => {
  const [news, setNews] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage setNews={setNews} />} />
        <Route path="/details/:id" element={<DetailsPage news={news} />} />
      </Routes>
    </Router>
  );
};

export default App;
