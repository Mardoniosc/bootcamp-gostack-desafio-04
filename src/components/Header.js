import React from 'react';
import Mardonio from '../assents/mardonio.jpeg';

function Header() {
  return(
    <header>
      <nav>
        <strong id="logo">DonioBook</strong>
        <div>
          <span>Meu Perfil</span>
          <i className="materia-icons"><img src={Mardonio} alt=""/></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;