import React from 'react';
import './Header.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className='ul'>
          <li className='li'><Link to='/' className='link'>Wonders</Link></li>
          <li className='li'><Link to='/restaurants' className='link'>Places to eat</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;