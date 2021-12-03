import React from 'react';

import Navbar from './components/Navbar';
import QrForm from './components/QrForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center">My QR Gen</h1>
        <br />
        <br />
        <br />
        <QrForm />
      </div>
    </>
  );
}

export default App;
