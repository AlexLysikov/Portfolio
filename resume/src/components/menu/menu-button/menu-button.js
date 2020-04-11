import React from 'react';
import './menu-button.scss';
import back from '../../../images/black-hole.svg'

export default function MenuButton(props) {
    return (
        <div 
            className="menu-button" 
            onclick={ this.props.onChangeItem } 
            >
            <div className="menu-button__img">
                <img className="menu-button__img-front" src={props.icon} alt="" />
                <img className="menu-button__img-back" src={back} alt="" />
            </div>
            <span className="menu-button__name" >
                {props.name}
            </span>
        </div>
    );
};