import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <Link to="/login">
        <button className="botozinho">Fazer Login</button>
      </Link>
    </div>
  );
}

export default Home;
