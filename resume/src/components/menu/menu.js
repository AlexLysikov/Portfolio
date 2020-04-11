import React, { Component } from 'react';
import './menu.scss';
import resume from '../../images/resume.svg';
import about from '../../images/about.svg';
import portfolio from '../../images/portfolio.svg';
import contacts from '../../images/contacts.svg';
import MenuButton from './menu-button/menu-button'
import ContactPanel from '../contacts/contact-panel';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.menuRef = React.createRef();
        this.buttonRef = React.createRef();
    }
    handleClick() {
        const menu = this.menuRef.current;
        const button = this.buttonRef.current;
        menu.classList.toggle('is-visible');
        button.classList.toggle('close');
    }
    
    render() {
        return (
            <nav className="navigation">
                <div 
                    className="menu-toggle-button" 
                    ref={this.buttonRef} 
                    onClick={() => this.handleClick()} />
                <ul ref={this.menuRef} className="menu">
                    <li className="menu__item">
                        <MenuButton 
                            name="about" 
                            url="https://github.com/AlexLysikov" 
                            icon={about} 
                            onChangeItem={this.props.onR} />
                    </li>
                    <li className="menu__item">
                        <MenuButton 
                            name="resume" 
                            url="https://github.com/AlexLysikov" 
                            icon={resume} />
                    </li>
                    <li className="menu__item">
                        <MenuButton 
                            name="contacts" 
                            url="https://github.com/AlexLysikov" 
                            icon={contacts} />
                    </li>
                    <li className="menu__item">
                        <MenuButton 
                            name="portfolio" 
                            url="https://github.com/AlexLysikov" 
                            icon={portfolio} />
                    </li>
                    <li className="menu__item ">
                        <ContactPanel />
                    </li>
                </ul>
                
            </nav>
        );
    };
};