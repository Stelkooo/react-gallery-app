import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <NavLink to='react-gallery-app/cats'>Cats</NavLink>
        </li>
        <li>
          <NavLink to='react-gallery-app/dogs'>Dogs</NavLink>
        </li>
        <li>
          <NavLink to='react-gallery-app/birds'>Birds</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
