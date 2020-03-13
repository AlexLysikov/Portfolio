import React from 'react';
import './menu-button.scss';

function MenuButton(props) {
    return (
        <div 
            className="menu-button" 
            style={{
                top: `${props.fromTop}`, 
                left: `${props.fromLeft}`,
                backgroundImage: `url(${props.imgPlace})`
                }}>
            <a className="menu-button__ref" href={props.url} >
                {props.name}
            </a>
        </div>
    );
};

export default MenuButton;