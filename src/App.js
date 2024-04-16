import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlockSection from './components/BlockSection';
import './App.css';

function App() {
  console.log("Rendering App");
  return (
    <Router>
      <div>
        <Navbar />
        <BlockSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
