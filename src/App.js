import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Maps from './components/Map';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'maps':
          return <Maps />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <div className="app">
        <Sidebar onNavigate={setPage} />
        <div className="content">
          {renderPage()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
