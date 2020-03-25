import React, {Component} from 'react';
import {Icon} from '../../../images/open-menu.svg';
import './menu-compact.scss';
import MenuButton from '../menu-button/menu-button'
import resume from '../../../images/resume.svg';
import about from '../../../images/about.svg';
import portfolio from '../../../images/portfolio.svg';
import contacts from '../../../images/contacts.svg';
import ContactPanel from '../../contacts/contact-panel';

export default class MenuCompact extends Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
    }
    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }
    render() {
        return (
            <div ref={this.wrapperRef} className="wrapper">
                <div className="nav">
                    <icon
                        className="nav__icon"
                        type="menu-fold"
                        onClick={() => this.handleClick()}/>
                    <div className="nav__body">
                        <ul>
                            <li className="menu__item">
                                <MenuButton 
                                    name="about" 
                                    url="https://github.com/AlexLysikov" 
                                    icon={about} />
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
                    </div>
                </div>
            </div>
        );
    }
}