import React from 'react';
import './social.scss';

function Social(props) {
    return (
        <a className="social-button" href={props.ref} >
            {props.iconName}
        </a>
    );
};

export default Social;