import React from 'react';
import DropDownMenuSimple from './dropdown.js';
import Notifications from './notifications.js';


const navStyle = {
  backgroundColor: '#425576',
  display: 'flex',
  justifyContent: 'spaceBetween',
  alignItems: 'center',
}


export default class Navbar extends React.Component {
  render() {
    return (
      <nav style={navStyle}>
        <a href="#"><img src="./img/logo.jpg"/></a>
        <div class="navigation">
          <a class="nav-btn rec" href="#"><i class="material-icons">group</i>Rekrutacje</a>
          <a class="nav-btn message" href="#"><i class="material-icons">textsms</i>Wiadomości</a>
          <a class="nav-btn profile" href="#"><i class="material-icons">domain</i>Profil firmy</a>
          <a class="nav-btn more" href="#"><i class="material-icons">more_horiz</i></a>
        </div>
        <div class='navigation-user'>
          <Notifications/>
          <DropDownMenuSimple/>
        </div>
      </nav>
    );
  }
}
