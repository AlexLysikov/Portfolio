import React, { Component } from 'react';
import './menu.scss';
import CONSTELLATION1 from '../../images/CONSTELLATION1.svg'
import CONSTELLATION2 from '../../images/CONSTELLATION2.svg'
import MenuButton from '../menu/menu-button/menu-button'
import ContactPanel from '../contacts/contact-panel';

export default class Menu extends Component {
  render() {
    return (
        <div className="menu">
            <nav className="menu__navbar">
                <MenuButton 
                    name="about" 
                    url="https://github.com/AlexLysikov" 
                    fromTop="10%" 
                    fromLeft="25%" 
                    imgPlace={CONSTELLATION1} />

                <MenuButton 
                    name="resume" 
                    url="https://github.com/AlexLysikov" 
                    fromTop="40%" 
                    fromLeft="15%" 
                    imgPlace={CONSTELLATION2} />

                <MenuButton 
                    name="contacts" 
                    url="https://github.com/AlexLysikov" 
                    fromTop="35%" 
                    fromLeft="80%" 
                    imgPlace={CONSTELLATION2} />
                
                <MenuButton 
                    name="portfolio" 
                    url="https://github.com/AlexLysikov" 
                    fromTop="15%" 
                    fromLeft="70%" 
                    imgPlace={CONSTELLATION2} />
            </nav>
            
            <nav className="menu__social" >
                <ContactPanel />
            </nav>

        </div>

    
      );
  };
};