import React from 'react';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca-de">Acerca de</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import NavBar from './components/NavBar';

function App()
{
  return (
    <div>
      <NavBar />
      {}
    </div>
  );
}

export default App;
