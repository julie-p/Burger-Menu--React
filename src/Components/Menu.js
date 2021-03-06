import React, { useState } from 'react';

function Menu() {

    const [ isOpen, setIsOpen] = useState(false);

    let menuToggler = "menu-toggler";
    let topNav = "top-nav";
    switch (isOpen) {
        case true:
        menuToggler += " open";
        topNav += " open";
        break;
        default :
        menuToggler = "menu-toggler";
        topNav = "top-nav";
        break;
    };

    return (

      <header>
    
        <div className={menuToggler} isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}>
          <div className="bar half start"></div>
          <div className="bar"></div>
          <div className="bar half end"></div>
        </div>
    
        <nav className={topNav}>
          {/* <ul className="nav-list">
            <li>
              <Link className="nav-link">Accueil</Link>
            </li>
            <li>
              <Link className="nav-link">La Story</Link>
            </li>
            <li>
              <Link className="nav-link">Bons Plans</Link>
            </li>
            <li>
              <Link className="nav-link">Mes Coups de Coeur</Link>
            </li>
            <li>
              <Link className="nav-link">Mon Profil</Link>
            </li>
            <li>
              <Link className="nav-link">Mes Paramètres</Link>
            </li>
            <li>
              <Link className="nav-link">Déconnexion</Link>
            </li>
          </ul> */}
        </nav>
    
      </header>
  
    )
};

export default Menu;